import { SET_PILLARS, SET_CATEGORIES, SET_LEVELS, UPDATE_LEVEL } from '../constants/mutations';
import { getQuestionsNormalized } from '../services/questions';

const state = () => ({
  pillars: [],
  categories: [],
  levels: [],
});

const getters = {
  pillarsAsArray: (state) => {
    return Object.values(state.pillars);
  },
  isCategoryFilled: (state) => (categoryId) => {
    return (
      state.categories[categoryId].levels
        .map((levelId) => state.levels[levelId])
        .find((label) => label.selected) != null
    );
  },
  isPillarFilled: (state, getters) => (pillarId) => {
    return (
      state.pillars[pillarId].categories
        .map((category) => getters.isCategoryFilled(category))
        .find((category) => !category) == null
    );
  },
  getScoreByPillar: (state, getters) => (pillarName) => {
    const pillarFound = getters.pillarsAsArray.find((pillar) => pillar.name === pillarName);

    if (pillarFound && pillarFound.categories) {
      const reducer = (accumulator, category) => {
        const levels = state.categories[category].levels.map((level) => state.levels[level]);
        const selectedLevel = levels.find((level) => level.selected)?.level ?? 0;

        return accumulator + selectedLevel;
      };

      let score = pillarFound.categories.reduce(reducer, 0) / pillarFound.categories.length;

      if (!Number.isInteger(score)) {
        score = score.toPrecision(2);
      }

      if (score === 0) {
        return 0.1;
      }

      return score;
    }

    return 0;
  },
};

const mutations = {
  [SET_PILLARS](state, pillars) {
    state.pillars = { ...pillars };
  },
  [SET_CATEGORIES](state, categories) {
    state.categories = { ...categories };
  },
  [SET_LEVELS](state, levels) {
    state.levels = { ...levels };
  },
  [UPDATE_LEVEL](state, level) {
    state.levels[level.id] = { ...state.levels[level.id], ...level };
  },
};

const actions = {
  async fetchQuestions({ commit }) {
    return new Promise((resolve) => {
      const questionsNormalized = getQuestionsNormalized();

      commit(SET_PILLARS, questionsNormalized.entities.pillars);
      commit(SET_CATEGORIES, questionsNormalized.entities.categories);
      commit(SET_LEVELS, questionsNormalized.entities.levels);

      resolve(true);
    });
  },
  toggleLevel({ state, commit }, { levelId, categoryId }) {
    state.categories[categoryId].levels.map((level) =>
      commit(UPDATE_LEVEL, { ...state.levels[level], selected: false })
    );

    commit(UPDATE_LEVEL, { ...state.levels[levelId], selected: !state.levels[levelId].selected });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

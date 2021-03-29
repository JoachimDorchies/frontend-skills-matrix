<template>
  <div class="loader">
    <img class="loader__spinner" src="@/assets/atecna-cube.svg" alt="Loader" />
    <img src="@/assets/atecna-text.svg" alt="Loader" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
.loader {
  &__spinner {
    animation-duration: 2s;
    animation-name: bounce;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    transform-origin: 50% 50%;
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    5% {
      transform: scale(1.2, 0.8) translateY(0);
    }
    15% {
      transform: scale(0.8, 1.2) translateY(-25px);
    }
    25% {
      transform: scale(1.2, 0.8) translateY(7px);
    }
    32% {
      transform: scale(1, 1) translateY(-7px);
    }
    40% {
      transform: scale(1, 1) translateY(0);
    }
  }
}
</style>

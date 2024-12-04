<template>
    <NuxtLink :to="to" class="relative inline-block text-center">
      <!-- SVG supérieur avec texte -->
      <div class="relative">
        <svg
          class="absolute top-0 left-1/2 -translate-x-1/2"
          width="75"
          height="21"
          viewBox="0 0 120 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2918_167)">
            <path d="M32.8194 33.5675L32.849 33.5646H32.8787C55.3747 33.5646 78.041 33.3425 100.904 32.9075L100.92 32.9072L100.936 32.9078C104.188 33.0186 107.467 33.074 110.771 33.074H113.337H113.365L113.393 33.0766C114.976 33.2235 116.384 33.2962 117.604 33.2962C118.213 33.2962 118.698 33.2734 119.067 33.2308C119.18 33.2177 119.278 33.2032 119.361 33.1882C118.72 25.5505 118.393 18.8465 118.393 13.0611C118.393 7.90734 118.513 4.13272 118.759 1.76812H118.154L90.0777 1.76813L90.0739 1.7681L26.9363 1.37933C26.9356 1.37933 26.935 1.37933 26.9343 1.37933C26.4635 1.3792 26.0453 1.32874 25.6728 1.21271H25.6143H25.5094L25.4105 1.17774C25.1669 1.09159 24.896 1.04609 24.6065 1.0462L24.5947 1.04597L2.12607 0.613018C1.78703 0.739948 1.52126 0.928921 1.31718 1.18623V2.85086H1.31734L1.31703 2.86465L0.627968 33.3822C0.83046 33.6551 1.09775 33.9853 1.44147 34.3769L2.47346 34.3335L2.47346 34.3333L2.48719 34.3331L11.007 34.1667V34.1663C21.5054 34.1663 28.7687 33.9623 32.8194 33.5675ZM118.765 1.70787C118.775 1.61179 118.785 1.51809 118.796 1.42677C118.786 1.42574 118.775 1.42471 118.765 1.42369V1.70787Z" fill="#CCCAE6" stroke="#5D4F9C" stroke-width="1.22252"/>
          </g>
          <defs>
            <clipPath id="clip0_2918_167">
              <rect width="35" height="120" fill="white" transform="matrix(0 -1 -1 0 120 35)"/>
            </clipPath>
          </defs>
        </svg>
        <span class="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-[2px] text-primary text-xs">{{ title }}</span>
      </div>

      <!-- Conteneur principal -->
      <svg
        class="block mx-auto"
        width="233"
        height="78"
        viewBox="0 0 373 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <g clip-path="url(#clip0_2918_165)">
        <path d="M338.785 85.4541C306.156 85.4541 283.494 84.9537 270.8 83.9757C200.863 83.9757 130.397 83.4298 59.3199 82.3608C49.1893 82.6337 38.9774 82.7702 28.6841 82.7702H20.7098C15.7462 83.1341 11.3116 83.3161 7.44649 83.3161C3.58141 83.3161 1.09963 83.0886 -0.0395508 82.6337C2.03538 63.3912 3.09319 46.5596 3.09319 32.0936C3.09319 17.6276 2.60497 7.68792 1.62853 2.29728C2.11675 2.11532 3.50004 1.97885 5.73772 1.88786V2.84316H93.007L289.271 1.88786C290.736 1.88786 291.916 1.7514 292.892 1.47845H293.381C294.357 1.20551 295.415 1.06903 296.513 1.06903L366.695 0C368.444 0.45491 369.828 1.25099 370.804 2.43375V7.00556L372.96 82.4972C372.147 83.407 370.967 84.567 369.339 86L365.23 85.8635L338.704 85.4541H338.785Z" fill="#5D4F9C"/>
        </g>
        <defs>
        <clipPath id="clip0_2918_165">
        <rect width="86" height="373" fill="white" transform="matrix(0 -1 1 0 0 86)"/>
        </clipPath>
        </defs>
      </svg>

      <!-- Texte -->
      <div class="absolute inset-0 flex items-center justify-center z-10">
        <p class="font-bold text-secondary text-[28px] tracking-widest flex gap-2 items-center translate-y-[2px]">
          <slot />
        </p>
      </div>
    </NuxtLink>
  </template>

  <script setup lang="ts">
  defineProps({
    to: {
      type: String,
    },
    title: {
      type: String,
      default: 'Ready',
    },
  });
  </script>

  <style scoped>
  svg {
    z-index: 0;
  }
  </style>

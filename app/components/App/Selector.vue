<template>
  <div class="relative inline-block text-center">
    <!-- SVG supérieur avec texte -->
    <div class="relative z-10 -translate-y-[2px]">
      <svg
        class="absolute top-0 left-1/2 -translate-x-1/2 scale-x-125"
        width="75"
        height="21"
        viewBox="0 0 120 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2918_167)">
          <path
            d="M32.8194 33.5675L32.849 33.5646H32.8787C55.3747 33.5646 78.041 33.3425 100.904 32.9075L100.92 32.9072L100.936 32.9078C104.188 33.0186 107.467 33.074 110.771 33.074H113.337H113.365L113.393 33.0766C114.976 33.2235 116.384 33.2962 117.604 33.2962C118.213 33.2962 118.698 33.2734 119.067 33.2308C119.18 33.2177 119.278 33.2032 119.361 33.1882C118.72 25.5505 118.393 18.8465 118.393 13.0611C118.393 7.90734 118.513 4.13272 118.759 1.76812H118.154L90.0777 1.76813L90.0739 1.7681L26.9363 1.37933C26.9356 1.37933 26.935 1.37933 26.9343 1.37933C26.4635 1.3792 26.0453 1.32874 25.6728 1.21271H25.6143H25.5094L25.4105 1.17774C25.1669 1.09159 24.896 1.04609 24.6065 1.0462L24.5947 1.04597L2.12607 0.613018C1.78703 0.739948 1.52126 0.928921 1.31718 1.18623V2.85086H1.31734L1.31703 2.86465L0.627968 33.3822C0.83046 33.6551 1.09775 33.9853 1.44147 34.3769L2.47346 34.3335L2.47346 34.3333L2.48719 34.3331L11.007 34.1667V34.1663C21.5054 34.1663 28.7687 33.9623 32.8194 33.5675ZM118.765 1.70787C118.775 1.61179 118.785 1.51809 118.796 1.42677C118.786 1.42574 118.775 1.42471 118.765 1.42369V1.70787Z"
            :fill="dark ? '#5D4F9C' : '#CCCAE6'"
            stroke="#5D4F9C"
            stroke-width="1.22252"
          />
        </g>
        <defs>
          <clipPath id="clip0_2918_167">
            <rect width="35" height="120" fill="white" transform="matrix(0 -1 -1 0 120 35)"/>
          </clipPath>
        </defs>
      </svg>
      <span :class="dark ? 'text-secondary' : 'text-primary'" class="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-[2px] text-xs">{{ title }}</span>
    </div>

    <!-- SVG background -->
    <div class="relative">
        <svg
      <svg
        v-if="!dark"
        class="block mx-auto scale-y-110 -z-10"
        width="233"
        height="78"
        viewBox="0 0 373 86"
        fill="#5D4F9C"
        xmlns="http://www.w3.org/2000/svg"
      >
      <g clip-path="url(#clip0_2918_165)">
        <path
          d="M338.785 85.4541C306.156 85.4541 283.494 84.9537 270.8 83.9757C200.863 83.9757 130.397 83.4298 59.3199 82.3608C49.1893 82.6337 38.9774 82.7702 28.6841 82.7702H20.7098C15.7462 83.1341 11.3116 83.3161 7.44649 83.3161C3.58141 83.3161 1.09963 83.0886 -0.0395508 82.6337C2.03538 63.3912 3.09319 46.5596 3.09319 32.0936C3.09319 17.6276 2.60497 7.68792 1.62853 2.29728C2.11675 2.11532 3.50004 1.97885 5.73772 1.88786V2.84316H93.007L289.271 1.88786C290.736 1.88786 291.916 1.7514 292.892 1.47845H293.381C294.357 1.20551 295.415 1.06903 296.513 1.06903L366.695 0C368.444 0.45491 369.828 1.25099 370.804 2.43375V7.00556L372.96 82.4972C372.147 83.407 370.967 84.567 369.339 86L365.23 85.8635L338.704 85.4541H338.785Z"
          stroke="#5D4F9C"
          stroke-width="2"
        />
        </g>
        <defs>
        <clipPath id="clip0_2918_165">
        <rect width="86" height="373" fill="white" transform="matrix(0 -1 1 0 0 86)"/>
        </clipPath>
        </defs>
      </svg>
      <svg v-else class="block mx-auto scale-y-110 -z-10"
        width="233"
        height="78"
        viewBox="0 0 615 143" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2922_430)">
        <path d="M446.647 137.035L446.571 137.029H446.494C331.192 137.029 215.017 136.13 97.8361 134.367L97.7941 134.366L97.7521 134.368C81.0671 134.817 64.2477 135.042 47.2939 135.042H34.146H34.0727L33.9997 135.047C25.8517 135.645 18.5901 135.942 12.2775 135.942C9.12313 135.942 6.57326 135.849 4.60242 135.669C3.58069 135.576 2.75544 135.462 2.10435 135.339C5.41101 104.268 7.09982 77.0045 7.09982 53.4867C7.09982 31.2827 6.40511 15.3949 4.97953 5.97656C5.04725 5.96938 5.11693 5.96222 5.18861 5.95509C5.81816 5.89253 6.57496 5.83516 7.46009 5.78345V7.25873H9.46009L153.349 7.25876L153.359 7.2587L476.949 5.68364C476.95 5.68364 476.951 5.68364 476.952 5.68364C479.356 5.68344 481.407 5.47136 483.184 5.00859H483.724H483.998L484.262 4.93475C485.68 4.5385 487.241 4.33356 488.889 4.33356H488.904L488.92 4.33331L604.356 2.57495C606.518 3.17351 608.17 4.10403 609.379 5.34669V12.1217V12.1502L609.38 12.1788L612.912 135.84C611.775 137.057 610.241 138.551 608.234 140.342L602.255 140.143L602.238 140.143L602.22 140.142L558.586 139.469V139.467C504.785 139.467 467.491 138.641 446.647 137.035Z" fill="#CCCAE6" stroke="#5D4F9C" stroke-width="4"/>
        </g>
        <defs>
        <clipPath id="clip0_2922_430">
        <rect width="141.796" height="615" fill="white" transform="matrix(0 -1 1 0 0 142.367)"/>
        </clipPath>
        </defs>
        </svg>
    </div>

    <!-- Select -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        :class="dark ? 'text-primary bg-secondary' : 'text-secondary bg-primary'"
        class="font-bold text-[28px] tracking-widest appearance-none border-none focus:outline-none cursor-pointer text-center"
      >
        <option v-for="user in users" :key="user.name" :value="user.name">
          {{ user.name }}
        </option>
      </select>
      <svg v-if="arrow" class="absolute right-6" width="16" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.69531 1.84741L24.3164 16.3896L1.69531 30.9317V1.84741Z" :fill="dark ? '#5D4F9C' : '#CCCAE6'" :stroke="dark ? '#5D4F9C' : '#CCCAE6'" stroke-width="3.23159" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  name: string;
}
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  users: {
    type: Array as PropType<User[]>,
    required: true
  },
  title: {
    type: String,
    default: 'Ready',
  },
  arrow: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
svg {
  z-index: 0;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select::-ms-expand {
  display: none;
}
</style>
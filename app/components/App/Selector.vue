<template>
  <section class="relative flex min-h-screen w-full flex-col items-center justify-center">
    <FallingStarsBg class="bg-secondary" />
    <div class="absolute inset-0 z-[1] bg-secondary opacity-50"></div>

    <div class="z-[2] flex max-w-xl flex-col items-center gap-2">
      <BlurReveal
        :delay="0.5"
        class="flex flex-col items-center justify-center gap-4"
      >
        <Logo class="w-32 h-32" />

        <span class="flex flex-col items-center justify-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
          <span>
            Master
            <FlipWords
              :words="['SEO', 'Marketing', 'Traffic']"
              :duration="3000"
              class="w-52 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
            />
          </span>
          Strategy Game
        </span>

        <span class="text-center text-xl text-white">
          Compete with friends to reach 1000 users per month using SEO tactics
        </span>

        <div class="my-2 flex flex-row items-center justify-center gap-4">
          <AppButton to="/play" title="ready ?">
            Play Now
          </AppButton>
          <AppButton
            to="#features"
            variant="secondary"
          >
            Learn More
          </AppButton>
        </div>

        <div class="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-px md:shadow-xl">
          <img
            src="/img/landing.png"
            class="w-full rounded-md"
            alt="From Zero to SEO Game Preview"
          />
          <BorderBeam
            :size="250"
            :duration="12"
            :delay="9"
            :border-width="2"
          />
        </div>
      </BlurReveal>
    </div>

    <!-- Le reste des sections (features, how to play, etc.) reste en dessous -->
    <div class="container mx-auto px-4 py-12">
      <!-- Sections existantes... -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { FallingStarsBg } from '@/components/FallingStarsBg'
import { BlurReveal } from '@/components/BlurReveal'
import { FlipWords } from '@/components/FlipWords'
import { BorderBeam } from '@/components/BorderBeam'

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

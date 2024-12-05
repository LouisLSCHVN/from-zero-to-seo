<template>
  <div class="min-h-screen bg-gradient-to-b bg-secondary text-primary">
    <header class="container mx-auto py-6 px-4">
      <nav class="flex justify-center items-center">
        <ul class="flex space-x-6">
          <li><a href="#about" class="hover:text-white/80 transition-colors">About</a></li>
          <li><a href="#features" class="hover:text-white/80 transition-colors">Features</a></li>
          <li><a href="#how-to-play" class="hover:text-white/80 transition-colors">How to Play</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Nouvelle section hero -->
      <section class="relative flex min-h-screen w-full flex-col items-center justify-center text-center">
        <FallingStarsBg class="bg-secondary" />
        <div class="absolute inset-0 z-[1] bg-secondary opacity-50"></div>

        <div class="z-[2] flex max-w-xl flex-col items-center gap-6">
          <BlurReveal
            :delay="0.5"
            class="flex flex-col items-center justify-center gap-4"
          >
            <Logo class="w-32 h-32" />

            <span class="flex flex-col items-center justify-center bg-gradient-to-b text-secondary bg-primary bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
              <span>
                Master SEO
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
            </div>

            <div class="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-px md:shadow-xl">
              <img
                src="/img/landing.png"
                class="w-full rounded-md mx-5"
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
      </section>

      <!-- Sections existantes -->
      <div class="container mx-auto py-12 pt-20 max-w-prose">
        <section id="about" class="mb-16 p-6 rounded-md bg-primary text-secondary">
          <h2 class="text-3xl font-bold mb-4">About the Game</h2>
          <p class="text-lg">
            "From Zero to SEO" is an exciting card game that simulates the world of digital marketing and SEO.
            Perfect for students and professionals in marketing, this game teaches you the ins and outs of
            acquisition traffic while you compete to be the first to reach 1000 users per month.
          </p>
        </section>

        <section class="relative w-full py-40 h-[140vh]">
          <h2 class="text-4xl font-bold text-center mb-12">
            Discover The Cards
          </h2>

          <div class="flex items-center justify-center gap-12 py-12 px-4 max-w-7xl mx-auto scale-90">
            <ClientOnly>
              <!-- Première carte - inclinée vers la gauche -->
              <div class="hidden lg:block transform -rotate-6 transition-all duration-300">
                <CardContainer class="shadow-xl">
                  <CardBody>
                    <Card1 />
                  </CardBody>
                </CardContainer>
              </div>

              <!-- Carte centrale - plus grande -->
              <div class="transform scale-125 transition-all duration-300 z-10">
                <CardContainer class="shadow-2xl">
                  <CardBody>
                    <Card2 />
                  </CardBody>
                </CardContainer>
              </div>

              <!-- Dernière carte - inclinée vers la droite -->
              <div class="hidden lg:block transform rotate-6 transition-all duration-300">
                <CardContainer class="shadow-xl">
                  <CardBody>
                    <Card3 />
                  </CardBody>
                </CardContainer>
              </div>
            </ClientOnly>
          </div>
        </section>

        <section id="features" class="mb-16 p-6">
          <h2 class="text-3xl font-bold mb-4">Game Features</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <CardSpotlight class="p-6">
              <div class="flex flex-col">
                <h3 class="text-xl font-bold mb-2">Strategic Gameplay</h3>
                <p>Use Traffic, Penalty, Repair, and Joker cards to boost your site and hinder opponents.</p>
              </div>
            </CardSpotlight>

            <CardSpotlight class="p-6">
              <div class="flex flex-col">
                <h3 class="text-xl font-bold mb-2">Budget Management</h3>
                <p>Manage your budget wisely to play cards and grow your virtual website.</p>
              </div>
            </CardSpotlight>

            <CardSpotlight class="p-6">
              <div class="flex flex-col">
                <h3 class="text-xl font-bold mb-2">Real SEO Concepts</h3>
                <p>Learn about keywords, backlinks, influencer marketing, and more as you play.</p>
              </div>
            </CardSpotlight>

            <CardSpotlight class="p-6">
              <div class="flex flex-col">
                <h3 class="text-xl font-bold mb-2">Interactive Experience</h3>
                <p>Engage with friends in a 2-4 player game that's both fun and educational.</p>
              </div>
            </CardSpotlight>
          </div>
        </section>

        <section id="how-to-play" class="mb-16">
          <div class="relative overflow-hidden rounded-2xl bg-primary/10 p-8 backdrop-blur-sm">
            <h2 class="text-4xl font-bold mb-8 text-center">
              How to Play
            </h2>

            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <CardSpotlight v-for="(step, index) in howToPlaySteps" :key="index" class="p-6">
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xl font-bold">
                    {{ index + 1 }}
                  </div>
                  <div class="space-y-1">
                    <p class="text-lg font-medium">{{ step }}</p>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="bg-secondary py-6 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} From Zero to SEO. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const howToPlaySteps = [
  "Start with 6 cards and €500 budget",
  "Take turns drawing and playing cards",
  "Use Traffic cards to increase your users",
  "Play Penalty cards to hinder opponents",
  "Defend with Repair and Joker cards",
  "Manage your budget and earn more based on your user count",
  "Be the first to reach exactly 1000 users to win!"
]
</script>

<style scoped>
.card-container {
  perspective: 1000px;
}

.card-container:hover {
  z-index: 20;
}
</style>
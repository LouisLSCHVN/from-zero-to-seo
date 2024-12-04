<template>
    <div class="min-h-screen flex flex-col items-center space-y-14 pt-8">
      <AppBackButton />
      <Logo />

      <div class="flex flex-col items-center justify-center gap-8 scale-125 pt-10">
        <AppButton to="/rules" title="Lost ?" dark>
            See Rules
          </AppButton>

          <div class="flex items-center justify-center w-full space-x-4">
            <hr class="w-12 h-[3px] bg-primary rounded-full" />
            <span class="text-primary font-bold text-lg">OR</span>
            <hr class="w-12 h-[3px] bg-primary rounded-full" />
          </div>

          <AppButton to="/game" title="Ready ?" arrow>
            Play
          </AppButton>
        </div>
    </div>
  </template>
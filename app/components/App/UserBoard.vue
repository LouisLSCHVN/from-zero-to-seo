<template>
    <div class="w-full max-w-lg mx-auto bg-secondary text-primary p-4 rounded-lg">
      <!-- En-tête -->
      <table class="w-full bg-primary text-secondary overflow-hidden">
        <thead>
          <tr class="border-2 border-primary tracking-widest">
            <th class="bg-primary text-secondary font-bold text-lg py-3 px-5 text-left">PLAYERS</th>
            <th class="bg-secondary text-primary font-bold text-lg py-3 px-5 text-right">MONEY</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-secondary">
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="hover:bg-secondary-light transition-colors duration-200 border-2 border-primary"
          >
            <td class="border-2  border-primary bg-secondary text-primary font-bold py-3 px-5 text-left tracking-widest">{{ user.name }}</td>
            <td class="border-2  border-primary bg-primary text-secondary font-bold py-3 px-5 text-right tracking-widest">{{ user.budget }}€</td>
          </tr>
        </tbody>
      </table>
      <!-- Footer -->
      <div class="text-center text-sm font-semibold text-primary mt-4">
        FIRST TO 1000 POINTS WIN
      </div>
    </div>
  </template>

  <script setup lang="ts">
  defineProps({
    users: {
      type: Array as () => { name: string; budget: number }[],
      required: true,
    },
  });
  </script>

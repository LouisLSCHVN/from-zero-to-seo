<template>
    <div class="min-h-screen flex flex-col items-center space-y-14 pt-8">
        <AppBackButton />
        <Logo />
        <template v-if="gameState === 'lobby'">
            <div class="px-6 py-2 bg-primary text-secondary font-bold rounded-md tracking-widest">
                2 - 4 PLAYERS
            </div>

            <div class="flex flex-wrap gap-10 justify-center p-4">
                <AppUserIcon
                    v-for="(user, index) in users"
                    :key="index"
                    :king="index === 0"
                    :name="user.name"
                    @update:name="(newName: string) => updateUserName(index, newName)"
                />
                <AppUserAdd
                    v-if="users.length < 4"
                    @click="addUser"
                />
            </div>
            <AppButton title="Ready" arrow @click="gameState = 'playing'">Start</AppButton>
        </template>
        <template v-if="gameState === 'playing'">

            <AppSelector
                v-model="userSelected"
                :users="users"
                title="Your Turn"
                :dark="false"
            />

        </template>

        <template v-if="gameState === 'over'">

        </template>
    </div>
</template>

<script setup lang="ts">
const users = ref([
    { name: 'Paul', budget: 500 }
])

const addUser = () => {
    if (users.value.length < 4) {
        users.value.push({
            name: `Player ${users.value.length + 1}`,
            budget: 500
        })
    }
}

const updateUserName = (index: number, newName: string) => {
    users.value[index]!.name = newName
}

const userSelected = ref(users.value[0]!.name);

type GameState = 'lobby' | 'playing' | 'over'
const gameState: Ref<GameState> = ref('lobby')
</script>
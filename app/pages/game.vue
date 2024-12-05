<template>
    <div class="min-h-screen flex flex-col items-center justify-center space-y-14">
        <AppBackButton class="absolute top-8 left-8" />
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
            <div class="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-x-24">
                <div class="flex flex-col items-center w-32">
                    <div class="font-bold mb-4 text-primary">Remove</div>
                    <div class="space-y-2 flex flex-col items-center w-full scale-75">
                        <AppButton
                            v-for="amount in [-50, -100, -150, -200]"
                            :key="amount"
                            @click="updateBudget(userSelected, amount)"
                        >
                            {{ amount }}€
                        </AppButton>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-4">
                    <AppSelector
                    v-model="userSelected"
                    :users="users"
                    title="Your Turn"
                    :dark="false"
                />
                    <AppUserBoard :users="users" v-model:userSelected="userSelected" />
                </div>

                <div class="flex flex-col items-center w-32">
                    <div class="font-bold mb-4 text-primary">Add</div>
                    <div class="space-y-2 flex flex-col items-center w-full scale-75">
                        <AppButton
                            v-for="amount in [50, 100, 150, 200]"
                            :key="amount"
                            @click="updateBudget(userSelected, amount)"
                        >
                            +{{ amount }}€
                        </AppButton>
                    </div>
                </div>
            </div>

            <AppButton title="Finish ?" @click="gameState = 'over'">End</AppButton>
        </template>

        <template v-if="gameState === 'over'">
            <h1 class="text-center text-primary text-5xl">
                THANKS FOR PLAYING !
            </h1>
            <div class="flex items-center flex-wrap gap-6 justify-center">
                <AppUserOver v-for="(user, i) in users" :key="i" :name="user.name" />
            </div>
            <AppButton title="Enjoy ?" to="/play">Play Again</AppButton>
        </template>
    </div>
</template>

<script setup lang="ts">
const users = ref([
    { name: 'Paul', budget: 500 },
    { name: 'Louis', budget: 500 },
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

const userSelected = ref(users.value[0]?.name || '');

type GameState = 'lobby' | 'playing' | 'over'
const gameState: Ref<GameState> = ref('lobby')

const updateBudget = (userName: string, amount: number) => {
    const user = users.value.find((u) => u.name === userName);
    if (user) {
        user.budget += amount;
        if (user.budget < 0) user.budget = 0;
    }
};
</script>
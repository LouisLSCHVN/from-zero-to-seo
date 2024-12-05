<template>
    <div class="relative w-[242px] h-[56px] ml-8 mt-3">
        <svg class="absolute inset-0 scale-x-125" width="242" height="56" viewBox="0 0 242 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2922_373)">
                <path d="M219.801 55.544C198.632 55.544 183.929 55.2194 175.693 54.5848C130.318 54.5848 84.6002 54.2307 38.4861 53.5371C31.9135 53.7142 25.288 53.8027 18.6098 53.8027H13.4362C10.2158 54.0388 7.33865 54.1569 4.83101 54.1569C2.32338 54.1569 0.713214 54.0093 -0.0258789 53.7142C1.32033 41.2297 2.00663 30.3095 2.00663 20.9241C2.00663 11.5386 1.68987 5.08982 1.05636 1.59241C1.37312 1.47435 2.27059 1.38581 3.72238 1.32678L3.72238 1.94657L60.3421 1.94657L187.677 1.32678C188.627 1.32678 189.393 1.23824 190.026 1.06115H190.343C190.977 0.884071 191.663 0.795528 192.376 0.795528L237.909 0.101948C239.044 0.397087 239.942 0.913582 240.575 1.68095V4.64711L241.974 53.6256C241.446 54.2159 240.681 54.9685 239.625 55.8982L236.959 55.8097L219.749 55.544H219.801Z" fill="#5D4F9C"/>
            </g>
            <defs>
                <clipPath id="clip0_2922_373">
                    <rect width="55.7962" height="242" fill="white" transform="matrix(0 -1 1 0 0 55.8982)"/>
                </clipPath>
            </defs>
        </svg>
        <div class="relative flex items-center justify-center h-full">
            <span class="text-secondary font-bold whitespace-nowrap">{{ name }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    }
})
    </script>
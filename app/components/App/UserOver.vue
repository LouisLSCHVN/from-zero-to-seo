<template>
    <div class="relative w-[242px] h-[56px]">
        <svg
            class="absolute inset-0 scale-90"
            width="242"
            height="56"
            viewBox="0 0 242 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_2922_373)">
                <path d="M219.801 55.544C198.632 55.544 183.929 55.2194 175.693 54.5848C130.318 54.5848 84.6002 54.2307 38.4861 53.5371C31.9135 53.7142 25.288 53.8027 18.6098 53.8027H13.4362C10.2158 54.0388 7.33865 54.1569 4.83101 54.1569C2.32338 54.1569 0.713214 54.0093 -0.0258789 53.7142"
                    stroke="#5D4F9C"
                    stroke-width="2"
                />
            </g>
            <defs>
                <clipPath id="clip0_2922_373">
                    <rect
                        width="55.7962"
                        height="242"
                        fill="white"
                        transform="matrix(0 -1 1 0 0 55.8982)"
                    />
                </clipPath>
            </defs>
        </svg>
        <div class="relative flex items-center justify-center h-full">
            <span class="text-secondary font-bold">{{ name }}</span>
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
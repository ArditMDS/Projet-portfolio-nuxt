<template>
    <nav class="flex justify-around my-2">
        <div class="partieGaucheNav py-5">
            <NuxtLink class="pr-10" to="/">
                <p class="pointActive">Homepage</p>
            </NuxtLink>
            <NuxtLink class="pr-10" to="./about/">
                <p class="pointActive">About</p>
            </NuxtLink>
            <NuxtLink class="pr-10" to="./about/index.vue">
                <p class="pointActive">Projects</p>
            </NuxtLink>
        </div>
        <div class="partieDroiteNav">
            <button class="bg-teal-400 py-5 px-10 rounded-lg hover:bg-teal-600 ease-in-out duration-300">Contact me</button>
        </div>
    </nav>
</template>
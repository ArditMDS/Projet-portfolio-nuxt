<template>
   <nav class="flex justify-around pt-2 mb-32">
        <div class="partieGaucheNav py-5">
            <NuxtLink class="pr-10" to="/">
                <p class="pointActive">Homepage</p>
            </NuxtLink>
            <NuxtLink class="pr-10" to="/about/">
                <p class="pointActive">About</p>
            </NuxtLink>
            <NuxtLink class="pr-10" to="/projects/">
                <p class="pointActive">Projects</p>
            </NuxtLink>
        </div>
        <div class="partieDroiteNav">
            <button class="boutonCta pointActive">Contact me</button>
        </div>
    </nav>
    </template>
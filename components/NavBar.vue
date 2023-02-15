<template>
   <nav class="flex justify-around pt-2">
        <div class="partieGaucheNav py-5">
            <NuxtLink  class="pr-10 NuxtLink" to="/">
                <p v-bind:class="{ active: isActive('/') }" class="pointActive">Homepage</p>
            </NuxtLink>
            <NuxtLink  class="pr-10 NuxtLink" to="/about/">
                <p v-bind:class="{ active: isActive('/about/') }" class="pointActive">About</p>
            </NuxtLink>
            <NuxtLink  class="pr-10 NuxtLink" to="/projects/">
                <p v-bind:class="{ active: isActive('/projects/') }" class="pointActive">Projects</p>
            </NuxtLink>
        </div>
        <div class="partieDroiteNav NuxtLink">
            <button class="boutonCta pointActive">Contact me</button>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route
    }
  }
}
</script>    
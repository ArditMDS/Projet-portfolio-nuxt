<template>
   <nav class="flex justify-around pt-2">
        <div class="partieGaucheNav py-5">
            <NuxtLink  class="pr-10 NuxtLink" to="/">
                <p v-bind:class="{ active: isActive('/') }" class="pointActive">Accueil</p>
            </NuxtLink>
            <NuxtLink  class="pr-10 NuxtLink" to="/about/">
                <p v-bind:class="{ active: isActive('/about/') }" class="pointActive">À propos</p>
            </NuxtLink>
            <NuxtLink  class="pr-10 NuxtLink" to="/projects/">
                <p v-bind:class="{ active: isActive('/projects/') }" class="pointActive">Mes rojets</p>
            </NuxtLink>
        </div>
        <div class="partieDroiteNav NuxtLink">
            <button class="boutonCta pointActive">Me contacter</button>
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
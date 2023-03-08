<template>
  <div>
    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul class="menu__box">
      <li><NuxtLink class="menu__item" to="/">Accueil</NuxtLink></li>
			<li><NuxtLink class="menu__item" to="/about/">A propos</NuxtLink></li>
			<li><NuxtLink class="menu__item" to="/projects/">Mes projets</NuxtLink></li>
			<li><NuxtLink class="menu__item" to="/contact/">Me contacter</NuxtLink></li>
    </ul>
  </div>
   <nav class="flex justify-around pt-2 barNav">
        <div class="partieGaucheNav py-5">
            <NuxtLink  class="pr-10 NuxtLink" to="/">
                <p v-bind:class="{ active: isActive('/') }" class="pointActive">Accueil</p>
            </NuxtLink>
            <NuxtLink  class="pr-10 NuxtLink" to="/about/">
                <p v-bind:class="{ active: isActive('/about/') }" class="pointActive">À propos</p>
            </NuxtLink>
            <NuxtLink  class="pr-10 NuxtLink" to="/projects/">
                <p v-bind:class="{ active: isActive('/projects/') }" class="pointActive">Mes projets</p>
            </NuxtLink>
        </div>
        <NuxtLink class="partieDroiteNav NuxtLink" to="/contact/">
            <button class="boutonCta pointActive">Me contacter</button>
        </NuxtLink>
    </nav>
    
  </div>
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
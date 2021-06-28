<template>
  <div>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style>
body {
  @apply bg-off-white font-primary;
}

.nuxt-active-link {
  @apply border-b border-black;
}

.menu-button.nuxt-link-exact-active {
  @apply font-bold underline;
}

/* .nav-link.nuxt-link-exact-active {
  @apply underline;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

a {
  @apply text-black underline;
}

a:hover {
  @apply text-off-black;
}


</style>
<template>
  <nav class="bg-transparent transition-colors duration-75 relative" :class="{ 'bg-white': menuOpen }">
    <div class="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="menuOpen = !menuOpen"
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-800
              hover:text-black
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!menuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
          <nuxt-link to="/" class="flex-shrink-0 flex items-center text-off-black cursor-pointer">
            <Logo class="w-20" />
            <NameLogo class="hidden lg:block mx-4 w-64" />
          </nuxt-link>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link to="#about" class="nav-link text-gray-800 hover:text-black px-3 py-2 text-sm font-light no-underline"
                >About</nuxt-link
              >
              <nuxt-link to="#skills" class="nav-link text-gray-800 hover:text-black px-3 py-2 text-sm font-light no-underline"
                >Skills</nuxt-link
              >

              <nuxt-link to="#projects" class="nav-link text-gray-800 hover:text-black px-3 py-2 text-sm font-light no-underline"
                >Projects</nuxt-link
              >

              <nuxt-link to="#contact" class="nav-link text-gray-800 hover:text-black px-3 py-2 text-sm font-light no-underline"
                >Contact</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <transition name="fade">
      <div v-if="menuOpen" class="sm:hidden absolute z-50 bg-white w-full" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 text-off-black">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <nuxt-link
            to="#about"
            @click.native="menuOpen = false"
            class="menu-button w-full text-left block px-3 py-2 text-2xl font-light no-underline"
            >About</nuxt-link
          >
          <nuxt-link
            to="#skills"
            @click.native="menuOpen = false"
            class="menu-button w-full text-left block px-3 py-2 text-2xl font-light no-underline"
            >Skills</nuxt-link
          >

          <nuxt-link
            to="#projects"
            @click.native="menuOpen = false"
            class="menu-button w-full text-left block px-3 py-2 text-2xl font-light no-underline"
            >Projects</nuxt-link
          >

          <nuxt-link
            to="#contact"
            @click.native="menuOpen = false"
            class="menu-button w-full text-left block px-3 py-2 text-2xl font-light no-underline"
            >Contact</nuxt-link
          >
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {
  menuOpen = false
}
</script>
<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <div class="flex items-center justify-center">
      <logo class="w-32 h-32" />
      <name-logo class="w-64 ml-4" />
    </div>
    <h1 class="text-9xl font-light leading-none">{{error.statusCode}}</h1>
    <h3 class="mt-4">{{error.message}}.</h3>
    <nuxt-link to="/" class="mt-8 bg-white px-8 py-4 shadow-sm hover:shadow-md transition-shadow duration-150 no-underline">
      Go Home
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component({
  props: ['error'],
})
export default class Error404 extends Vue {}
</script>
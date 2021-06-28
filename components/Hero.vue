<template>
  <div class="bg-white p-8 lg:p-16 shadow-sm lg:mt-12 mb-24" style="height: 50vh">
    <div class="max-w-screen-xl mx-auto h-full flex flex-col items-start justify-center font-light">
      <h1 class="text-4xl md:text-5xl lg:text-6xl">A <span class="font-bold">full-stack web developer</span> based in</h1>
      <h1 class="text-4xl md:text-5xl lg:text-6xl"><span class="font-bold">Shanghai, China</span>.</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {}
</script>

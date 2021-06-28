<template>
  <div class="bg-white p-8 lg:p-16 shadow-sm" style="margin-top: 7.5vh; height: 50vh">
    <div class="max-w-screen-xl mx-auto h-full flex flex-col items-start justify-center font-light">
      <h1 class="text-4xl md:text-5xl lg:text-6xl">A <b>full-stack web developer</b> based in</h1>
      <h1 class="text-4xl md:text-5xl lg:text-6xl"><b>Shanghai, China</b>.</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {}
</script>

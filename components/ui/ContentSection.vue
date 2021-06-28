<template>
  <section :id="sectionId" class="bg-white mt-16 p-8 lg:p-16 shadow-sm">
    <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
      <h2 class="w-full text-2xl lg:text-5xl font-bold mb-8 text-left">{{title}}</h2>
      <div class="w-full text-sm lg:text-base">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class ContentSection extends Vue {
  @Prop({default: 'DefaultTitle'}) readonly title!: string

  get sectionId() {
    return this.title.toLowerCase()
  }
}
</script>

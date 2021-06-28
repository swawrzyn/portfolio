<template>
  <a :href="skill.url" target="_blank" rel="noreferrer" class="no-underline">
    <div
      class="
        flex flex-col
        items-center
        justify-center
        bg-gray-100
        text-off-black
        shadow-sm
        hover:shadow-md
        transition-shadow
        duration-150
        cursor-pointer
        p-8
      "
    >
      <div class="w-14 h-14" v-html="iconLocation" />
      <span class="mt-4">{{ skill.name }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class ContentSection extends Vue {
  @Prop({ required: true }) readonly skill!: {
    name: string
    url: string
  }

  get iconLocation() {
    return require(`static/images/icons/${this.skill.name.toLowerCase()}.svg?raw`)
  }
}
</script>

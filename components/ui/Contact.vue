<template>
  <a :href="contact.value" rel="noreferrer" :target="contact.type === 'email' ? '_self' : '_blank'" class="w-full px-4 flex justify-start items-center h-32 bg-gray-100 no-underline cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-150">
    <div class="w-1/5 flex items-center justify-center">
      <div class="w-14 h-14" v-html="iconLocation" />
    </div>
    <div class="w-4/5 text-2xl">
      {{contact.text}}
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {
  @Prop({ required: true }) readonly contact!: {
    name: string
    type: string
    text: string
    value: string
    icon: string
  }

  get iconLocation() {
    return require(`static/images/icons/${this.contact.icon}.svg?raw`)
  }
}
</script>

<template>
  <ui-content-section title="Contact">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ui-contact v-for="contact in contacts" :key="contact.name" :contact="contact" />
    </div>
  </ui-content-section>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {
  contacts = [
    {
      name: 'Email',
      type: 'email',
      text: 'swawrzyn (at) gmail.com',
      value: 'mailto:swawrzyn@gmail.com',
      icon: 'email'
    },
    {
      name: 'Linkedin',
      type: 'link',
      text: 'swawrzyn',
      value: 'https://www.linkedin.com/in/swawrzyn/',
      icon: 'linkedin'
    },
    {
      name: 'Facebook',
      type: 'link',
      text: 'swawrzyn',
      value: 'https://www.facebook.com/swawrzyn',
      icon: 'facebook'
    },
    {
      name: 'Github',
      type: 'link',
      text: 'swawrzyn',
      value: 'https://github.com/swawrzyn',
      icon: 'github'
    },
  ]
}
</script>

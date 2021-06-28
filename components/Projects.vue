<template>
  <ui-content-section title="Projects">
    <div class="w-full grid grid-cols-1 gap-16">
      <ui-project
        class="font-sans"
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </ui-content-section>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Projects extends Vue {
  projects = [
    {
      name: 'Fantastic Funding',
      url: 'https://www.fantasticfunding.com',
      imageName: 'ff.png',
      imgAlt: 'Screenshot of the Fantastic Funding website',
      logoName: 'ff-logo',
      subtitle: 'A platform for tech creators to sell their products in a fair and eqitable way.',
      technologies: ['Ruby On Rails', 'Postgresql', 'Vue', 'Nuxt', 'AWS'],
      text: 'Fantastic Funding is a kickstarter-like platform for tech creators to sell their products to their loyal fans. The platform is build on a Ruby on Rails API which feeds into a Nuxt.js frontend leveraging Server Side Rendering for SEO purposes. Behind the scenes we integrated a Stripe payment solution for pledges and paying out creators.',
    },
    {
      name: 'DuanDuanZu',
      url: 'none',
      imageName: 'ddz.webp',
      imgAlt: 'Screenshot of the DuanDuanZu website',
      logoName: 'ddz-logo',
      subtitle: 'Short-term commerical space rental based in China.',
      technologies: ['Django', 'Postgresql', 'Redis', 'Vue', 'WeChat Mini Program', 'AWS'],
      text: 'A platform to post your underutilized commerical space and users to find the perfect location to do their work. DuanDuanZu was a facilitating platform to link these two parties together in China. The platform was build on a Django REST Framework backend with Postgresql and Redis for database and key store services. On the frontend, we used Vue and WePY (a Vue-like WeChat Mini Program framework) to deliver a high-quality experience to space owners and users alike.',
    },
  ]
}
</script>

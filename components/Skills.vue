<template>
  <ui-content-section title="Skills">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
      <ui-skill v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </ui-content-section>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Skills extends Vue {
  skills = [
    {
      name: 'Python',
      url: 'https://www.python.org'
    },
    {
      name: 'Django',
      url: 'https://www.djangoproject.com'
    },
    {
      name: 'Flask',
      url: 'https://flask.palletsprojects.com'
    },
    {
      name: 'FastAPI',
      url: 'https://fastapi.tiangolo.com'
    },
    {
      name: 'Postgresql',
      url: 'https://www.postgresql.org'
    },
    {
      name: 'Redis',
      url: 'https://www.redis.io'
    },
    {
      name: 'Typescript',
      url: 'https://www.typescriptlang.org'
    },
    {
      name: 'Javascript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'Vue',
      url: 'https://www.vuejs.org'
    },
    {
      name: 'Nuxt',
      url: 'https://www.nuxtjs.org'
    },
    {
      name: 'TailwindCSS',
      url: 'https://tailwindcss.com/'
    },
    {
      name: 'Ruby',
      url: 'https://www.ruby-lang.org'
    },
    {
      name: 'Rails',
      url: 'https://www.rubyonrails.org'
    },
    {
      name: 'Java',
      url: 'https://www.java.com'
    },
    {
      name: 'Docker',
      url: 'https://www.docker.com'
    },
    {
      name: 'Flutter',
      url: 'https://www.flutter.dev'
    },
    {
      name: 'WeChat',
      url: 'https://www.wechat.com'
    },
    {
      name: 'AWS',
      url: 'https://aws.amazon.com'
    }
  ]
}
</script>

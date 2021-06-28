<template>
  <div class="text-gray-600 body-font">
    <div class="flex flex-col">
      <div class="w-full mx-auto">
        <div class="overflow-hidden shadow-md">
          <nuxt-img :src="imgSrc" format="webp" loading="lazy" height="789" width="1441" sizes="sm:100vw md:50vw lg:1441px" />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-36 h-36 inline-flex items-center justify-center text-off-black">
              <div v-html="logoLocation" />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{name}}</h2>
              <div class="w-12 h-1 sm:text-sm text-base bg-off-black rounded mt-2 mb-4"></div>
              <p class="sm:text-sm text-base"
                >{{subtitle}}</p
              >
            </div>
          </div>
          <div
            class="
              sm:w-2/3
              sm:pl-8
              sm:py-8
              sm:border-l
              border-gray-200
              sm:border-t-0
              border-t
              mt-4
              pt-4
              sm:mt-0
              text-center
              sm:text-left
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <span class="mb-4"><b>Technologies:</b> {{technologies.join(', ')}}</span>
            <p class="leading-relaxed sm:text-md text-lg mb-4"
              >{{text}}</p
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Project extends Vue {
  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly imageName!: string
  @Prop({ required: true }) readonly logoName!: string
  @Prop({ required: true }) readonly subtitle!: string
  @Prop({ required: true }) readonly technologies!: string[]
  @Prop({ required: true }) readonly text!: string


  get imgSrc() {
    return `/images/${this.imageName}`
  }

  get logoLocation() {
    return require(`static/images/${this.logoName}.svg?raw`)
  }
}
</script>

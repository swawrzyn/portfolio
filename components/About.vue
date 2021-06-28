<template>
  <ui-content-section title="About">
    <div class="flex items-center justify-center flex-wrap flex-row-reverse md:flex-row">
      <div class="w-full md:w-1/2 font-sans">
        <p class="mb-2">Hi, I'm Stefan Wawrzyn, and here's a little about me.</p>
        <p class="mb-2">
          In a previous life, I graduated from the
          <a href="https://en.wikipedia.org/wiki/Royal_Military_College_of_Canada" target="_blank"
            >Royal Military College of Canada</a
          >
          and because a Tank Troop Leader in the Canadian Army. I decided to pursue other things and see how things were
          on the other side of the world. I took a year to study Mandarin at the
          <a href="https://en.wikipedia.org/wiki/National_Taiwan_Normal_University" target="_blank"
            >National Taiwan Normal University</a
          >
          in Taipei, and then set my sights for the mainland.
        </p>
        <p class="mb-2">
          When arriving in China, I took teaching jobs here and there, but I eventually stopped that and took up coding
          as my profession. I joined the <a href="https://www.lewagon.com/" target="_blank">Le Wagon</a> bootcamp in
          Shanghai and had a blast. I haven't looked back since.
        </p>
        <p class="mb-2">
          My recent interests include
          <a href="https://teachyourselfcs.com/" target="_blank">Teaching Myself Computer Science</a>, taking deep dives
          into the world of ML/AI and getting to know <a href="https://flutter.dev/" target="_blank">Flutter</a>.
        </p>
      </div>
      <div class="w-full md:w-1/2 flex items-center justify-center my-8 lg:my-0">
        <nuxt-picture class="w-3/4 md:w-1/2 shadow-md" format="webp" src="/images/stefan.png" />
      </div>
    </div>
  </ui-content-section>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {}
</script>

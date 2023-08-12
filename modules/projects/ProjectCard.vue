<template>
  <div class="project-card">
    <img class="project-card__framework" v-if="project.framework === 'react'"
         src="@/modules/projects/icons/ReactColored.svg" alt="" loading="lazy">
    <img class="project-card__framework" loading="lazy" v-else src="@/modules/projects/icons/VueColored.svg" alt="">
    <div class="project-card__header">
      <h1 class="project-card__title">Project {{ props.index }}</h1>
      <p class="project-card__name">// _{{ project.title }}</p>
    </div>
    <div class="project-card__main">
      <img class="project-card__img" :src="project.imgURL" alt="project-logo" loading="lazy">
      <div class="project-card__body">
        <p class="project-card__desc">{{ project.description }}</p>
        <a :href="project.gitURL" target="_blank">
          <CustomButton>
            view-project
          </CustomButton>
        </a>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


import {IProject} from "~/modules/projects/static/projects";
import {computed} from "vue";
import CustomButton from "~/components/ui/button/CustomButton.vue";

interface IProps {
  project: IProject
  index: number
}

const props = defineProps<IProps>()
const imgPath = computed(() => {
  return `url("${props.project.imgURL}")`
})
</script>

<style lang='sass'>
.project-card
  display: flex
  flex-direction: column
  position: relative

  &__header
    display: flex
    gap: 8px

  &__name
    font-size: 16px
    color: $text-lightgray

  &__title
    font-size: 16px
    font-weight: 700
    margin-bottom: 8px
    color: #5565e8

  &__main
    display: flex
    flex-direction: column
    border-radius: 16px
    max-width: 300px
    height: 100%
    border: 1px solid $primary-color

  &__img
    object-fit: cover
    width: 300px
    height: 140px
    border-radius: 16px 16px 0 0
    border-bottom: 1px solid $primary-color

  &__body
    display: flex
    flex-direction: column
    flex: 1 0
    gap: 12px
    align-items: flex-start
    justify-content: space-between
    padding: 16px

  &__desc
    color: $text-lightgray

  &__framework
    position: absolute
    right: 20px
    top: 40px
    transition: all .2s ease-in-out
    opacity: 0

.project-card
  &:hover
    .project-card__framework
      opacity: 1
</style>
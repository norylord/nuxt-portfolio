<template>
  <div class="projects-explorer">
    <CustomAccordion title="projects" class="projects-explorer__accordion">
      <div class="projects-explorer__accordion-wrapper">
        <div class="projects-explorer__item" @click.stop="emit('set-framework','vue')">
          <CustomCheckbox disabled value="vue" v-model="props.frameworks"/>
          <img class="projects-explorer__item-icon" src="@/modules/projects/icons/vue.svg" alt="">
          Vue
        </div>
        <div class="projects-explorer__item" @click.stop="emit('set-framework','react')">
          <CustomCheckbox disabled value="react" v-model="props.frameworks"/>
          <img class="projects-explorer__item-icon" src="@/modules/projects/icons/react.svg" alt="">
          React
        </div>
      </div>
    </CustomAccordion>
  </div>
</template>

<script lang="ts" setup>


import CustomAccordion from "~/components/ui/accordion/CustomAccordion.vue";
import CustomCheckbox from "~/components/ui/checkbox/CustomCheckbox.vue";
import {reactive} from "vue";

interface IProps {
  frameworks: any
}

const props = defineProps<IProps>()

const emit = defineEmits(['set-framework'])
</script>

<style lang='sass'>
.projects-explorer
  flex: 1
  max-width: 300px
  width: 100%
  border-right: #1E2D3D 1px solid
  height: 100%

  &__accordion
    .accordion__title
      border-top: none

    &-wrapper
      margin-top: 8px
      display: flex
      flex-direction: column
      gap: 8px

  &__item
    display: flex
    align-items: center
    gap: 8px
    user-select: none
    cursor: pointer

    &-icon
      margin-left: 8px

@media (max-width: 768px)
  .projects-explorer
    max-width: 100%
    height: auto
    padding-bottom: 16px
    flex: 0
</style>
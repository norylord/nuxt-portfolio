<template>
  <div class="projects-list">
    <ProjectCard :id="project.id" v-for="(project, index) in projects" :project="project" :index="index + 1"/>
  </div>
</template>

<script lang="ts" setup>


import ProjectCard from "~/modules/projects/ProjectCard.vue";
import {IProject} from "~/modules/projects/static/projects";

interface IProps {
  projects: IProject[]
}

const props = defineProps<IProps>()
</script>

<style lang='sass'>
.projects-list
  display: grid
  flex: 1
  justify-content: center
  gap: 32px
  padding: 28px
  overflow-y: auto
  grid-template-columns: repeat(auto-fill, 300px)
  grid-template-rows: repeat(auto-fill, 300px)
//display: flex
//flex-wrap: wrap
//align-items: flex-start
//overflow-y: auto
//gap: 32px
//padding: 64px
//width: 100%
//align-items: flex-start


</style>
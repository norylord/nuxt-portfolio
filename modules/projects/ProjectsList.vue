<template>
  <transition-group tag="div" name="projectsList" class="projects-list">
    <ProjectCard :id="project.id" v-for="(project, index) in projects" :key="project.id" :project="project"
                 :index="index + 1"/>
  </transition-group>
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
  grid-template-rows: repeat(auto-fill, 340px)


</style>

<style lang="scss">
.projectsList-move,
.projectsList-enter-active,
.projectsList-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.projectsList-enter-from,
.projectsList-leave-to {
  opacity: 0;
  transform: scale(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.projectsList-leave-active {
  opacity: 0;
  position: absolute;
}
</style>
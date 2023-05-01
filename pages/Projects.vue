<template>
  <section class="projects">
    <ProjectsExplorer :frameworks="state.frameworks" @set-framework="setFramework"/>
    <ProjectsList :projects="filteredProjects"/>
  </section>
</template>

<script lang="ts" setup>


import ProjectsExplorer from "~/modules/projects/ProjectsExplorer.vue";
import {computed, reactive} from "vue";
import ProjectsList from "~/modules/projects/ProjectsList.vue";
import projectsList from "~/modules/projects/static/projects";

interface IProps {
}

const props = defineProps<IProps>()


const state = reactive({
  projects: projectsList,
  frameworks: []
})

const setFramework = (framework) => {
  state.frameworks.includes(framework) ? state.frameworks = state.frameworks.filter((item) => item !== framework) : state.frameworks.push(framework)
}

const filteredProjects = computed(() => {
  if (state.frameworks.length === 0) return state.projects
  return state.projects.filter(project => {
    return state.frameworks.includes(project.framework)
  })


})
</script>

<style lang='sass'>
.projects
  display: flex
  width: 100%
  height: calc(100% - 111px)
</style>
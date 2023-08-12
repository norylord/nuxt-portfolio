<template>
  <section class="projects">
    <ProjectsExplorer :frameworks="state.frameworks" @set-framework="setFramework"/>
    <ProjectsList :projects="filteredProjects"/>
  </section>
</template>

<script lang="ts" setup>
import ProjectsExplorer from "~/modules/projects/ProjectsExplorer.vue";
import ProjectsList from "~/modules/projects/ProjectsList.vue";
import {computed, reactive} from "vue";
import {projectsList} from "~/modules/projects/static/projects";


const state = reactive({
  projects: projectsList,
  frameworks: ['vue', 'react']
})

const setFramework = (framework: string) => {
  state.frameworks.includes(framework) ? state.frameworks = state.frameworks.filter((item) => item !== framework) : state.frameworks.push(framework)
}

const filteredProjects = computed(() => {
  return state.projects.filter(project => {
    return state.frameworks.includes(project.framework)
  })
})
</script>

<style lang='sass'>
.projects
  display: flex
  width: 100%
  height: calc(100% - 110px)

@media (max-width: 768px)
  .projects
    flex-direction: column
    overflow-y: auto
    height: 100%
</style>
<template>
  <section class="about">
    <AboutActions :active-tab="state.activeTab" @set-action="changeTab"/>
    <AboutExplorer @select-file="selectFile" :active-file="state.activeFile"/>
    <AboutFilePreview :active-file="state.activeFile" @close-file="closeFile" :active-files="state.activeFiles"
                      @select-file="selectFile"/>
  </section>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import AboutActions from "@/modules/about/components/AboutActions.vue";
import AboutExplorer from "~/modules/about/components/AboutExplorer.vue";
import AboutFilePreview from "~/modules/about/components/AboutFilePreview.client.vue";
import AboutCodeSnippets from "~/modules/about/components/AboutCodeSnippets.vue";
import {IFile} from "~/types/about";

interface IState {
  activeTab: "professional" | "personal" | "hobbies";
  activeFile: IFile | null,
  activeFiles: IFile[]
}

const state = reactive<IState>({
  activeTab: "professional",
  activeFile: null,
  activeFiles: []
});

const changeTab = (label: "professional" | "personal" | "hobbies") => {
  state.activeTab = label;
};

const selectFile = (file) => {
  state.activeFile = file;
  state.activeFiles.includes(file) ? null : state.activeFiles.unshift(file)
};

const closeFile = (file) => {
  if (state.activeFile) {
    file.id === state.activeFile.id ? state.activeFile = undefined : null
  }
  state.activeFiles = state.activeFiles.filter(item => item.id !== file.id)
  state.activeFile = state.activeFiles[0] || undefined
}
</script>

<style lang="sass">
.about
  width: 100%
  height: 100%
  display: flex
  flex-direction: row

@media (max-width: 768px)
  .about
    flex-direction: column
    overflow-y: auto
</style>

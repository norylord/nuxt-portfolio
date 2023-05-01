<template>
  <section class="code-snippets">
    <h1>Code Snippets</h1>
  </section>
</template>

<script lang="ts" setup>
import {IFile} from "~/types/about";

interface IProps {
  activeFiles: IFile[]
}

const props = defineProps<IProps>()

</script>

<style lang='sass'>
.code-snippets
  height: 100%
  display: flex
  justify-content: center
  align-items: flex-start
  flex: 1

@media (max-width: 768px)
  .code-snippets
    display: flex
    min-height: 60vh
</style>
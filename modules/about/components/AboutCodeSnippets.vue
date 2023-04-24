<template>
  <section class="code-snippets">
    {{ activeFiles }}
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
  flex: 1

</style>
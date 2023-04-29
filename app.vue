<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  keepalive: true
})
</script>

<style lang="sass">
@import "assets/styles/globals"
</style>

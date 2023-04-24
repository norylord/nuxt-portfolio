<template>
  <div class="wrapper">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "~/layouts/TheHeader.vue";
import TheFooter from "~/layouts/TheFooter.vue";
</script>

<style lang="sass"></style>

<template>
  <div class="wrapper">
    <TheHeader/>
    <slot/>
    <TheFooter/>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "~/components/app/TheHeader.vue";
import TheFooter from "~/components/app/TheFooter.vue";
</script>

<style lang="sass"></style>

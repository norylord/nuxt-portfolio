<template>
  <nav class="nav">
    <div class="nav__section">
      <div class="nav__section-item nav-title">norylord</div>
    </div>
    <div class="nav__section">
      <div
          class="nav__section-item nav-link"
          :class="{ active: router.currentRoute.value.path === '/' }"
          @click="router.push('/')"
      >
        _hello
      </div>
      <div
          class="nav__section-item nav-link"
          :class="{ active: router.currentRoute.value.path === '/about' }"
          @click="router.push('/about')"
      >
        _about-me
      </div>
      <div
          class="nav__section-item nav-link"
          :class="{ active: router.currentRoute.value.path === '/projects' }"
          @click="router.push('/projects')"
      >
        _projects
      </div>
    </div>
    <div class="nav__section">
      <div class="nav__section-item nav-contact nav-link"
           :class="{ active: router.currentRoute.value.path === '/contact' }"
           @click="router.push('/contact')"> _contact-me
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {useRouter} from "#app";

const router = useRouter();
</script>

<style lang="sass">
.nav
  display: flex
  width: 100%
  justify-content: space-between

  &__section
    display: flex
    border-bottom: 1px solid #1e2d3d

    &:nth-child(1)
      flex: 1

    &:nth-child(2)
      flex: 9
      border-left: 1px solid #1e2d3d
      border-right: 1px solid #1e2d3d

    &:nth-child(3)
      flex: 3

    &-item
      color: $text-lightgray
      padding: 16px 32px

  &-title
    flex: 1
    text-align: left
    cursor: default

  &-contact
    white-space: nowrap
    flex: 1
    text-align: left

  &-link
    cursor: pointer
    transition: .3s background

    &:hover
      background: #1e2d3d

    &:nth-child(2)
      border-left: 1px solid #1e2d3d
      border-right: 1px solid #1e2d3d

    &:nth-child(3)
      border-right: 1px solid #1e2d3d

.active
  color: $text-default
  border-bottom: 2px solid #FEA55F
</style>

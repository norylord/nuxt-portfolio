<template>
  <nav class="nav">
    <div class="nav-mobile-trigger">
      <p>_norylord</p>
      <img src="@/assets/icons/burger.svg" alt="" @click="openMenu()">
    </div>
    <div class="nav-wrapper" :class="{'nav-open': opened}">
      <div class="nav__section">
        <div class="nav__section-item nav-title">norylord</div>
      </div>
      <div class="nav__section">
        <NuxtLink
            class="nav__section-item nav-link"
            :class="{ 'nav-link--active': router.path === '/' }"
            to="/"
        >
          _hello
        </NuxtLink>
        <NuxtLink
            class="nav__section-item nav-link"
            :class="{ 'nav-link--active': router.path === '/about' }"
            to="/about"

        >
          _about-me
        </NuxtLink>
        <NuxtLink
            class="nav__section-item nav-link"
            :class="{ 'nav-link--active': router.path === '/projects' }"
            to="/projects">
          _projects
        </NuxtLink>
      </div>
      <div class="nav__section">
        <NuxtLink
            class="nav__section-item nav-contact nav-link"
            :class="{ 'nav-link--active': router.path === '/contact' }"
            to="/contact">

          _contact-me
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const router = useRoute()

const opened = ref(false)

const pageHandler = (page = '') => {
  return '/' + page
}

watch(() => router.path, () => {
  opened.value = false
})

const openMenu = () => {
  opened.value = !opened.value
}
</script>

<style lang="sass">
.nav
  width: 100%
  user-select: none

  &-mobile-trigger
    display: none

  &-wrapper
    display: flex
    width: 100%
    justify-content: space-between


  &__section
    display: flex
    border-bottom: 1px solid #1e2d3d

    &-item
      border-top: 1px solid #1E2D3D

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

.nav-link--active
  color: $text-default
  border-bottom: 2px solid #FEA55F

@media (max-width: 768px)
  .nav
    padding: 8px
    width: 100%
    position: relative
    border-bottom: 1px solid #1E2D3D

    &-mobile-trigger
      display: flex
      justify-content: space-between
      align-items: center
      color: $text-lightgray
      padding: 12px 16px

    &-wrapper
      position: absolute
      left: 0
      background: #011627
      z-index: 1000
      margin-top: 38px
      border-radius: 0 0 20px 20px
      overflow: hidden
      display: flex
      flex-direction: column
      transition: max-height .3s ease-out
      height: 100vh
      border-bottom: 1px solid #1E2D3D
      max-height: 0px
      top: 24px
      justify-content: flex-start

    &__section
      flex-direction: column
      border: none
      flex: 0 !important

      &:first-child
        display: none

      &-item
        border-right: none !important
        border-left: none !important

.nav-open
  max-height: calc(100vh - 96px) !important
  opacity: 1
  justify-content: flex-start
  transition: max-height .3s ease-in-out, opacity .2s ease-in-out

  .nav__section
    flex: 0

    &:last-child
      border-bottom: 1px solid #1E2D3D

      .nav-link--active
        color: $text-default
        border-bottom: 2px solid #FEA55F
</style>

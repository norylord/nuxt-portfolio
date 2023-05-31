<template>
  <nav class="nav">
    <div class="nav-mobile-trigger" @click="opened = !opened">
      <p>_norylord</p>
      <img src="@/assets/icons/burger.svg" alt="">
    </div>
    <div class="nav-wrapper" :class="{'nav-open': opened}">
      <div class="nav__section">
        <div class="nav__section-item nav-title">norylord</div>
      </div>
      <div class="nav__section">
        <NuxtLink
            class="nav__section-item nav-link"
            :class="{ 'nav-link--active': router.currentRoute.value.path === '/' }"
            :to="pageHandler()"

        >
          _hello
        </NuxtLink>
        <NuxtLink
            class="nav__section-item nav-link"
            :class="{ 'nav-link--active': router.currentRoute.value.path === '/about' }"
            :to="pageHandler('about')"

        >
          _about-me
        </NuxtLink>
        <NuxtLink
            class="nav__section-item nav-link"
            :class="{ 'nav-link--active': router.currentRoute.value.path === '/projects' }"
            :to="pageHandler('projects')"
        >
          _projects
        </NuxtLink>
      </div>
      <div class="nav__section">
        <NuxtLink
            class="nav__section-item nav-contact nav-link"
            :class="{ 'nav-link--active': router.currentRoute.value.path === '/contact' }"
            :to="pageHandler('contact')"
        >
          _contact-me
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {useRouter} from "#app";
import {ref} from "vue";

const router = useRouter();

const opened = ref(false)

const pageHandler = (page = '') => {
  opened.value = false
  return '/' + page
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

    &--active
      color: $text-default
      border-bottom: 2px solid #FEA55F

    &:hover
      background: #1e2d3d

    &:nth-child(2)
      border-left: 1px solid #1e2d3d
      border-right: 1px solid #1e2d3d

    &:nth-child(3)
      border-right: 1px solid #1e2d3d


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
      margin-top: 32px
      border: 1px none #1E2D3D
      border-bottom-style: solid
      border-radius: 0 0 20px 20px
      overflow: hidden
      display: flex
      flex-direction: column
      transition: max-height .3s ease-in-out, opacity .2s ease-in-out
      max-height: 0px
      top: 24px
      opacity: 0


    &__section
      flex-direction: column
      border: none !important

      &:first-child
        display: none

      &-item
        border-right: none !important
        border-left: none !important

.nav-open
  max-height: calc(100vh - 89px) !important
  height: 100vh
  opacity: 1
  justify-content: flex-start

  .nav__section
    flex: 0

    &-item
      border-top: 1px solid #1E2D3D

      &:last-child
        border-bottom: 1px solid #1E2D3D
</style>

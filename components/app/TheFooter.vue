<template>
  <footer class="footer">
    <div class="footer__section">
      <div class="footer__section-item footer-title">find me in</div>
    </div>
    <div class="footer__section">
      <a href="https://t.me/norylord" target="_blank" class="footer__section-item footer-link">
        _telegram
      </a>
      <a href="https://vk.com/norylord" target="_blank" class="footer__section-item footer-link">
        _vk
      </a>
      <a href="https://github.com/norylord" target="_blank" class="footer__section-item footer-link">
        _github
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style lang="sass">
.footer
  display: flex
  width: 100%
  justify-content: space-between
  z-index: 10

  &__section
    display: flex
    border-top: 1px solid $primary-color

    &:nth-child(2)
      flex: 1
      border-left: 1px solid $primary-color

    &-item
      color: $text-lightgray
      padding: 16px 32px

  &-title
    flex: 1
    text-align: left
    cursor: default

  &-contact
    flex: 1
    text-align: left

  &-link
    cursor: pointer
    transition: .3s

    &:hover
      background: $primary-color

    &:nth-child(2)
      border-left: 1px solid $primary-color
      border-right: 1px solid $primary-color

    &:nth-child(3)
      border-right: 1px solid $primary-color

.active
  color: $text-default
  border-bottom: 2px solid #FEA55F

@media (max-width: 768px)
  .footer

    &__section
      &-item
        flex: 1
        justify-content: center
        text-align: center

      &:first-child
        display: none


      &:nth-child(2)
        flex: 2
        border-left: none
        border-right: none

      &:last-child
        flex: 1

      &-item
        padding: 8px
</style>

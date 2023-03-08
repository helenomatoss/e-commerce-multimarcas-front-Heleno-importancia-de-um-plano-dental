<script setup lang="ts">
import { storeToRefs } from 'pinia'

export interface IBanner {
  color?: string
  text: string
  action: {
    text: string
    href: string
  }
}

const themeStore = useThemeStore()
const { activeBrand } = storeToRefs(themeStore)

const bannerProps = activeBrand.value.resources.components?.banner
</script>

<template>
  <v-banner color="deep-purple-accent-4" class="my-4">

    <template #actions>
    </template>
  </v-banner>
</template>

<style lang="scss" scoped>
.odp-custom-banner {
  ::v-deep(.v-banner-actions) {
    align-self: unset !important;
  }

}
</style>

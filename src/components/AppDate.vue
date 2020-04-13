<template>
  <div class="custom-data pt-2 pr-2">
    <p>{{ $d(new Date(), 'long') }}</p>
    <p class="text-right">{{ $d(new Date(), 'short') }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppDate extends Vue {}
</script>

<style lang="scss" scoped>
.custom-data {
  position: fixed;
  right: 0;
  top: 100px;
}
</style>
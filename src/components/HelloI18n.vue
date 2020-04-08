<template>
  <p>{{ $t("hello") }}</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloI18n extends Vue {}
</script>

<i18n>
{
  "en": {
    "hello": "Hello, this is test!"
  },
  "ru": {
    "hello": "Привет, это тест!"
  }
}
</i18n>

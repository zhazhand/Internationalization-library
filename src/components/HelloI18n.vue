<template>
  <div>
    <h4 v-t="'hello'"></h4>
    <p v-t="path"></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloI18n extends Vue {
  public path = "example";
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello, from plugin VUE-i18n!!!",
    "example":"This is an example of a custom directive."
  },
  "ru": {
    "hello": "Привет, от плагина VUE-i18n!!!",
    "example":"Это пример пользовательской директивы."
  },
  "ua":{
    "example":"Це приклад спеціальної директиви."
  }
}
</i18n>

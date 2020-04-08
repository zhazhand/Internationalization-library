<template>
  <div>
    <select id="inputLang" class="form-control">
      <option v-for="item in languages" :key="item" @click="changeLanguage(item)">{{item}}</option>
    </select>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SeclectLang extends Vue {
  private languages = ["en", "ua", "ru"];

  changeLanguage(val: string) {
    this.$i18n.locale = val;
  }
}
</script>
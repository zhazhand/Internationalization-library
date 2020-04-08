<template>
  <div>
    <div class="alert alert-primary mt-5">
      <h1 class="text-center pt-5">{{$t("first.title")}}</h1>
      <p class="text-center mt-5 pt-5">{{$t("first.content")}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloI18n from "@/components/HelloI18n.vue";

@Component({
  components: {
    localization: HelloI18n
  }
})
export default class First extends Vue {}
</script>

<script setup>
import start from "./components/start.vue";
import experience from "./components/experience.vue";
import superpower from "./components/superpower.vue";
import portfolio from "./components/portfolio.vue";
import process from "./components/process.vue";
import Views from "./components/Views.vue";
import important from "./components/important.vue";
import characteristic from "./characteristic.vue";
import Price from "./components/price.vue";
import team from "./components/team.vue";
import bott from "./bott.vue";
</script>
<template>
  <div>
    <start />
    <experience />
    <superpower />
    <portfolio />
    <process />
    <views />
    <important />
    <characteristic />
    <price />
    <team />
    <bott />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
a {
  text-decoration: none;
  color: white;
}
</style>

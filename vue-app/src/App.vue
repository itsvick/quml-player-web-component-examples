<script setup>
import { playerConfig } from "../../react-app/src/data";
import { ref, onMounted } from "vue";

const player = ref(null);
window.questionListUrl = "https://staging.sunbirded.org/api/question/v1/list";

onMounted(() => {
  console.log("player", player.value);
  player.value.addEventListener("playerEvent", (event) => {
    console.log("onPlayerEvent", event.detail);
  });

  player.value.addEventListener("telemetryEvent", (event) => {
    console.log("onTelemetryEvent", event.detail);
  });
});

</script>

<template>
  <div class="container">
    <sunbird-quml-player :playerConfig="playerConfig" ref="player"></sunbird-quml-player>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  padding-top: 1rem;
}

html,
body {
  background-color: #fff;
}
</style>

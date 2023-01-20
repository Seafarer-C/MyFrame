<script setup lang="ts">
import { ref } from 'vue';

// const iframe = document.createElement("iframe");
// iframe.src = "http://localhost:5173/#/helloWorld";
// iframe.style.display = "none";
// document.body.appendChild(iframe);

// const myFrame = ref();
// iframe.onload = () => {
//   myFrame.value.append(iframe.contentDocument.body.children[0]);
// };
</script>

<template>
  <div>
    <h1><img src="/vite.svg" class="logo" alt="Vite logo" /> 我是父应用</h1>
    <iframe
      src="http://localhost:5173/#/helloWorld"
      frameborder="0"
      width="1000px"
      height="400px"
    ></iframe>
  </div>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

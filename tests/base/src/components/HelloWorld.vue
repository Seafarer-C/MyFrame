<script setup lang="ts">
import { ref } from 'vue';

const msg = "我是一个子应用";
const count = ref(0);

const open = () => {
  const dom = document.createElement("div");
  dom.innerHTML = `
  <div style="background: #fff">
    <h1>模拟打开的弹窗</h1>
    <button id="btn">关闭</button>
  </div>
  `;
  dom.style.width = "100vw";
  dom.style.height = "100vh";
  dom.style.position = "fixed";
  dom.style.top = "0";
  dom.style.left = "0";
  dom.style.backgroundColor = "#dbdbdbc9";
  dom.style.display = "flex";
  dom.style.justifyContent = "center";
  dom.style.alignItems = "center";

  window.parent.document.body.appendChild(dom);
  window.parent.document.getElementById("btn").onclick = () => {
    dom.remove();
  };
};
</script>

<template>
  <div class="helloWorld">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
      <button type="button" @click="open">打开弹窗</button>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
  </div>
</template>

<style scoped>
.helloWorld {
  background-color: #dbdbdb;
  display: block;
  width: 1000px;
  height: 400px;
}
</style>

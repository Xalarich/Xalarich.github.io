<template>
  <div
    class="h-screen w-screen flex justify-center items-center backdrop-brightness-[.15]"
  >
    <div
      class="sm:w-5/6 2xl:h-2/5 border-2 border-black flex flex-col-reverse 2xl:flex-row justify-around bg-richGray text-center"
    >
      <img src="/quiz.png" alt="quiz picture" />
      <div class="flex flex-col items-center 2xl:gap-2 gap-1 p-2">
        <div class="w-full grid grid-rows-1 grid-flow-col">
          <h2 class="text-white text-xl text-right">GAMING KVÍZ</h2>
          <img
            src="/exit.svg"
            alt="exit button"
            class="h-4 grid justify-self-end cursor-pointer"
            @click="closePopup"
          />
        </div>
        <span class="flex gap-1 justify-center flex-row flex-wrap"
          ><i>HTML</i> <i>CSS</i><i>JAVASCRIPT</i> <i>VUE.JS</i
          ><i>VITE</i></span
        >
        <h3 class="text-white">ABOUT</h3>
        <p>
          Tato stránka byla vytvořena za pomocí Vue.js a VITE. Je to single page
          application. V tomto projektu jsem si pohrál s API a routingem.
        </p>
        <div class="w-full flex flex-row justify-evenly">
          <a href="https://github.com/Xalarich/QuizVITE" target="_blank">
            <button
              class="border-2 rounded-md border-black flex flex-row gap-2 items-center p-1 px-2 bg-richWhite hover:bg-white text-black"
            >
              <img src="/eye.svg" alt="eye picture" class="h-6" />
              <span> KÓD </span>
            </button>
          </a>
          <a href="https://xalaquiz.netlify.app/" target="_blank">
            <button
              class="border-2 rounded-md border-black flex flex-row gap-2 items-center p-1 px-2 bg-richWhite hover:bg-white text-black"
            >
              <img src="/code.svg" alt="code picture" class="h-5" />
              <span> DEMO </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["closePopupTwo"]);
function closePopup() {
  emit("closePopupTwo");
}
</script>

<style scoped>
i {
  border: solid 1px black;
  padding: 4px;
}
</style>

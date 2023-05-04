<template>
  <div
    class="h-screen w-screen flex justify-center items-center backdrop-brightness-[.15]"
  >
    <div
      class="2xl:h-1/2 2xl:w-4/5 xl:w-4/6 sm:w-5/6 border-2 p-1 text-center border-black flex flex-col-reverse 2xl:flex-row justify-around bg-richGray"
    >
      <img src="../public/webshop.png" alt="webshop picture" />
      <div class="flex flex-col items-center 2xl:gap-4 p-2">
        <div class="w-full grid grid-rows-1 grid-flow-col">
          <h2 class="text-right text-white text-xl">WEBSHOP STRÁNKA</h2>
          <img
            src="../public/exit.svg"
            alt="exit button"
            class="h-4 grid justify-self-end cursor-pointer"
            @click="closePopup"
          />
        </div>
        <span class="flex gap-1 justify-center flex-row flex-wrap"
          ><i>HTML</i> <i>CSS</i><i>JAVASCRIPT</i> <i>VUE.JS</i><i>NUXT3</i
          ><i>TAILWIND.CSS</i></span
        >
        <h3 class="text-white">ABOUT</h3>
        <p>
          Tato stránka byla vytvořena za pomocí co nejvíce nástrojů, které
          Vue.js a NUXT 3 poskytují. Je to standardní webshop s košíkem a
          možností přihlášení.
        </p>
        <div class="w-full flex flex-row justify-evenly">
          <a href="https://github.com/Xalarich/Nuxt3WebShop" target="_blank">
            <button
              class="border-2 rounded-md border-black flex flex-row gap-2 items-center p-1 px-2 bg-richWhite hover:bg-white text-black"
            >
              <img src="../public/eye.svg" alt="eye picture" class="h-6" />
              <span> KÓD </span>
            </button>
          </a>
          <a href="https://xalarichshop.netlify.app/" target="_blank">
            <button
              class="border-2 rounded-md border-black flex flex-row gap-2 items-center p-1 px-2 bg-richWhite hover:bg-white text-black"
            >
              <img src="../public/code.svg" alt="code picture" class="h-5" />
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

const emit = defineEmits(["closePopupOne"]);
function closePopup() {
  emit("closePopupOne");
}
</script>

<style scoped>
i {
  border: solid 1px black;
  padding: 4px;
}
</style>

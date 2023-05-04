<template>
  <div
    class="h-screen w-screen flex justify-center items-center backdrop-brightness-[.15]"
  >
    <div
      class="sm:w-3/5 md:w-1/2 lg:w-4/5 xl:w-2/3 2xl:w-1/2 border-2 border-black flex flex-col-reverse lg:flex-row bg-richGray text-center overflow-y-auto"
    >
      <img
        class="p-22 sm:p-0"
        src="../public/pacman.png"
        alt="pacman game picture"
      />
      <div class="flex flex-col items-center gap-1 lg:gap-8 p-4">
        <div class="w-full grid grid-rows-1 grid-flow-col">
          <h2 class="text-white text-xl text-right">PACMAN HRA</h2>
          <img
            src="../public/exit.svg"
            alt="exit button"
            class="h-4 grid justify-self-end cursor-pointer"
            @click="closePopup"
          />
        </div>
        <span class="flex gap-1 justify-center flex-row flex-wrap"
          ><i>HTML</i> <i>CSS</i><i>JAVASCRIPT</i></span
        >
        <h3 class="text-white">ABOUT</h3>
        <p>
          Hra byla vytvořena za pomocí HTML, CSS a vanilla Javascriptu. Je to
          standardní hra Pacmana, kde hráč může pojídat duchy. Duchové mění směr
          pohybu, pouze když narazí do stěny a poté se vydají náhodným směrem do
          další zdi.
        </p>
        <div class="w-full flex flex-row justify-evenly">
          <a
            href="https://github.com/Xalarich/SimplePurePacManGame"
            target="_blank"
          >
            <button
              class="border-2 rounded-md border-black flex flex-row gap-2 items-center p-1 px-2 bg-richWhite hover:bg-white text-black"
            >
              <img src="../public/eye.svg" alt="eye picture" class="h-6" />
              <span> KÓD </span>
            </button>
          </a>
          <a href="https://xalapacman.netlify.app/" target="_blank">
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

const emit = defineEmits(["closePopupThree"]);
function closePopup() {
  emit("closePopupThree");
}
</script>

<style scoped>
i {
  border: solid 1px black;
  padding: 4px;
}
</style>

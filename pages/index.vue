<template>
  <div id="container" class="w-full relative flex flex-col justify-center">
    <nav
      v-if="!isTwoVisible && !isOneVisible && !isThreeVisible"
      class="w-full top-0 sm:hidden fixed bg-richBlack flex justify-between items-center z-10"
    >
      <span class="text-2xl pl-2">Portfolio Boudík</span>
      <div
        @click="isNavVisible = !isNavVisible"
        class="mr-6 pt-1 cursor-pointer"
      >
        <svg
          width="2.5rem"
          height="2.5rem"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#CCCCCC"
            fill-rule="evenodd"
            d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
          />
        </svg>
      </div>
    </nav>
    <Navbar
      v-if="isNavVisible"
      class="z-10 fixed top-10 bg-richBlack sm:hidden"
    />
    <section class="pt-14 h-screen flex items-center justify-center">
      <div class="flex flex-col gap-4">
        <h1
          class="text-3xl md:text-6xl font-bold text-center select-none px-10 pb-10"
        >
          AHOJ, JMENUJI SE JIRKA
        </h1>
        <h2 class="px-2 text-2xl md:text-xl select-none text-center">
          "Napsal jsem aplikaci na zapisování úkolů a napsal jsem všechno, co
          chci, aby se udělalo. Jen nemůžu přijít na to, kdo to udělá."
        </h2>
        <Navbar class="hidden sm:flex" />
      </div>
    </section>
    <section
      id="page2"
      class="min-h-screen md:h-screen flex items-center justify-center"
    >
      <div class="flex flex-col gap-8">
        <h2 class="md:mb-20 text-2xl font-bold select-none text-center">
          O MNĚ A MÉ PERSPEKTIVĚ NA ŽÍVOT A PRÁCI
        </h2>
        <div class="flex flex-col md:flex-row justify-around gap-44 md:gap-0">
          <div
            class="flex flex-col gap-8 md:gap-24 md:w-2/6 md:mt-14 text-center px-2"
          >
            <p>
              Zdravím, jmenuji se Jirka a baví mne vytvářet dobře vypadající
              webové stránky. Začal jsem se učit front-end během covid pandemie
              při mých studiích v Dánsku. Programuji v HMTL, CSS, JavaScriptu a
              frameworku Vue.js. V rámci vue ekosystému využívám Nuxt3, Vite a
              Vuetify. V Dánsku jsem úspěšně absolvoval AP Degree v marketingu,
              managementu a ekonomice.
            </p>
            <p>
              Pokud zrovna neprogramuji, tak mne najdete v posilovně, na
              běžkách, nebo na gauči u knihy. Moje nejoblíbenější mašina v
              posilovně, je mašina na Coca-Colu. Stal jsem se programátorem,
              protože mne to vždy zajímalo a také rád přemýšlím logicky. Věřím,
              že žít zdravý životní styl je důležité pro můj blahobyt a
              udržitelnou produktivitu v mých koníčcích a práci.
            </p>
            <p>
              Celkově jsem někdo, kdo je nadšený jak do programování, tak do
              života, a snažím se přenést toto nadšení do všeho, co dělám. Pokud
              zrovna nadšený nejsem, tak koukám na Netflix.
            </p>
          </div>
          <div
            class="langs-container select-none flex justify-center items-center"
          >
            <span style="--i: 1"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 2"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 3"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 4"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 5"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 6"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 7"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 8"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 9"><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span>
            <span style="--i: 10"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
            <span style="--i: 11"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
            <span style="--i: 12"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
            <span style="--i: 13"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
            <span style="--i: 14"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
            <span style="--i: 15"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
            <span style="--i: 16"
              ><i>HTML</i><i>CSS</i><i>JS</i><i>VUE</i></span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen pb-10" id="page3">
      <div class="flex flex-col items-center pt-14">
        <h2 class="my-20 text-2xl font-bold select-none">PORTFOLIO</h2>
        <div class="flex flex-col items-center gap-10">
          <div
            class="project px-2 xl:w-1/2 lg:w-3/5 w-5/6 flex justify-center"
            @click="isOneVisible = !isOneVisible"
          >
            <img
              class="w-max"
              src="../public/webshop.png"
              alt="webshop picture"
            />
            <button
              class="hover:drop-shadow-myShadow viewProject w-32 flex justify-center button rounded-full bg-white absolute flex self-center mb-2 invisible"
            >
              <span class="text-black">ZOBRAZIT PROJEKT</span>
            </button>
          </div>
          <div
            class="project px-2 xl:w-1/2 lg:w-3/5 w-5/6 flex justify-center"
            @click="isTwoVisible = !isTwoVisible"
          >
            <img class="w-max" src="../public/quiz.png" alt="quiz picture" />
            <button
              class="hover:drop-shadow-myShadow viewProject w-32 flex justify-center button rounded-full bg-white absolute flex self-center mb-2 invisible"
            >
              <span class="text-black">ZOBRAZIT PROJEKT</span>
            </button>
          </div>
          <div
            class="project px-2 xl:w-1/2 lg:w-3/5 w-5/6 flex justify-center"
            @click="isThreeVisible = !isThreeVisible"
          >
            <img
              class="w-max"
              src="../public/pacman.png"
              alt="pacman app picture"
            />
            <button
              class="hover:drop-shadow-myShadow viewProject w-32 flex justify-center button rounded-full bg-white absolute flex self-center mb-2 invisible"
            >
              <span class="text-black"> ZOBRAZIT PROJEKT </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <ProjectOne
    class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    v-if="isOneVisible"
    @closePopupOne="isOneVisible = !isOneVisible"
  />
  <ProjectTwo
    class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    v-if="isTwoVisible"
    @closePopupTwo="isTwoVisible = !isTwoVisible"
  />
  <ProjectThree
    class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    v-if="isThreeVisible"
    @closePopupThree="isThreeVisible = !isThreeVisible"
  />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import ProjectOne from "../components/ProjectOne.vue";
import ProjectTwo from "../components/ProjectTwo.vue";
import ProjectThree from "../components/ProjectThree.vue";
import { ref } from "vue";

let isNavVisible = ref(false);
let isOneVisible = ref(false);
let isTwoVisible = ref(false);
let isThreeVisible = ref(false);
</script>

<style scoped>
.langs-container {
  transform-style: preserve-3d;
  animation: animate 20s linear infinite;
}
@keyframes animate {
  0% {
    transform: perspective(500px) rotateX(0deg) rotate(0deg);
  }
  100% {
    transform: perspective(500px) rotateX(360deg) rotate(360deg);
  }
}
.langs-container span {
  position: fixed;
  color: #fff;
  font-size: 3rem;
  line-height: 0.75em;
  white-space: nowrap;
  font-weight: 900;
  transform-style: preserve-3d;
  text-shadow: 0 5px 15px rgb(0, 0, 0);
  transform: translate(5%, 5%) rotateX(calc(var(--i) * 22.5deg))
    translateZ(100px);
}
span i:nth-child(1) {
  font-style: initial;
  color: #6e6e6e;
}
span i:nth-child(2) {
  font-style: initial;
  color: #9c9c9c;
}
span i:nth-child(3) {
  font-style: initial;
  color: #cccccc;
}
span i:nth-child(4) {
  font-style: initial;
  color: #e7e7e7;
}
html {
  scroll-behavior: smooth;
}
.project:hover img {
  filter: brightness(10%);
}
.project:hover button {
  visibility: visible;
}
</style>

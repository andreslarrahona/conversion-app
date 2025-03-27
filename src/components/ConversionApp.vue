<template>
  <div class="main-div">
<h1 class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-3xl sm:text-5xl font-black my-10">
  Conversión de unidades
</h1>
<!-- This is an example component -->
<div class="max-w-lg mx-auto">
    <button
      class="text-white
      w-52
      bg-gradient-to-br from-indigo-500 to-teal-500      hover:bg-blue-800
      focus:ring-4
      focus:ring-blue-300
      font-medium
      rounded-lg
      text-sm
      px-4
      py-2.5
      text-center
      inline-flex
      items-center"
      type="button"
      data-dropdown-toggle="dropdown"
    >
    Seleccionar magnitud
    <svg class="w-4 h-4 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

    <!-- Dropdown menu -->
    <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
        <div class="px-4 py-3">
        <span class="block text-sm text-gray-400">Andrés Larrahona</span>
        <span class="block text-sm font-medium text-gray-400 truncate">andreslarrahona@gmail.com</span>
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
          <li><a @click="magnitud='Temperatura'" class="text-sm hover:bg-gray-100 text-teal-700 block px-4 py-2">Temperatura</a></li>
          <li><a @click="magnitud='Presión'" class="text-sm hover:bg-gray-100 text-teal-700 block px-4 py-2">Presión</a></li>
          <li><a @click="magnitud='Torque'" class="text-sm hover:bg-gray-100 text-teal-700 block px-4 py-2">Torque</a></li>
          <li><a @click="magnitud='Radiofrecuencia'" class="text-sm hover:bg-gray-100 text-teal-700 block px-4 py-2">Radiofrecuencia</a></li>
        </ul>
    </div>
    <h1 class="bg-clip-text text-teal-500 text-2xl sm:text-3xl font-black my-8">
      {{ magnitud }}
    </h1>
    <div class="h-90 bg-[#0001] shadow-lg w-90 left-[7%] sm:mt-4 sm:w-[70vw] absolute sm:left-[15vw] rounded-[20%] sm:rounded-lg">
        <form class="w-full h-40 mt-20">
          <div class="flex justify-center">
            <input type="text" class="sm:w-[50%] w-[80%] h-15 text-[25px] mr-2 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
            <select class="w-20 bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <option>°C</option>
              <option>°K</option>
              <option>°F</option>
            </select>
          </div> 
            <i class="rounded-[50%] h-[30px] w-[30px] text-[30px] my-5 fa-solid fa-rotate text-gray-400 hover:text-teal-500 cursor-pointer"></i>
            <div class="flex justify-center">
              <input type="text" class="sm:w-[50%] w-[80%] h-15 text-[25px] mr-2 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <select class="w-20 bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                <option>°C</option>
                <option>°K</option>
                <option>°F</option>
              </select>
            </div>
          </form>
    </div>

</div>


  </div>
</template>

<script setup>
import {ref} from 'vue';
const magnitud = ref("Temperatura")
</script>

<style scoped>

</style>

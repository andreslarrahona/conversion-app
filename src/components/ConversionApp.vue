<template>
  <div class="main-div fixed top-0 w-screen h-screen bg-gray-50">
    <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-3xl sm:text-5xl font-black my-10 mx-10">
      Conversión de unidades
    </h1>
    <div class="max-w-lg mx-auto">
      <button id="ddbtn"
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
          <ul class="py-1" aria-labelledby="dropdown" id="dropdown">
            <li v-for="(mag, key) in magnitudes" :key="key">
              <a @click="selectMagnitud(key)" class="text-sm hover:bg-gray-100 text-teal-700 block px-4 py-2">{{ key }}</a>
            </li>
          </ul>
      </div>
      <h1 class="bg-clip-text text-teal-500 text-2xl sm:text-3xl font-black my-8">
        {{ magnitud }}
      </h1>
      <div class="bg-white shadow-lg sm:shadow-xl w-90 sm:w-full mx-auto my-4 sm:my-8 rounded-xl sm:rounded-2xl overflow-hidden max-w-md sm:max-w-lg px-4 sm:px-0">
        <form class="py-5 sm:py-8 my-4 px-4 sm:px-8">
          <div class="mb-6">
            <div class="flex gap-2 sm:gap-3">
              <input id="numin"
                type="number" 
                class="flex-1 min-h-14 bg-gray-50 border border-gray-200 text-gray-800 text-lg sm:text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 sm:p-3"
                placeholder="0.00"
                v-model.number="inputValue">
              <select id="unidadFrom"
                class="min-h-14 w-28 sm:w-24 bg-gray-50 border border-gray-200 text-gray-800 text-base sm:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-3 sm:p-2.5"
                v-model="unidadFrom">
                <option v-for="(_, unidad) in magnitudes[magnitud].unidades" :key="unidad" :value="unidad">{{ unidad }}</option>
              </select>
            </div>
          </div>

          <div class="flex justify-center my-4 sm:my-6">
            <button id="swapUnits"
              type="button" 
              class="p-3 sm:p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              @click="swapUnits">
              <i class="fa-solid fa-rotate text-2xl sm:text-xl"></i>
            </button>
          </div>

          <div class="mb-2">
            <div class="flex gap-2 sm:gap-3">
              <input id="numout"
                type="number" 
                class="flex-1 min-h-14 bg-gray-50 border border-gray-200 text-gray-800 text-lg sm:text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 sm:p-3"
                placeholder="0.00" 
                v-model.number="outputValue">
              <select id="unidadTo"
                class="min-h-14 w-28 sm:w-24 bg-gray-50 border border-gray-200 text-gray-800 text-base sm:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-3 sm:p-2.5"
                v-model="unidadTo">
                <option v-for="(_, unidad) in magnitudes[magnitud].unidades" :key="unidad" :value="unidad">{{ unidad }}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUnitConverter } from '@/composables/useUnitConverter'

const { 
  magnitudes,
  magnitud,
  unidadFrom,
  unidadTo,
  inputValue,
  outputValue,
  updateDefaultUnits
} = useUnitConverter()

const selectMagnitud = (mag) => {
  magnitud.value = mag
  updateDefaultUnits()
}

const swapUnits = () => {
  const temp = unidadFrom.value
  unidadFrom.value = unidadTo.value
  unidadTo.value = temp
}
</script>

<style scoped>
</style>
<template>
  <div class="text-center">
    <ul class="flex flex-wrap justify-between items-center mx-auto">
      <li
        v-for="(color, index) in ['system', 'light', 'dark', 'sepia']"
        :key="index"
      >
        <div
          class="
            mx-1
            my-2
            px-4
            py-2
            inline-flex
            items-center
            text-grey-darkest
            font-bold
            hover:bg-gray-400 hover:text-white
            rounded
            cursor-pointer
          "
          :class="{
            'bg-blue-500 border-blue-500 text-white hover:bg-blue-700':
              !$colorMode.unknown && color === $colorMode.preference,
            'bg-gray-300 border-gray-300':
              !$colorMode.unknown && color === $colorMode.value,
          }"
          @click="$colorMode.preference = color"
        >
          <icon :icon="weather[index]" left />
          {{ color }}
        </div>
      </li>
    </ul>
    Use color mode: {{ $colorMode.preference }}
  </div>
</template>

<script lang="ts" setup>
import {
  mdiLaptop,
  mdiWhiteBalanceSunny,
  mdiWeatherPartlyCloudy,
  mdiWeatherNight,
} from "@mdi/js";

const weather = [
  mdiLaptop,
  mdiWhiteBalanceSunny,
  mdiWeatherPartlyCloudy,
  mdiWeatherNight,
];
</script>
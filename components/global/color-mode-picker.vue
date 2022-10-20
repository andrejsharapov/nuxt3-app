<template>
  <div class="text-center">
    <ul class="flex flex-wrap justify-between items-center mx-auto">
      <li v-for="(color, index) in ['system', 'light', 'dark', 'sepia']" :key="index">
        <div class="
            mx-1
            my-2
            px-4
            py-2
            inline-flex
            items-center
            font-bold
            rounded
            cursor-pointer
          " :style="{
            backgroundColor:
              !$colorMode.unknown && color === $colorMode.value
                ? !$colorMode.unknown && color === $colorMode.preference
                  ? 'var(--border-color)'
                  : 'white'
                : '',
          }" v-box-shadow="!$colorMode.unknown && color === $colorMode.value ? 49 : 0"
          @click="$colorMode.preference = color">
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
<template>
  <div class="text-center">
    <ul class="flex flex-wrap justify-between items-center mx-auto">
      <li v-for="color in ['system', 'light', 'dark', 'sepia']" :key="color">
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
            bg-gray-300
            border-2 border-gray-400
            hover:bg-gray-400 hover:text-white
            rounded
            cursor-pointer
          "
          :class="{
            'bg-blue-300 border-blue-300 text-white hover:bg-blue-500 hover:border-blue-500':
              !$colorMode.unknown && color === $colorMode.preference,
            'bg-blue-500 border-blue-500 text-white hover:bg-blue-700':
              !$colorMode.unknown && color === $colorMode.value,
          }"
          @click="$colorMode.preference = color"
        >
          {{ color }}
        </div>
      </li>
    </ul>
    Use color mode: {{ $colorMode.preference }}
  </div>
</template>

<template>
  <!-- New message form -->
  <div class="flex border-t p-4 mb-4 bg-white rounded-b-lg shadow">
    <input class="flex-auto border bg-gray-100 py-2 px-3 outline-none" placeholder="Message..." />
    <div class="flex items-center">
      <button class="focus:outline-none text-gray-400 text-2xl mx-3.5">+</button>
      <button class="focus:outline-none"><img :src="require(`~/assets/img/emoji.svg`)" class="" /></button>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
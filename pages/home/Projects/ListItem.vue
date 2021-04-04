<template>
  <li class="flex justify-between p-4 border-b">
    <div class="w-8/12 flex flex-col">
      <span class="text-base">{{item.title}}</span>
      <span class="text-sm opacity-40">{{item.description}}</span>
    </div>
    <div class="w-4/12 flex items-center">
      <!-- Progress bar -->
      <ProgressBar size="small" :val="item.progress.val" :bar-color="item.progress.color" :bar-border-radius="2" class="w-full" />
    </div>
  </li>
</template>

<script>
import ProgressBar from 'vue-simple-progress'

  export default {
    name: 'ListItem',
    props: ['item'],
    components: { ProgressBar }
  }
</script>

<style>
</style>
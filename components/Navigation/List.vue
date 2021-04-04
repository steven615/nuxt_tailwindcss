<template>
  <div class="mb-4">
    <span class="font-bold text-xs opacity-40 uppercase pl-2">{{ listType }}</span>
    <!-- Start navbar list -->
    <ul>
      <li v-for="item in data" :key="item.title" @click="$emit('on-change-page')" :class="item.link ===  `/${page}` ? 'active' : ''" class="list-item rounded-sm cursor-pointer pt-2 pb-2 pl-2.5">
        <NuxtLink :to="item.link" class="flex items-center">
          <img :src="require(`~/assets/img${item.link}.svg`)" class="w-6 h-6 mr-2" />
          <span class="opacity-90">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
    <!-- End navbar list -->
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ['listType', 'data', 'page'],
  }
</script>

<style>
  .list-item.active, .list-item:hover {
    background: rgba(87, 91, 222, 0.4);
  }
</style>


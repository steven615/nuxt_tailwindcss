<template>
  <!-- Room item -->
  <li class="list-item rounded-sm cursor-pointer p-1.5 pr-2" :class="item.id ===  this.activeId ? 'active' : ''" @click="$emit('click-room-item')">
    <NuxtLink :to="`/conversations/${item.id}`" class="flex items-center">
      <span class="ring-2 ring-gray-300 rounded-sm mr-1 min-w-5 min-h-5">
        <img :src="require(`~/assets/img/avatar/${item.avatar}.png`)" class="w-5 h-5" />
      </span>
      <span class="truncate" :class="item.unread ? 'font-bold' : ''">{{ item.name }}</span>
    </NuxtLink>
  </li>
</template>

<script>
  export default {
    name: 'ListItem',
    props: ['item'],
    data () {
      return {
        activeId: Number(this.$route.params.id)
      }
    },
  }
</script>

<style>
  .conversations .list-item.active, .conversations .list-item:hover, .conversations {
    background: #ECECEE;
  }
</style>


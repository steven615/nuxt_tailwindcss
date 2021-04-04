<template>
  <div class="mmd:flex flex-col mmd:w-60 mmd:min-w-60 min-h-screen mx-4 mt-3 mmd:m-0 bg-white p-3" :class="!isShowed ? 'hidden' : 'flex'">
    <!-- Room list -->
    <ul class="flex-auto">
      <ListItem v-for="item in list" :key="item.id" :item="item" @click-room-item="$emit('click-room-item')" />
    </ul>

    <!-- Room list controls like add and setting -->
    <div class="flex justify-between">
      <button class="text-xs py-2 px-3 mr-1 bg-gray-200 rounded-sm font-bold focus:outline-none">New Conversation</button>
      <div class="flex items-center">
        <a href="#" class="p-2">
          <img :src="require(`~/assets/img/option.svg`)" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'Sidebar',
  components: { ListItem },
  props: ['rooms', 'isShowed'],
  data () {
    return {
      list: this.rooms
    }
  },
}
</script>

<style>
</style>

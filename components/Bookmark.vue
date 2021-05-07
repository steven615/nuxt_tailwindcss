<template>
  <label class="block relative cursor-pointer select-none text-xl">
    <input type="checkbox" v-model="toggle" class="absolute opacity-0 cursor-pointer w-0 h-0" />
    <span class="w-6 h-6 flex items-center justify-center rounded-sm" :class="this.toggle ? 'custom-purple' : 'custom-gray'">
      <span><img :src="require(`~/assets/img/star.svg`)" /></span>
    </span>
  </label>
</template>

<script>
  // Custom bookmark component
  export default {
    name: 'Bookmark',
    props: ['bookmarked', 'id'],
    data () {
      return {
        toggle: this.bookmarked // toggle bookmark
      }
    },
    updated: function () {
      this.$emit('on-change', {bookmarked: this.toggle, id: this.id}); // emit bookmark status to parent
    }
  }
</script>
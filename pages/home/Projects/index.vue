<template>
  <div class="bg-white rounded-lg shadow mb-4">
    <div class="flex justify-between items-center p-3 pl-4 bg-gray-100 border-b rounded-t-lg">
      <div class="font-bold text-base">Projects</div>
      <button class="w-8 h-8 rounded bg-gray-200 focus:outline-none">+</button>
    </div>
    <ul>
      <!-- Project list -->
      <ListItem v-for="item in list" :key="item.title" :item="item" />
    </ul>
  </div>
</template>

<script>
  // custom component
  import ListItem from './ListItem.vue';

  export default {
    components: { ListItem },
    data () {
      return {
        // project list
        list: [
          {
            title: 'Flowychart Editor',
            description: 'Enigm',
            progress: {
              color: '#FFBF2F',
              val: '40',
            }
          },
          {
            title: 'Landing Page',
            description: 'Giddify',
            progress: {
              color: '#E52B20',
              val: '20',
            }
          },
          {
            title: 'Strand App',
            description: 'Mondemi',
            progress: {
              color: '#63CE63',
              val: '70',
            }
          },
        ],
      }
    }
  }
</script>

<style>
</style>
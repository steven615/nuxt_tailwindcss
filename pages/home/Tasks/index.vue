<template>
  <div class="bg-white rounded-lg shadow mb-4">
    <div class="header flex justify-between items-center p-3 pl-4 mb-0.5 bg-gray-100">
      <div class="font-bold text-base">Tasks</div>
      <div class="flex items-center">
        <!-- vue select -->
        <vSelect :options="optionsList" v-model="selected" class="w-40 mr-3 bg-white" :clearable="false"></vSelect>
        <!-- add new button -->
        <button class="w-8 h-8 rounded bg-gray-200 focus:outline-none">+</button>
      </div>
    </div>
    <!-- Tasks Table Component -->
    <Table />
  </div>
</template>

<script>
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  // custom component
  import Table from './Table';

  export default {
    name: 'Tasks',
    components : {
      vSelect, Table
    },
    data () {
      return {
        // select data
        optionsList: [ 'Sort', 'Sort1'],
        selected: 'Sort'
      }
    }
  }
</script>

<style>
.header {
  box-shadow: 0px 1px 0px #ECECEE;
}
</style>
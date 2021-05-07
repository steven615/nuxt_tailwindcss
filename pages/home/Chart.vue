<template>
  <!-- Start chart component -->
  <div class="bg-white rounded-lg shadow mb-4 w-full flex flex-col">
    <div class="flex justify-between items-center p-3 pl-4 bg-gray-100 border-b rounded-t-lg">
      <div class="font-bold text-base">This Month</div>
      <div>
        <!-- vue select -->
        <vSelect :options="optionsList" v-model="selected" class="w-40 bg-white" :clearable="false"></vSelect>
      </div>
    </div>
    <!-- chart -->
    <BarChart class="p-4 pb-3 overflow-auto w-full" />
  </div>
  <!-- End chart component -->
</template>

<script>
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';

  export default {
    name: 'Chart',
    components : { vSelect },
    data () {
      return {
        // select data
        optionsList: [ 'Sales', 'Sales 1'],
        selected: 'Sales'
      }
    }
  }
</script>

<style>
</style>


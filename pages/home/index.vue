<template>
  <div class="container flex md:flex-row flex-col min-h-screen h-screen max-w-full m-0">
    <!-- Start Navgation bar -->
    <Navigation page="home" />
    <!-- End Navgation bar -->

    <!-- Start main section -->
    <div class="md:pt-12 md:pr-3.5 md:pl-5 p-4 flex-auto overflow-auto">
      <!-- Chart -->
      <Chart />
      <div class="flex flex-col mmd:flex-row">
        <Tasks class="mmd:w-8/12 w-full mmd:mr-3" />
        <Projects class="mmd:w-4/12 w-full" />
      </div>
    </div>
    <!-- End main section -->
  </div>
</template>

<script>
  import Chart from './Chart.vue';
  import Tasks from './Tasks';
  import Projects from './Projects';

  export default {
    components: { Chart, Projects, Tasks },
  }
</script>

<style>
</style>

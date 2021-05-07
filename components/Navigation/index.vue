<template>
  <div class="w-full md:w-60 md:min-w-60 mb-2">
    <!-- Start navbar -->
    <div class="bg-purple-navbar md:h-screen md:static md:pt-5 md:p-3 p-4 text-white overflow-auto" :class="isShowedNavbar ? 'h-screen fixed inset-0 z-50' : ''">
      <div class="flex justify-between pl-2 md:mb-4">
        <!-- Start navbar brand -->
        <NuxtLink to="/home" class="flex pr-4">
          <img :src="require(`~/assets/img/logo.svg`)" class="pr-1.5" />
          <span class="text-base-custom font-black">Dashboard UI Kit 2.0</span>
        </NuxtLink>
        <!-- End navbar brand -->
        <!-- Start navbar toggle button -->
        <div class="md:hidden flex items-center">
          <button class="focus:outline-none" @click="toggleNavbar">
            <img :src="require(`~/assets/img/bars.svg`)" />
          </button>
        </div>
        <!-- End navbar toggle button -->
      </div>
      <!-- Start Navigation menus -->
      <div class="md:block" :class="isShowedNavbar ? 'block' : 'hidden'">
        <List listType="main" :data="listData.main" :page="page" @on-change-page="isShowedNavbar = false" />
        <List listType="people" :data="listData.people" :page="page" @on-change-page="isShowedNavbar = false" />
        <List listType="account" :data="listData.account" :page="page" @on-change-page="isShowedNavbar = false" />
        <List listType="misc" :data="listData.misc" :page="page" @on-change-page="isShowedNavbar = false" />
      </div>
      <!-- End Navigation menus -->
    </div>
    <!-- End navbar -->
    <!-- Start mobile sub navbar -->
    <div class="md:hidden flex justify-between items-center p-4 pb-0">
      <div class="relative">
        <input type="text" placeholder="Search..." class="rounded shadow text-sm p-2 pl-7 w-52">
        <img class="absolute top-3 left-2" :src="require(`~/assets/img/search.svg`)" />
      </div>
      <div class="flex items-center">
        <button class="focus:outline-none mr-4">
          <img :src="require(`~/assets/img/switch.svg`)" />
        </button>
        <button class="focus:outline-none">
          <img :src="require(`~/assets/img/bell.svg`)" />
        </button>
      </div>
    </div>
    <!-- End mobile sub navbar -->
  </div>
</template>

<script>
  // List component
  import List from './List.vue';

  export default {
    name: 'Navigation',
    components: { List },
    props: ['page'],// loaded page
    data () {
      return {
        isShowedNavbar: false,
        listData: {
          main: [
            {
              title: 'Home',
              link: '/home'
            },
            {
              title: 'Activity',
              link: '/activity'
            },
            {
              title: 'Projects',
              link: '/projects'
            },
            {
              title: 'Tasks',
              link: '/tasks'
            }
          ],
          people: [
            {
              title: 'Customers',
              link: '/customers'
            },
            {
              title: 'Conversations',
              link: '/conversations'
            }
          ],
          account: [
            {
              title: 'Users',
              link: '/users'
            },
            {
              title: 'Settings',
              link: '/settings'
            }
          ],
          misc: [
            {
              title: 'Empty State',
              link: '/empty_state'
            },
            {
              title: 'Onboarding',
              link: '/onboarding'
            }
          ]
        }
      }
    },
    methods: {
      toggleNavbar: function () {
        this.isShowedNavbar = !this.isShowedNavbar;
        // in mobile env, if showed navbar, unset scroll of body
        document.body.style.overflow = this.isShowedNavbar ? 'hidden' : 'auto';
      }
    }
  }
</script>
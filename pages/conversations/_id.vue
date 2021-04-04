<template>
  <div class="container flex md:flex-row flex-col min-h-screen h-screen max-w-full m-0">
    <Navigation page="conversations" />
    <!-- main -->
    <div class="conversations flex flex-auto flex-col mmd:flex-row">
      <!-- Room list -->
      <Sidebar :rooms="this.rooms" :isShowed="isShowedRoomList" @click-room-item="isShowedRoomList = false" />

      <!-- In mobile env, selected room -->
      <div class="flex mmd:hidden bg-white shadow rounded justify-between items-center m-4 p-4" :class="isShowedRoomList && 'hidden'">
        <div class="flex">
          <span class="mr-2">
            <img :src="require(`~/assets/img/avatar/${selectedRoom.avatar}.png`)" class="w-5 h-5 ring-2 ring-gray-300 rounded-sm" />
          </span>
          <span class="truncate font-bold" >{{ selectedRoom.name }}</span>
        </div>
        <div>
          <button class="focus:outline-none" @click="showRoom">
            <img :src="require(`~/assets/img/arrow-left.svg`)" />
          </button>
        </div>
      </div>

      <div class="p-4 py-0 flex-auto" :class="isShowedRoomList && 'hidden'">
        <!-- messages -->
        <Main :room="selectedRoom" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Main from './Main';

export default {
  components: { Sidebar, Main },
  data () {
    return {
      isShowedRoomList: false,
      selectedRoomId: Number(this.$route.params.id),
      rooms: [
        {id: 1, name: 'Camilla Tunney', avatar: '1', unread: false},
        {id: 2, name: 'Alise Stoke', avatar: '2', unread: true},
        {id: 3, name: 'Kristopher Fager', avatar: '3', unread: false},
        {id: 4, name: 'Winston L., Camilla T., Alise S', avatar: '1', unread: true},
        {id: 5, name: 'Laureen Deangelis', avatar: '4', unread: false},
        {id: 6, name: 'Winston Lanni', avatar: '5', unread: false},
        {id: 7, name: 'Manuel Kriz', avatar: '6', unread: false},
      ]
    }
  },
  computed: {
    // selected message room
    selectedRoom: function () {
      return this.rooms.find(function(room) {
        return room.id === this.selectedRoomId;
      }.bind(this));
    },
  },
  methods: {
    // In mobile env, show room list
    showRoom: function () {
      this.isShowedRoomList = !this.isShowedRoomList;
    }
  }
}
</script>

<style>
</style>

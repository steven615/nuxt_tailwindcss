<template>
  <!-- message -->
  <div class="mmd:h-screen flex flex-col main">
    <div class="pt-4 h-full overflow-auto">
      <div class="header flex bg-gray-100 shadow rounded-t-lg justify-between items-center p-3 pl-4 pb-4">
        <div class="font-bold text-base">{{room.name}}</div>
      </div>
      <div class="flex bg-white shadow flex-col pt-4">
        <!-- read messages -->
        <div class="px-4">
          <ChatMessage v-for="item in readMessages" :key="item.id" :item="item" />
        </div>
        <!-- separate read/unread messages -->
        <div v-if="unreadMessages.length > 0" class="flex items-center mb-12 mt-8">
          <div class="flex-auto rounded-sm h-0.25 bg-gray-200"></div>
          <span class="mx-2 text-gray-400">New Messages</span>
          <div class="flex-auto rounded-sm h-0.25 bg-gray-200"></div>
        </div>
        <!-- unread messages -->
        <div class="px-4">
          <ChatMessage v-for="item in unreadMessages" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
    <!-- New message form -->
    <NewMessageForm />
  </div>
</template>

<script>
  import ChatMessage from './ChatMessage';
  import NewMessageForm from './NewMessageForm';

  export default {
    name: 'Main',
    components: { ChatMessage, NewMessageForm },
    props: [ 'room' ],
    data () {
      return {
        messages: [
          {id: 1, authorId: 7, author: 'Felix Levan', unread: false, createdAt: '11:28', content: 'Ooops! I think I\'ve messed with prod again.. :/'},
          {id: 2, authorId: 1, author: 'Camilla Tunney', unread: false, createdAt: '11:29', content: 'Feeelix not again :-) but honestly, no worries!'},
          {id: 3, authorId: 7, author: 'Felix Levan', unread: false, createdAt: '11:32', content: 'Shiiet I screwed up big time on this one.',
            attachments: [
              {
                type: 'img',
                filename: 'image.png'
              }
            ]
          },
          {id: 4, authorId: 1, author: 'Camilla Tunney', unread: false, createdAt: '11:48', content: 'Hehe, meeting with Manu in a moment. We’ll probably need an hour or so to get this fixed.'},
          {id: 5, authorId: 7, author: 'Felix Levan', unread: false, createdAt: '11:52', content: 'Cool, I’ll let Market know.'},
          {id: 6, authorId: 1, author: 'Camilla Tunney', unread: true, createdAt: '16:31', content: 'Finally done with Manu. Got the fps to be twice as smooth using the smo function instead. All links are now anchored as well.Finally done with Manu. Got the fps to be twice as smooth using the smo function instead. All links are now anchored as well.'},
          {id: 7, authorId: 1, author: 'Camilla Tunney', unread: true, createdAt: '16:32', content: 'Done!',
            attachments: [
              {
                type: 'zip',
                filename: 'landing.zip',
                bookmarked: true
              }
            ]
          },
          {id: 8, authorId: 7, author: 'Felix Levan', unread: true, createdAt: '17:05', content: 'Looks awesome, thx! I’ll make sure Ernie pushes this asap. Market will be like.. super-duper happy.'},
        ]
      }
    },
    computed: {
      // read messages
      readMessages: function() {
        var messages = this.sortArr(this.messages, 'unread', -1);
        var index = messages.findIndex(function(m) {
          return m.unread;
        }.bind(this));

        messages.splice(index, messages.length - 1);
        return messages
      },
      // unread messages
      unreadMessages: function() {
        var messages = this.sortArr(this.messages, 'unread', 1);
        
        var index = messages.findIndex(function(m) {
          return !m.unread;
        }.bind(this));

        messages.splice(index, messages.length - 1);
        return messages;
      }
    },
    methods: {
      // Sort array
      sortArr: function (arr, item, dir = 1) {
        arr = [...arr]
        arr.sort(function(a, b) {
          if ( a[item] < b[item] ){
            return dir;
          }
          if ( a[item] > b[item] ){
            return dir * -1;
          }
          return 0;
        });
        return arr;
      }
    }
  }
</script>

<style>
/**
 * always show new message form
 * 90: selected message room height
 */
@media (max-width: 960px) {
  .conversations .main {
    height: calc(100vh - 90px);
  }
}

/**
 * mobile - always show new message form
 * 90: selected message room height, 116: top navbar height
 */
@media (max-width: 768px) {
  .conversations .main {
    height: calc(100vh - 90px - 116px);
  }
}

</style>
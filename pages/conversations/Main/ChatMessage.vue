<template>
  <!-- message item -->
  <div class="mb-4 flex">
    <!-- User avatar -->
    <div class="mr-2 min-w-10">
      <img :src="require(`~/assets/img/avatar/${item.authorId}.png`)" class="w-10 h-10 ring-2 ring-gray-300 rounded-sm" />
    </div>
    <div class="pt-2 text-base flex-auto">
      <!-- title -->
      <div>
        <span class="font-bold">{{item.author}}</span>
        <span class="text-gray-400">{{item.createdAt}}</span>
      </div>
      <!-- content -->
      <div class="">{{item.content}}</div>
      <!-- attachments -->
      <div v-if="item.attachments" class="mt-2">
        <div v-for="file in item.attachments" :key="file.filename">
          <!-- show image -->
          <div v-if="file.type === 'img'">
            <img class="rounded-lg" :src="require(`~/assets/img/uploads/${file.filename}`)" />
          </div>
          <!-- show file -->
          <div v-else class="flex p-4 border border-gray-200 rounded">
            <img class="mr-5" :src="require(`~/assets/img/file.svg`)" />
            <div class="flex flex-col">
              <div class="flex">
                <a href="#" class="mr-3">{{file.filename}}</a>
                <!-- bookmark attachment -->
                <Bookmark :bookmarked="file.bookmarked" :id="1" />
              </div>
              <span class="text-gray-300 capitalize">{{file.type}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatMessage',
    props: ['item'],
  }
</script>

<style>
</style>


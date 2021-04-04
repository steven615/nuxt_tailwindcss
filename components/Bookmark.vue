<template>
  <label class="bookmark-container">
    <input type="checkbox" v-model="toggle">
    <span class="checkmark">
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

<style>
  .bookmark-container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
  }

  /* Hide the browser's default bookmark */
  .bookmark-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom bookmark */
  .checkmark {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ECECEE;
    border-radius: 3px;
  }

  /* Show the checkmark when checked */
  .bookmark-container input:checked ~ .checkmark {
    background: #575BDE;
  }
</style>
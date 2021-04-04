<template>
  <label class="checkbox-container">
    <input type="checkbox" v-model="toggle">
    <span class="checkmark"></span>
  </label>
</template>

<script>
  export default {
    // custom checkbox
    name: 'CheckBox',
    props: ['checked', 'id'], //checked: checked status, id: identify checked elem
    data () {
      return {
        toggle: this.checked
      }
    },
    updated: function () {
      this.$emit('on-change', {checked: this.toggle, id: this.id});
    }
  }
</script>

<style>
  .checkbox-container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ECECEE;
    border-radius: 3px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 9px;
    top: 4px;
    width: 8px;
    height: 14px;
    border: solid #110f2440;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
</style>
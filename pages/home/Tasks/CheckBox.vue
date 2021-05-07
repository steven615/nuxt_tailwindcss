<template>
  <label class="checkbox-container block relative cursor-pointer select-none text-xl">
    <input type="checkbox" v-model="toggle" class="absolute opacity-0 cursor-pointer w-0 h-0">
    <span class="checkmark absolute w-6 h-6 flex items-center justify-center custom-gray rounded"></span>
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
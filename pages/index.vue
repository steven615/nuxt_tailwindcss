<script>
  // When page load, Go home page
  export default {
    middleware: [
      function({ redirect }) {
        redirect('/home');
      },
    ],
  };
</script>
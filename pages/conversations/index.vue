<script>
  // When load page, redirect specify message room
  export default {
    middleware: [
      function({ redirect }) {
        redirect('/conversations/1');
      },
    ],
  };
</script>
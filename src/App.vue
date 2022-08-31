<template>
  <EventsPage />
</template>

<script>
import EventsPage from "./pages/events.vue"
export default {
  name: "App",
  data() {
    return {
      menuOpen: false
    };
  },
  components: {
    EventsPage
  }
};
</script>
<style>
body{
  background: #E5E5E5;
}
</style>

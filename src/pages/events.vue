<template>
  <div class="container md:max-w-7xl mx-auto md:mt-12 border border-3">
    <div class="flex items-center justify-between mb-12 px-2 py-1 md:px-0">
      <a class="font-extrabold text-2xl">Events</a>
      <div>
        <div class="avatar inline-flex items-center">
          <img alt="avatar" class="h-8 w-8 object-fit rounded-xl" src="https://res.cloudinary.com/rohing/image/upload/v1646190983/gitProfile_qje88s.png">
          <h3 class="mx-3 font-bold">Bernice</h3>
          <div @click="menuOpen = !menuOpen" class="drop-down px-1.5 cursor-pointer py-2 bg-blue-50 rounded-lg">
            <img loading="lazy" :class="menuOpen ? 'rotate-0' : '-rotate-180'" alt="arrow-down" class="text-3xl transition-all transform " src="@/assets/icons/arrow-down.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="mb-6 px-4 md:px-0">
      <div class="md:w-1/4">
        <form role="search" novalidate class="flex border-gray-300 border rounded-xl bg-white items-center justify-center" @submit.prevent="">
          <label class="mb-1 mt-1 ml-3">
            <img alt="search icon" class="h-4" src="@/assets/icons/search.svg">
          </label>
          <input
            autofocus
            v-model="quickSearch"
            class="flex-grow text-base ml-1.5 mr-4 h-9 focus:outline-none"
            autocomplete="off"
            placeholder="Search"
            spellcheck="false"
          >
        </form>
      </div>
    </div>
    <div class="mb-12 px-4 md:px-0">
      <div class="font-medium mb-3">Featured Events</div>
      <div ref="carousel">
        <div class="carousel-cell" v-for="featuredEvent in featuredEvents" :key="featuredEvent.id">
          <EventCardComponent featured  :event="featuredEvent"  />
        </div>
      </div>
    </div>

    <div class="mb-12 px-4 md:px-0">
      <div class="font-medium mb-3">All Events</div>
      <div class="grid md:grid-cols-4 gap-4">
        <template v-if="!events.length">
          <SkeletonCard  v-for="s in 4" :key="s" />
        </template>
        <template v-else>
          <EventCardComponent :event="event" v-for="event in computedEvents" :key="event.id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/utils/Api";
import Flickity from "flickity"
import "flickity/css/flickity.css"
import SkeletonCard from "@/components/events/SkeletonCard";
import EventCardComponent from "@/components/events/EventCardComponent";
export default {
  name: "EventsPage",
  components: { EventCardComponent, SkeletonCard },
  data() {
    return {
      menuOpen: false,
      events: [],
      featuredEvents: [],
      quickSearch: "",
      carousel: null
    };
  },
  computed: {
    computedEvents() {
      let data = this.events;
      data = data.filter((row) => {
        return Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(this.quickSearch.toLowerCase()) > -1;
        });
      });
      return data;
    }
  },
  async created() {
    try {
      const { data } = await Api.get('https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe')
      this.featuredEvents = [...data].slice(0, 3)
      // this.carousel.reloadCells()
      this.events = data
      this.$nextTick(() => {
        this.carousel = new Flickity(this.$refs.carousel, {
          accessibility: true,
          autoplay: false,
          imagesLoaded: true,
          cellAlign: 'left',
          wrapAround: false,
          pageDots: false,
          draggable: true
        })
      })
    }catch (e) {
      console.log("Some error occurred")
    }finally {
      //
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-cell {
  @apply w-full md:w-1/2;
  padding-right: 12px;
  margin-right: 12px;
}
</style>

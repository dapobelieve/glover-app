<template>
  <div class="w-full">
    <div class="bg-white p-4 rounded-lg overflow-hidden">
      <div class="relative feature pb-[68.9%] mb-4" :style="{'padding-bottom': computedImageHeight}">
        <img class="rounded-lg top-0 absolute h-full object-cover w-full" alt="alt text"
             :src="computedAvatar">
      </div>
      <div class="flex items-start justify-between">
        <div class="text-sm text-body-2">
          <h3 class="text-black font-bold text-sm leading-tight mb-2">{{ computedEventName }}</h3>
          <div class="mb-2">
            <div class="inline-flex items-center mb-2">
              <img alt="location-icon" class="mr-2" src="@/assets/icons/location.svg">
              <span class=" text-sm">
              {{ computedLocation }}</span>
            </div>
            <div class="mb-4">
              <div class="inline-flex items-center ">
                <img alt="location-icon" class="mr-2" src="@/assets/icons/ticket.svg">
                <span class=" text-sm">
              Starting from <span class="text-glover-primary font-bold">&#x20A6;{{ computedAmount }}</span></span>
              </div>
            </div>
            <a target="_blank" :href="event.url" class="px-3 mb-4 py-1 border text-glover-primary font-bolder text-sm rounded-md border-glover-primary font-semibold">Buy Ticket</a>
          </div>
        </div>
        <div v-if="!featured" class="inline-flex event-date ">
          <div class="bg-[#FF6A2C14] relative font-semibold text-[10px] text-[#FF6A2C] px-2 py-2 rounded-lg">
            {{ formatTime(computedDate, 'd MMM') }}
            <div class="h-2 w-2 absolute top-[-4px] rounded-full border-0 right-[20px] bg-white border"></div>
            <div class="h-2 w-2 absolute bottom-[-4px] rounded-full border-0 right-[20px]  bg-white border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: {
    event: {
      type: Object,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultImage: "https://antropoti.com/wp-content/uploads/2014/11/antropoti-concierge-service-nightlife-guiding-guys-zagreb.jpg"
    };
  },
  computed: {
    computedDate() {
      const { starts_at } = this.event
      return starts_at
    },
    // eslint-disable-next-line vue/return-in-computed-property
    computedLocation() {
      if(this.event) {
        const { venue: { city } } = this.event
        return city
      }
    },
    computedEventName() {
      const { lineup } = this.event
      return `${lineup[0]} in ${this.computedLocation}`
    },
    computedAvatar() {
      const { artist } = this.event
      if(artist) {
        const { thumb_url } = artist
        return thumb_url
      }else {
        return this.defaultImage
      }
    },
    computedAmount() {
      return `${new Intl.NumberFormat().format(120000)}`;
    },
    computedImageHeight() {
      return this.featured ? `42%` : `68.9%`;
    }
  },
  methods: {
    formatTime (time, formatString = 'KK:mm b') {
      return format(new Date(time), formatString)
    }
  }
};
</script>

<style scoped>

</style>
<template>
  <div class="w-full">
    <div class="bg-white p-4 rounded-lg overflow-hidden">
      <div class="relative pb-[68.9%] mb-4 animate-pulse bg-gray-200 rounded-lg">
      </div>
      <div class="flex items-start justify-between">
        <div class="text-sm text-body-2 flex-grow">
          <div class="w-3/4 rounded animate-pulse bg-gray-200 h-4 mb-2"></div>
          <div class="flex items-center mb-2">
            <img alt="location-icon" class="mr-2" src="@/assets/icons/location.svg">
            <div class="w-2/4 animate-pulse rounded bg-gray-200 h-4"></div>
          </div>
          <div class="mb-4">
            <div class="flex items-center ">
              <img alt="location-icon" class="mr-2" src="@/assets/icons/ticket.svg">
              <div class="w-9/12 animate-pulse rounded bg-gray-200 h-4"></div>
            </div>
          </div>
          <div class="w-2/5 animate-pulse rounded bg-gray-200 h-8"></div>
        </div>
        <div class="flex event-date ">
          <div style="width: 50px" class="relative animate-pulse w-3/5 bg-gray-200 h-8 px-2 py-2 rounded-lg">
            <div class="h-2 w-2 absolute top-[-4px] rounded-full border-0 right-[20px] bg-white border"></div>
            <div class="h-2 w-2 absolute bottom-[-4px] rounded-full border-0 right-[20px]  bg-white border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
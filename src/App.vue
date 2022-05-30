<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <header class="py-5 bg-blue-600 text-white text-center">
      <div class="flex items-center justify-between flex-1 gap-8 sm:justify-end px-5">
        <div class="flex flex-row items-center gap-4">

          <div class="">
            <h4 class="red-title text-lg font-bold">Graphics Engine</h4>
          </div>
        </div>

        <div class="flex flex-row items-center gap-1">
          <button
              @click="searchGraphic"
              class="block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:bg-gray-200 shrink-0 shadow-sm"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button >
            <svg id="eUKOTMbWute1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 24 29" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24"
                 height="29">
              <ellipse rx="2.901147" ry="2.9" transform="translate(17.165639 4.655885)" fill="#fff" stroke-width="0"/>
              <ellipse rx="2.901147" ry="2.9" transform="translate(17.165639 14.5)" fill="#fff" stroke-width="0"/>
              <ellipse rx="2.901147" ry="2.9" transform="translate(17.165639 24.34)" fill="#fff" stroke-width="0"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
    <main class="fit-height">
      <router-view/>
    </main>
    <footer class="py-3 px-6 bg-gray-600 text-xs text-start text-white">
      Report Engine Developer ©2022
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    searchGraphic: function () {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

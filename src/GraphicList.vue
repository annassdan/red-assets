<template>
  <div class="flex-1 overflow-y-auto p-5">
    <div class="relative block py-5 px-6 overflow-hidden border border-gray-100 rounded-lg bg-white">
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div class="justify-between sm:flex">
        <div>
          <h5 class="text-xl font-bold text-gray-900">
            Panjang vs berat
          </h5>
        </div>
      </div>

      <div class="mt-4 sm:pr-8">
        <p class="text-xs text-gray-500">
          Grafik yang digunakan untuk mensimulasikan hasil perhitungan panjang dan berat.
        </p>
      </div>

      <dl class="flex flex-col mt-4 mb-1 items-end">
        <button @click="gotoPanjangBerat" class="flex items-center justify-between px-3 py-2 text-blue-600 transition-colors border border-current rounded-lg hover:bg-blue-500 group active:bg-indigo-500 focus:outline-none focus:ring">
            <span class="text-xs font-medium transition-colors group-hover:text-white">
              Buat Grafik
            </span>

          <svg class="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>


      </dl>
    </div>

    <div class="relative block py-5 px-6 mt-5 overflow-hidden border border-gray-100 rounded-lg bg-white">
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div class="justify-between sm:flex">
        <div>
          <h5 class="text-xl font-bold text-gray-900">
            Panjang vs berat
          </h5>
        </div>
      </div>

      <div class="mt-4 sm:pr-8">
        <p class="text-xs text-gray-500">
          Grafik yang digunakan untuk mensimulasikan hasil perhitungan panjang dan berat.
        </p>
      </div>

      <dl class="flex flex-col mt-4 mb-1 items-end">
        <button class="flex items-center justify-between px-3 py-2 text-blue-600 transition-colors border border-current rounded-lg hover:bg-blue-500 group active:bg-indigo-500 focus:outline-none focus:ring">
            <span class="text-xs font-medium transition-colors group-hover:text-white">
              Buat Grafik
            </span>
          <svg class="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>


      </dl>
    </div>

    <div class="relative block py-5 px-6 mt-5 overflow-hidden border border-gray-100 rounded-lg bg-white">
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div class="justify-between sm:flex">
        <div>
          <h5 class="text-xl font-bold text-gray-900">
            Panjang vs berat
          </h5>
        </div>
      </div>

      <div class="mt-4 sm:pr-8">
        <p class="text-xs text-gray-500">
          Grafik yang digunakan untuk mensimulasikan hasil perhitungan panjang dan berat.
        </p>
      </div>

      <dl class="flex flex-col mt-4 mb-1 items-end">
        <button class="flex items-center justify-between px-3 py-2 text-blue-600 transition-colors border border-current rounded-lg hover:bg-blue-500 group active:bg-indigo-500 focus:outline-none focus:ring">
            <span class="text-xs font-medium transition-colors group-hover:text-white">
              Buat Grafik
            </span>
          <svg class="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>


      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GraphicList',
  methods: {
    gotoPanjangBerat: function () {
      this.$router.push('/panjang-berat');
    }
  }
}
</script>

<style scoped>

</style>

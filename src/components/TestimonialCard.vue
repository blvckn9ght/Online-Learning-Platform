<template>
      <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <!-- Student Photo -->
        <div class="flex justify-center mb-6">
          <img 
            :src="photo" 
            :alt="`${name}'s photo`" 
            class="w-20 h-20 rounded-full border-4 border-navy-blue object-cover"
          >
        </div>

        <!-- Quote Text -->
        <p class="text-navy-blue text-center italic mb-6">
          "{{ quote }}"
        </p>

        <!-- Student's Name -->
        <p class="text-muted-gold text-center font-semibold">
          {{ name }}
        </p>

        <!-- Student's Location -->
        <p class="text-navy-blue/80 text-center text-sm">
          {{ location }}
        </p>
      </div>
    </template>

    <script setup>
    defineProps({
      photo: String,
      quote: String,
      name: String,
      location: String
    })
    </script>

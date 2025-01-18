<template>
      <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div class="text-muted-gold mb-4">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-4 text-navy-blue">{{ title }}</h3>
        <p class="text-navy-blue/90">
          {{ description }}
        </p>
      </div>
    </template>

    <script setup>
    defineProps({
      icon: String,
      title: String,
      description: String
    })
    </script>

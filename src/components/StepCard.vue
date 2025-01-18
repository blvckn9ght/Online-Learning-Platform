<template>
      <div class="bg-light-gray p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <!-- Icon -->
        <div class="text-navy-blue mb-6">
          <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
          </svg>
        </div>

        <!-- Step Number -->
        <div class="text-navy-blue text-sm font-bold mb-2">
          Step {{ stepNumber }}
        </div>

        <!-- Step Title -->
        <h3 class="text-xl font-bold mb-4 text-navy-blue">
          {{ title }}
        </h3>

        <!-- Step Description -->
        <p class="text-navy-blue/90">
          {{ description }}
        </p>
      </div>
    </template>

    <script setup>
    defineProps({
      stepNumber: Number,
      title: String,
      description: String,
      icon: String
    })
    </script>

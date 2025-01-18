<template>
      <div class="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <!-- Premium Badge -->
        <div v-if="isPremium" class="text-muted-gold text-sm font-bold mb-2">
          PREMIUM
        </div>
        
        <!-- Course Title -->
        <h3 class="text-xl font-bold mb-4 text-navy-blue">
          {{ title }}
        </h3>

        <!-- Course Description -->
        <p class="text-navy-blue/90 mb-6">
          {{ description }}
        </p>

        <!-- CTA Button -->
        <router-link 
          :to="`/courses/${slug}`" 
          class="bg-muted-gold text-navy-blue hover:bg-muted-gold/90 font-semibold py-2 px-4 rounded-lg transition-all text-center block"
        >
          Learn More
        </router-link>
      </div>
    </template>

    <script setup>
    defineProps({
      title: String,
      description: String,
      isPremium: {
        type: Boolean,
        default: false
      },
      slug: String
    })
    </script>

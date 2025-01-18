<template>
      <nav class="fixed top-0 left-0 right-0 z-50 bg-navy-blue backdrop-blur-sm shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <router-link to="/" class="text-xl font-bold text-muted-gold hover:text-muted-gold/90 transition-colors">
                StudyPrep
              </router-link>
            </div>
            <div class="flex items-center space-x-4">
              <router-link 
                v-for="link in links" 
                :key="link.name" 
                :to="link.path" 
                class="text-light-gray hover:text-muted-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {{ link.name }}
              </router-link>
              <div class="flex space-x-2">
                <router-link 
                  to="/login" 
                  class="bg-transparent text-light-gray hover:bg-light-gray/10 px-4 py-2 rounded-md transition-colors"
                >
                  Log In
                </router-link>
                <router-link 
                  to="/signup" 
                  class="bg-muted-gold text-navy-blue hover:bg-muted-gold/90 px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  Sign Up
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </template>

    <script setup>
    import { ref } from 'vue'

    const links = ref([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Courses', path: '/courses' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Contact', path: '/contact' }
    ])
    </script>

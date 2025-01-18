<template>
      <section id="home" class="relative h-screen">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-light-gray via-light-gray to-muted-gold/20"></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <!-- Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-blue max-w-3xl">
            Prepare for Your International Journey
          </h1>

          <!-- Subheading -->
          <p class="text-lg md:text-xl lg:text-2xl mb-8 text-navy-blue/90 max-w-2xl">
            Learn everything you need to succeed abroad—from dining etiquette to effective communication
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Primary CTA -->
            <router-link 
              to="/start-learning" 
              class="bg-muted-gold text-navy-blue hover:bg-muted-gold/90 font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Start Learning Today
            </router-link>

            <!-- Secondary CTA -->
            <router-link 
              to="/courses" 
              class="bg-navy-blue text-light-gray hover:bg-navy-blue/90 font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Explore Courses
            </router-link>
          </div>
        </div>
      </section>
    </template>

    <style scoped>
    .bg-gradient-to-b {
      background-image: linear-gradient(
        to bottom,
        #E0E0E0,
        #E0E0E0,
        rgba(255, 215, 0, 0.1)
      );
    }
    </style>

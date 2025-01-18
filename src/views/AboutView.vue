<template>
      <div class="bg-light-gray">
        <NavBar />
        
        <!-- Previous sections... -->

        <!-- Mission Section -->
        <section class="py-20 bg-navy-blue">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-light-gray mb-8">
                Our Mission
              </h2>
              <p class="text-light-gray text-lg">
                Our mission is to empower students by providing them with the essential skills and cultural knowledge they need to succeed while studying abroad. Through our courses on communication, etiquette, and cultural awareness, we aim to make the transition to life abroad as seamless and enriching as possible.
              </p>
            </div>
          </div>
        </section>

        <!-- Vision Section -->
        <section class="py-20 bg-light-gray">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto">
              <h2 class="text-3xl font-bold text-navy-blue mb-8 relative pb-4">
                Our Vision
                <div class="absolute bottom-0 left-0 w-20 h-1 bg-muted-gold"></div>
              </h2>
              <p class="text-navy-blue text-lg">
                Our vision is to become the leading platform for students preparing for international study experiences. We aim to create a global community of students who are equipped with not only academic skills but also the cultural and personal competencies necessary to thrive in diverse environments. By promoting cultural exchange, effective communication, and personal growth, we hope to enrich the lives of students everywhere.
              </p>
            </div>
          </div>
        </section>

        <!-- Core Values Section -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-navy-blue text-center mb-12">
              Our Core Values
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <!-- Integrity -->
              <div class="text-center">
                <div class="text-muted-gold mb-4">
                  <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 text-navy-blue">Integrity</h3>
                <p class="text-navy-blue/90">
                  We prioritize honesty, transparency, and ethical teaching in all our interactions with students.
                </p>
              </div>

              <!-- Empathy -->
              <div class="text-center">
                <div class="text-muted-gold mb-4">
                  <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 text-navy-blue">Empathy</h3>
                <p class="text-navy-blue/90">
                  Understanding students' challenges and providing the support they need to succeed is at the heart of everything we do.
                </p>
              </div>

              <!-- Global Awareness -->
              <div class="text-center">
                <div class="text-muted-gold mb-4">
                  <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 text-navy-blue">Global Awareness</h3>
                <p class="text-navy-blue/90">
                  We promote a deep understanding of different cultures, fostering respect and open-mindedness.
                </p>
              </div>

              <!-- Excellence -->
              <div class="text-center">
                <div class="text-muted-gold mb-4">
                  <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 text-navy-blue">Excellence</h3>
                <p class="text-navy-blue/90">
                  We strive for the highest quality in our courses, ensuring students receive world-class education and resources.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>

    <script setup>
    import NavBar from '@/components/NavBar.vue'
    </script>

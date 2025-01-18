<template>
      <section id="testimonials" class="py-20 bg-light-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12 text-navy-blue">
            What Our Students Say
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              :photo="testimonial.photo"
              :quote="testimonial.quote"
              :name="testimonial.name"
              :location="testimonial.location"
            />
          </div>
        </div>
      </section>
    </template>

    <script setup>
    import TestimonialCard from './TestimonialCard.vue'

    const testimonials = [
      {
        photo: '/src/assets/testimonials/student1.jpg',
        quote: 'The cultural preparation course completely changed my perspective and helped me adapt quickly to my new environment.',
        name: 'Sarah Johnson',
        location: 'Studying in France'
      },
      {
        photo: '/src/assets/testimonials/student2.jpg',
        quote: 'I never thought I could improve my academic writing so much. The platform is a game-changer!',
        name: 'Michael Chen',
        location: 'Studying in Canada'
      },
      {
        photo: '/src/assets/testimonials/student3.jpg',
        quote: 'The dining etiquette course gave me the confidence to navigate any social situation abroad.',
        name: 'Aisha Mohammed',
        location: 'Studying in Germany'
      },
      {
        photo: '/src/assets/testimonials/student4.jpg',
        quote: 'Thanks to the budgeting course, I\'m managing my finances better than ever before.',
        name: 'Carlos Rodriguez',
        location: 'Studying in Australia'
      },
      {
        photo: '/src/assets/testimonials/student5.jpg',
        quote: 'The communication skills course helped me make friends from all over the world.',
        name: 'Emily Zhang',
        location: 'Studying in the UK'
      },
      {
        photo: '/src/assets/testimonials/student6.jpg',
        quote: 'I feel so much more prepared for my study abroad experience after using this platform.',
        name: 'David Kim',
        location: 'Studying in Japan'
      }
    ]
    </script>

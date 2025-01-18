<template>
      <section id="courses" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12 text-navy-blue">
            Popular Courses
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              v-for="course in courses"
              :key="course.slug"
              :title="course.title"
              :description="course.description"
              :is-premium="course.isPremium"
              :slug="course.slug"
            />
          </div>
        </div>
      </section>
    </template>

    <script setup>
    import CourseCard from './CourseCard.vue'

    const courses = [
      {
        title: 'Mastering Communication Skills',
        description: 'Develop advanced communication strategies for academic and professional success.',
        isPremium: true,
        slug: 'communication-skills'
      },
      {
        title: 'Dining Etiquette for International Students',
        description: 'Learn proper dining etiquette for various cultural settings.',
        isPremium: false,
        slug: 'dining-etiquette'
      },
      {
        title: 'Cultural Awareness 101',
        description: 'Understand and navigate cultural differences effectively.',
        isPremium: false,
        slug: 'cultural-awareness'
      },
      {
        title: 'Academic Writing Essentials',
        description: 'Master the art of academic writing for international universities.',
        isPremium: true,
        slug: 'academic-writing'
      },
      {
        title: 'Budgeting for Students Abroad',
        description: 'Learn financial management skills for living abroad.',
        isPremium: false,
        slug: 'student-budgeting'
      },
      {
        title: 'Public Speaking for International Students',
        description: 'Build confidence in public speaking across cultures.',
        isPremium: true,
        slug: 'public-speaking'
      }
    ]
    </script>

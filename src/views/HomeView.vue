<template>
      <div class="bg-light-gray">
        <NavBar />
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </div>
    </template>

    <script setup>
    import NavBar from '@/components/NavBar.vue'
    import HeroSection from '@/components/HeroSection.vue'
    import FeaturesSection from '@/components/FeaturesSection.vue'
    import CoursesSection from '@/components/CoursesSection.vue'
    import TestimonialsSection from '@/components/TestimonialsSection.vue'
    import HowItWorksSection from '@/components/HowItWorksSection.vue'
    import CTASection from '@/components/CTASection.vue'
    import Footer from '@/components/Footer.vue'
    </script>

    <style>
    @media (max-width: 768px) {
      .mobile-bg-light-gray {
        background-color: #E0E0E0;
      }
    }
    </style>

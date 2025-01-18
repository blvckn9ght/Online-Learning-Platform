<template>
      <footer class="bg-navy-blue py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold text-light-gray mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><router-link to="/about" class="text-light-gray hover:text-muted-gold">About Us</router-link></li>
                <li><router-link to="/privacy" class="text-light-gray hover:text-muted-gold">Privacy Policy</router-link></li>
                <li><router-link to="/contact" class="text-light-gray hover:text-muted-gold">Contact</router-link></li>
                <li><router-link to="/terms" class="text-light-gray hover:text-muted-gold">Terms of Service</router-link></li>
              </ul>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="text-lg font-semibold text-light-gray mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-muted-gold hover:text-muted-gold/90">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="text-muted-gold hover:text-muted-gold/90">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="text-muted-gold hover:text-muted-gold/90">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 5.924c-.807.358-1.672.6-2.582.71a4.526 4.526 0 001.984-2.496 9.037 9.037 0 01-2.866 1.095 4.513 4.513 0 00-7.69 4.116 12.81 12.81 0 01-9.3-4.715 4.513 4.513 0 001.396 6.022 4.493 4.493 0 01-2.043-.564v.057a4.513 4.513 0 003.62 4.425 4.52 4.52 0 01-2.037.077 4.513 4.513 0 004.216 3.134 9.05 9.05 0 01-5.604 1.93c-.364 0-.724-.021-1.08-.063a12.773 12.773 0 006.92 2.029c8.3 0 12.84-6.876 12.84-12.84 0-.195-.004-.39-.013-.583a9.172 9.172 0 002.252-2.336z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="md:col-span-2">
              <h3 class="text-lg font-semibold text-light-gray mb-4">Subscribe for Updates</h3>
              <form class="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  class="bg-light-gray text-navy-blue p-3 rounded-l-lg focus:outline-none flex-grow"
                >
                <button 
                  type="submit" 
                  class="bg-muted-gold text-navy-blue px-6 py-3 rounded-r-lg hover:bg-muted-gold/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <!-- Copyright Notice -->
          <div class="border-t border-light-gray/20 mt-8 pt-8 text-center">
            <p class="text-light-gray">
              © 2025 StudyPrep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </template>

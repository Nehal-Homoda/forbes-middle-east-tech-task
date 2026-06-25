<script setup lang="ts">
import Footer from "@/components/layout/footer/Footer.vue";
import Header from "@/components/layout/header/Header.vue";
</script>

<template>
  <div class="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-4 py-3">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

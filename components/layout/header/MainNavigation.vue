<script setup lang="ts">
const categories = [
  { label: "World News", slug: "world-news" },
  { label: "Politics", slug: "politics" },
  { label: "Business", slug: "business" },
  { label: "Technology", slug: "technology" },
  { label: "Health", slug: "health" },
  { label: "Sports", slug: "sports" },
  { label: "Culture", slug: "culture" },
  { label: "Podcast", slug: "podcast" },
];
</script>

<template>
  <nav class="border-b border-black/70 bg-transparent">
    <div class="-mx-4 px-4 sm:mx-0 sm:px-0">
      <ul
        class="scrollbar-hide flex items-center justify-start gap-5 sm:gap-6 lg:gap-8 overflow-x-auto whitespace-nowrap py-1 sm:justify-center "
      >
        <li
          v-for="category in categories"
          :key="category.slug"
          class="shrink-0"
        >
          <NuxtLink
            :to="`/category/${category.slug}`"
            class="whitespace-nowrap text-[11px] sm:text-[13px] font-semibold text-gray-700 transition hover:text-black "
            active-class="text-red-600"
          >
            {{ category.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

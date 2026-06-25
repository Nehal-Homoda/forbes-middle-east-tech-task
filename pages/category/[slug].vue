<script setup lang="ts">
import CategoryListing from "~/components/features/category/CategoryListing.vue";
import { categoryPages } from "~/data/categories";

const route = useRoute();
const slug = String(route.params.slug);
const page = categoryPages[slug];

if (!page) {
  throw createError({
    statusCode: 404,
    statusMessage: "Category not found",
  });
}

useHead({
  title: `${page.label} News | Forbes Middle East`,
});
</script>

<template>
  <CategoryListing :page="page" />
</template>

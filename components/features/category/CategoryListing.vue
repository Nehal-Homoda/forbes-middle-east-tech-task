<script setup lang="ts">
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
import type { CategoryPage } from "~/data/categories";
import SectionHeader from "~/components/ui/SectionHeader.vue";

defineProps<{
  page: CategoryPage;
}>();
</script>

<template>
  <section class="pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24">
    <SectionHeader :title="page.title" :has-border="true"></SectionHeader>

    <div
      class="mt-8 grid gap-x-7 gap-y-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10"
    >
      <ArticleCard
        v-for="article in page.articles"
        :key="article.id"
        v-bind="article"
        layout="vertical"
        vertical-image-class="bg-black/5"
        title-class="text-lg leading-snug sm:max-w-none"
        meta-class="text-xs"
        subtitle-position="bottom"
      />
    </div>
  </section>
</template>

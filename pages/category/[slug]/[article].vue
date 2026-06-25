<script setup lang="ts">
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
import { articleDetail, categoryPages } from "~/data/categories";

const route = useRoute();
const slug = String(route.params.slug);
const article = String(route.params.article);

if (slug !== articleDetail.categorySlug || article !== articleDetail.slug) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

const similarNews = [
  categoryPages["world-news"].articles[0],
  categoryPages.health.articles[0],
  categoryPages.sports.articles[1],
];

useHead({
  title: `${articleDetail.title} | Forbes Middle East`,
});
</script>

<template>
  <article class="mx-auto max-w-[760px] pt-16 md:pt-20">
    <div class="skeleton-surface overflow-hidden">
      <NuxtImg
        :src="articleDetail.image"
        :alt="articleDetail.title"
        width="900"
        height="560"
        class="aspect-[900/560] w-full object-cover"
        format="webp"
        quality="76"
        densities="1x"
        sizes="100vw md:760px"
      />
    </div>

    <div class="mt-4 border-y border-black/50 py-2 dark:border-white/50">
      <div class="flex items-center gap-3">
        <img
          src="/favicon.ico"
          alt=""
          class="h-8 w-8 rounded-full"
          loading="lazy"
          decoding="async"
        />
        <div class="text-[11px] leading-tight">
          <p class="font-semibold uppercase">{{ articleDetail.author }}</p>
          <p>{{ articleDetail.date }}</p>
        </div>
      </div>
    </div>

    <h1 class="mt-6 border-b border-black/50 pb-5 text-2xl font-semibold uppercase leading-tight dark:border-white/50 md:text-3xl">
      {{ articleDetail.title }}
    </h1>

    <div class="space-y-5 py-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <template v-for="(paragraph, index) in articleDetail.paragraphs" :key="paragraph">
        <p>{{ paragraph }}</p>
        <ul
          v-if="index === 5"
          class="list-disc space-y-1 pl-5"
        >
          <li v-for="item in articleDetail.bullets" :key="item">
            {{ item }}
          </li>
        </ul>
      </template>
    </div>
  </article>

  <section class="pt-12 pb-20">
    <div class="border-b border-black/60 pb-3 dark:border-white/60">
      <h2 class="text-2xl font-medium uppercase md:text-3xl">SIMILAR NEWS</h2>
    </div>

    <div class="mt-6 grid gap-6 md:grid-cols-3">
      <ArticleCard
        v-for="item in similarNews"
        :key="item.id"
        v-bind="item"
        layout="vertical"
        title-class="text-sm sm:max-w-none"
        subtitle-position="bottom"
      />
    </div>
  </section>
</template>

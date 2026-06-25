<script setup lang="ts">
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
import SectionHeader from "~/components/ui/SectionHeader.vue";
import { hero, heroTeasers } from "~/data/home";
</script>

<template>
  <section class="container-app py-8 md:py-10 lg:py-12 mt-8">
    <div
      class="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8"
    >
      <ArticleCard
        v-for="story in heroTeasers"
        :key="story.id"
        v-bind="story"
        layout="teaser"
      />
    </div>

    <article class="space-y-5 lg:space-y-6">
      <div
        class="skeleton-surface overflow-hidden rounded-sm aspect-[16/10] sm:aspect-[1320/580]"
      >
        <NuxtImg
          src="/HomeBg.png"
          :alt="hero.title"
          width="1320"
          height="580"
          class="h-full w-full object-cover"
          format="webp"
          priority
          sizes="100vw lg:1320px"
        />
      </div>

      <div
        class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-for="category in hero.categories"
            :key="category"
            class="rounded-md border border-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide dark:border-white/60 sm:text-xs"
          >
            {{ category }}
          </span>
        </div>

        <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span>{{ hero.date }}</span>
          <span>—</span>
          <span>{{ hero.readTime }}</span>
        </div>
      </div>

      <SectionHeader
        :title="hero.title"
        action-title="Read Article"
        to="/category/culture"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
import SectionHeader from "~/components/ui/SectionHeader.vue";
import { worldNews } from "~/data/home";

const { featured, articles } = worldNews;
</script>
<template>
  <section class="container-app space-y-6 md:space-y-8 py-8 md:py-10 lg:py-12">
    <SectionHeader
      title="WORLD NEWS"
      to="/category/world-news"
      :has-border="true"
    />

    <div
      class="grid items-stretch gap-8 lg:grid-cols-[3fr_1fr] "
    >
      <NuxtLink
        to="/"
        class="group skeleton-surface grid overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black dark:focus-visible:outline-white md:relative"
      >
        <NuxtImg
          :src="featured.image"
          :alt="featured.title"
          width="900"
          height="700"
          class="aspect-[4/3] h-full w-full object-cover transition duration-300 group-hover:scale-105 sm:aspect-[16/11]"
          format="webp"
          quality="70"
          densities="1x"
          loading="lazy"
          sizes="100vw lg:760px"
        />

        <div
          class="flex flex-col justify-between gap-8 bg-white p-5 dark:bg-[#1b1e25] sm:p-6 md:absolute md:left-6 md:top-6 md:h-[calc(100%-3rem)] md:w-[52%] lg:w-[48%] lg:p-8"
        >
          <div class="space-y-6 lg:space-y-8">
            <span
              class="inline-flex w-fit rounded-sm bg-black px-4 py-2 text-[10px] font-semibold text-white dark:bg-white dark:text-black sm:px-5 sm:py-3 sm:text-xs"
            >
              {{ featured.date }}
            </span>

            <h3
              class="text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl"
            >
              {{ featured.title }}
            </h3>
          </div>

          <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span>by.</span>
            <span class="underline">{{ featured.author }}</span>
            <span>/</span>
            <span class="underline">{{ featured.publisher }}</span>
          </div>
        </div>
      </NuxtLink>

      <div
        class="grid sm:grid-cols-2 gap-6  lg:flex lg:h-full lg:flex-col lg:justify-between"
      >
        <ArticleCard
          v-for="article in articles"
          :key="article.title"
          v-bind="article"
          layout="horizontal"
          :reverse="true"
          class="lg:flex-1"
          image-class="aspect-square h-full min-h-28 w-full sm:min-h-32 lg:w-full"
        />
      </div>
    </div>
  </section>
</template>

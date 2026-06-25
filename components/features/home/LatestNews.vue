<script setup lang="ts">
import { latestNews } from "~/data/home";
import SectionHeader from "~/components/ui/SectionHeader.vue";
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
</script>

<template>
  <section class="container-app py-8 md:py-10 lg:py-12">
    <SectionHeader
      title="LATEST NEWS"
      to="/category/world-news"
      :has-border="true"
    />

    <div
      class="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:items-stretch lg:gap-10 "
    >
      <NuxtLink
        :to="latestNews.featured.to"
        class="group relative overflow-hidden rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        <NuxtImg
          :src="latestNews.featured.image"
          :alt="latestNews.featured.title"
          width="628"
          height="490"
          class="aspect-[4/3] sm:aspect-[628/490] w-full object-cover"
          format="webp"
          quality="70"
          densities="1x"
          loading="lazy"
          sizes="100vw lg:560px"
        />

        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFFFFF2E] backdrop-blur-[10px] border border-white/20 transition-transform duration-300 group-hover:scale-105"
          >
            <span class="ml-1 text-xl text-white"> ▶ </span>
          </div>
        </div>

        <div
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white md:p-6"
        >
          <h3
            class="max-w-lg text-base sm:text-lg underline font-semibold leading-tight"
          >
            {{ latestNews.featured.title }}
          </h3>

          <div
            class="mt-2 flex flex-wrap items-center gap-2 text-[11px] md:text-xs"
          >
            <span>
              {{ latestNews.featured.category }}
            </span>

            <span>—</span>

            <span>
              {{ latestNews.featured.date }}
            </span>
          </div>
        </div>
      </NuxtLink>

      <div
        class="grid sm:grid-cols-2 lg:flex lg:flex-col lg:justify-between gap-5 lg:gap-3"
      >
        <ArticleCard
          v-for="article in latestNews.highlights"
          :key="article.id"
          layout="horizontal"
          v-bind="article"
        />
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
      <ArticleCard
        v-for="article in latestNews.articles"
        :key="article.id"
        layout="vertical"
        v-bind="article"
      />
    </div>
  </section>
</template>

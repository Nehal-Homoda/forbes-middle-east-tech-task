<script setup lang="ts">
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
import SectionHeader from "~/components/ui/SectionHeader.vue";
import { podcasts } from "~/data/home";

</script>

<template>
  <section class="container-app space-y-5 py-8 md:py-10">
    <SectionHeader title="PODCASTS" :has-border="true" to="/category/podcast" />

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
      <ArticleCard
        v-for="podcast in podcasts"
        :key="podcast.id"
        v-bind="podcast"
        layout="horizontal"
        :reverse="true"
        image-class="aspect-square h-full min-h-24 w-full sm:min-h-28 lg:min-h-24"
      />
    </div>
  </section>
</template>

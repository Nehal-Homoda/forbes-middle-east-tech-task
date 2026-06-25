<script setup lang="ts">
import ArticleCard from "~/components/shared/cards/ArticleCard.vue";
import SectionHeader from "~/components/ui/SectionHeader.vue";
import { technologyNews } from "~/data/home";

</script>

<template>
  <section class="container-app space-y-5 py-8 md:py-10 lg:py-12">
    <SectionHeader
      title="TECHNOLOGY NEWS"
      :has-border="true"
      to="/category/technology"
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <ArticleCard
        v-for="article in technologyNews"
        :key="article.id"
        v-bind="article"
      />
    </div>
  </section>
</template>

<template>
  <section class="pt-10 md:pt-16 lg:pt-20 pb-16" aria-label="Loading content">
    <div class="h-10 w-64 skeleton-surface rounded-sm" />
    <div class="mt-4 h-px w-full bg-black/50 dark:bg-white/50" />

    <div class="mt-8 grid gap-x-7 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="item in 6" :key="item" class="space-y-4">
        <div class="aspect-[4/2.45] w-full skeleton-surface rounded-sm" />
        <div class="space-y-2">
          <div class="h-4 w-5/6 skeleton-surface rounded-sm" />
          <div class="h-4 w-2/3 skeleton-surface rounded-sm" />
          <div class="mt-3 h-3 w-36 skeleton-surface rounded-sm" />
        </div>
      </article>
    </div>
  </section>
</template>

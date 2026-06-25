<script setup lang="ts">
interface Props {
  title: string;
  to?: string;
  actionTitle?: string;
  hasBorder?: boolean;
}

withDefaults(defineProps<Props>(), {
  actionTitle: "View All",
  hasBorder: false,
});
</script>

<template>
  <div
    :class="[
      'flex flex-col gap-3 pb-4  sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:items-start mb-4 md:mb-6',
      hasBorder && 'border-b border-black dark:border-white/60',
    ]"
  >
    <h2
      class="max-w-3xl text-xl leading-tight sm:text-h5 md:text-h4 lg:text-h2"
    >
      <span>{{ title }}</span>
    </h2>

    <NuxtLink v-if="to"
      :to="to"
      class="group inline-flex w-fit items-center gap-1.5 text-[11px] font-medium text-gray-700 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black dark:text-gray-300 dark:hover:text-white dark:focus-visible:outline-white sm:text-xs"
    >
      <span>{{ actionTitle }}</span>

      <span
        class="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px] leading-none transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </NuxtLink>
  </div>
</template>

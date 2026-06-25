<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  category?: string;
  date?: string;
  subtitle?: string;
  description?: string;
  to?: string;
  layout?: "vertical" | "horizontal" | "teaser";
  reverse?: boolean;
  imageClass?: string;
  verticalImageClass?: string;
  verticalImgClass?: string;
  titleClass?: string;
  metaClass?: string;
  subtitlePosition?: "top" | "bottom";
}

withDefaults(defineProps<Props>(), {
  layout: "vertical",
  to: "/",
  reverse: false,
  imageClass: "h-full min-h-28 w-full sm:min-h-32 lg:min-h-44",
  verticalImageClass: "",
  verticalImgClass:
    "aspect-[4/2.6] w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:aspect-[4/2.3]",
  titleClass: "",
  metaClass: "",
  subtitlePosition: "top",
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black dark:focus-visible:outline-white"
  >
    <article
      v-if="layout === 'teaser'"
      class="grid h-full grid-cols-[62px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[66px_minmax(0,1fr)]"
    >
      <div :class="['skeleton-surface overflow-hidden rounded-sm', verticalImageClass]">
        <NuxtImg
          :src="image"
          :alt="title"
          width="96"
          height="80"
          class="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          format="webp"
          quality="70"
          densities="1x"
          loading="lazy"
          sizes="72px sm:80px"
        />
      </div>

      <div class="flex min-w-0 flex-col justify-center">
        <p
          v-if="category"
          class="mb-1 text-[11px] font-bold uppercase leading-tight"
        >
          {{ category }}
        </p>

        <h3
          class="line-clamp-2 text-xs font-normal leading-snug group-hover:text-black dark:group-hover:text-white"
        >
          {{ title }}
        </h3>
      </div>
    </article>

    <article
      v-else-if="layout === 'vertical'"
      class="h-full space-y-3 sm:space-y-4"
    >
      <div :class="['skeleton-surface overflow-hidden rounded-sm', verticalImageClass]">
        <NuxtImg
          :src="image"
          :alt="title"
          width="400"
          height="240"
          :class="verticalImgClass"
          format="webp"
          quality="70"
          densities="1x"
          loading="lazy"
          sizes="100vw sm:50vw lg:360px"
        />
      </div>

      <div class="space-y-2">
        <p
          v-if="subtitle && subtitlePosition === 'top'"
          :class="['text-[11px]  dark:text-gray-400', metaClass]"
        >
          {{ subtitle }}
        </p>

        <h3
          :class="[
            'text-sm font-medium leading-snug text-black sm:max-w-[290px] dark:text-white',
            titleClass,
          ]"
        >
          {{ title }}
        </h3>

        <p
          v-if="subtitle && subtitlePosition === 'bottom'"
          :class="['text-[11px]  dark:text-gray-400', metaClass]"
        >
          {{ subtitle }}
        </p>

        <div
          v-if="category || date"
          :class="[
            'flex flex-wrap items-center gap-2 text-[11px]  dark:text-gray-400',
            metaClass,
          ]"
        >
          <span v-if="category">{{ category }}</span>

          <span v-if="category && date">— </span>

          <span v-if="date">{{ date }}</span>
        </div>
      </div>
    </article>


    <article
      v-else
      class="grid h-full grid-cols-[minmax(0,1fr)_112px] items-stretch gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-12"
    >

      <div
        :class="[
          imageClass,
          reverse ? 'order-1' : 'order-2',
          'skeleton-surface overflow-hidden rounded-sm sm:col-span-5',
        ]"
      >
        <NuxtImg
          :src="image"
          :alt="title"
          width="220"
          height="160"
          class="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
          format="webp"
          quality="70"
          densities="1x"
          loading="lazy"
          sizes="112px sm:35vw lg:220px"
        />
      </div>


      <div
        :class="[
          reverse ? 'order-2' : 'order-1',
          'min-w-0 flex flex-col justify-center gap-2 sm:col-span-7 sm:gap-3',
        ]"
      >
        <span v-if="subtitle" class="text-[11px]  dark:text-gray-400">
          {{ subtitle }}
        </span>

        <h4 class="text-sm font-medium leading-snug text-black dark:text-white">
          {{ title }}
        </h4>

        <p
          v-if="description"
          class="line-clamp-3 text-[11px] leading-snug  dark:text-gray-400"
        >
          {{ description }}
        </p>

        <div
          v-if="category || date"
          class="flex flex-wrap items-center gap-2 text-[11px]  dark:text-gray-400"
        >
          <span v-if="category">{{ category }}</span>

          <span v-if="category && date">—</span>

          <span v-if="date">{{ date }}</span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<template>
  <div class="border-y border-black/70 bg-transparent text-black">
    <div class="h-8 flex items-center justify-between gap-4">
      <p class="truncate tracking-wide sm:text-xs text-[10px]">
        <svg
          class="mr-1 inline h-3 w-3 align-[-2px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 0 20" />
          <path d="M12 2a15 15 0 0 0 0 20" />
        </svg>
        Tuesday, October 29, 2024
      </p>

      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          class="inline-flex items-center text-[10px] transition hover:opacity-70 sm:text-xs"
          type="button"
        >
          <span>The Menu</span>
          <svg
            class="ml-1 h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <button
          class="h-7 w-7 inline-flex items-center justify-center transition hover:opacity-70"
          type="button"
          aria-label="Search"
        >
          <svg
            class="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<template>
  <footer class="mt-10 border-t-2 border-black pb-6 pt-3">
    <div class="border-b border-black/40 pb-3">
      <NuxtLink
        to="/"
        aria-label="Forbes Middle East home"
        class="inline-flex"
      >
        <NuxtImg
          src="/Forbes Middle East.png"
          alt="Forbes Middle East"
          width="327"
          height="82"
          class="block h-auto w-[120px] object-contain sm:w-[140px]"
          format="webp"
          quality="80"
          densities="1x"
          sizes="120px sm:140px"
        />
      </NuxtLink>
    </div>

    <div
      class="flex items-center justify-between gap-4 pt-3 text-[11px] text-gray-700"
    >
      <p>© 2026 Forbes Middle East. All Rights Reserved.</p>

      <div class="flex shrink-0 items-center gap-3 text-black">
        <span aria-label="Instagram" role="img">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span aria-label="LinkedIn" role="img">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.9 8.9H3.7V20h3.2V8.9ZM5.3 4a1.9 1.9 0 1 0 0 3.8A1.9 1.9 0 0 0 5.3 4Zm14.9 9.8c0-3-1.6-5.1-4.4-5.1-1.8 0-2.9 1-3.4 1.9V8.9H9.3V20h3.2v-5.7c0-1.6.8-2.7 2.2-2.7 1.3 0 2.2.9 2.2 2.7V20h3.3v-6.2Z" />
          </svg>
        </span>
        <span aria-label="YouTube" role="img">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
          </svg>
        </span>
        <span aria-label="X" role="img">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 10.6 21.7 2h-1.8l-6.7 7.5L7.9 2H2l8.1 11.5L2 22h1.9l7-7.4 5.6 7.4H22l-8-11.4ZM11.8 13l-.8-1.1L4.5 3.3H7l5.2 6.9.8 1.1 6.8 9.4h-2.5L11.8 13Z" />
          </svg>
        </span>
        <span aria-label="Facebook" role="img">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 8h2.4V4.2c-.4-.1-1.8-.2-3.4-.2-3.3 0-5.5 2-5.5 5.7V13H4v4.3h3.5V24h4.3v-6.7h3.4l.6-4.3h-4V10c0-1.2.3-2 2.2-2Z" />
          </svg>
        </span>
      </div>
    </div>
  </footer>
</template>

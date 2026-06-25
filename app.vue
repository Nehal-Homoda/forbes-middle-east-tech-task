<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#ef4444" :height="2" />
    <NuxtLayout>
      <Suspense>
        <NuxtPage />
        <template #fallback>
          <PageSkeleton />
        </template>
      </Suspense>
    </NuxtLayout>
  </div>
</template>

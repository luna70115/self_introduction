<script setup lang="ts">
const props = defineProps({
  songUrl: String,
  theme: {
    type: String,
    default: "light"
  }
});
</script>

<template>
  <iframe
    style="border-radius: 12px"
    :src="`${props.songUrl}${theme === 'dark' ? '&theme=0' : ''}`"
    width="100%"
    height="352"
    frameBorder="0"
    allowfullscreen="false"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</template>

<style scoped lang="scss">
iframe {
  width: 100%;
}
</style>

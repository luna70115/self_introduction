<script setup lang="ts">
import ArchAnimation from "@/components/arch-animation.vue";
defineProps<{
  title: string;
  content: string;
  text: string;
  date: string;
  img: string;
  url: string;
}>();
</script>

<template>
  <arch-animation
    direction="top"
    color="var(--dark-100)"
    border-radius="8px"
    :archHeight="0.1"
  >
    <a class="contentCard" :href="url" target="_blank">
      <img class="contentCard-img" :src="img" alt="" />
      <div class="contentCard-block">
        <h1 class="contentCard-title">{{ title }}</h1>
        <h2 class="contentCard-content">{{ content }}</h2>
        <p class="contentCard-text">{{ text }}</p>
        <p class="contentCard-date">{{ date }}</p>
      </div>
    </a>
  </arch-animation>
</template>

<style scoped lang="scss">
.contentCard {
  display: flex;
  justify-content: start;
  gap: 24px;
  background-color: var(--dark-200);
  border-radius: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-items: center;
  padding: 32px;
  position: relative;
  overflow: hidden;
  width: 100%;
  @include desktop {
    flex-direction: column;
  }
  &-img {
    aspect-ratio: 3 / 2;
    border-radius: 16px;
    width: 100%;
    max-width: 360px;
    overflow: hidden;
    @include desktop {
      max-width: 100%;
    }
  }
  &-block {
    display: flex;
    flex-direction: column;
    gap: 14px;
    @include desktop {
      width: 100%;
      gap: 10px;
    }
  }
  &-title {
    color: var(--white);
    letter-spacing: 0.5px;
    font-size: 32px;
    font-style: italic;
    line-height: 1.1;
  }
  &-content {
    color: var(--primary-400);
    letter-spacing: 1.2px;
    font-size: 20px;
    font-style: italic;
    line-height: 1.2;
  }
  &-text {
    color: var(--low-contrast-text);
    letter-spacing: 0.3px;
    font-family: museo-sans, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
  }
  &-date {
    letter-spacing: 0.5px;
    text-transform: none;
    font-family: aptly, sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 900;
    line-height: 1;
    color: var(--low-contrast-text);
  }
}
</style>

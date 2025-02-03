<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import WorksDisplay from "@/components/worksDisplay.vue";
import getImageUrl from "@/utils/getImageUrl";
import { useI18n } from "@/i18n";
import { ref } from "vue";
import HeaderHost from "@/components/headshot.vue";
import { Vue3Marquee } from "vue3-marquee";
import { WorkDisplay } from "@/types/home";
import ArchAnimation from "@/components/arch-animation.vue";
import FontMoveAnimation from "@/components/font-move-animation.vue";
const { t } = useI18n();
const images = ref<string[]>([
  getImageUrl("icon/vue.png"),
  getImageUrl("icon/react.png"),
  getImageUrl("icon/js.png"),
  getImageUrl("icon/css.png"),
  getImageUrl("icon/html.png"),
  getImageUrl("icon/typescript.png")
]);
const worksDisplayData = ref<WorkDisplay[]>([
  {
    img: getImageUrl("portfolio/seventeen.png"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "運用React框架製作",
    title: "Seventeen"
  },
  {
    img: getImageUrl("portfolio/miaoLiHan.png"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "按照UIUX刻畫切版",
    title: "喵立翰 Miao Li-Han"
  },
  {
    img: getImageUrl("portfolio/todolist.png"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "練習增/刪/查/改功能",
    title: "TodoList"
  },
  {
    img: getImageUrl("portfolio/ooxx.png"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "運用React框架製作",
    title: "OOXX井字遊戲"
  }
]);
</script>

<template>
  <div class="home">
    <section class="home-bar card-pd">
      <div class="home-left">
        <div class="home-left--title home-left--title--mobile">
          <p class="home-left--title__text">
            <font-move-animation
              :title="t('home.header.title2')"
              direction="top"
              title-color="#ffffff"
            />
          </p>
          <p class="home-left--title__text">
            <font-move-animation
              :title="t('home.header.title')"
              direction="top"
              title-color="#ffffff"
            />
          </p>
        </div>
        <div class="home-left--title home-left--title--desktop">
          <p class="home-left--title__text">{{ t("home.hello") }}</p>
          <p class="home-left--title__symbol">*</p>
          <p class="home-left--title__text">{{ t("home.helloTitle") }}</p>
        </div>
        <div class="home-left--introduce">
          <div class="home-left--introduce__bar">
            <p class="home-left--introduce__text">
              {{ t("home.im") }}
              <span class="home-left--introduce__bright">{{
                t("home.jobTitle")
              }}</span>
              {{ t("home.openingText") }}
            </p>
            <p class="home-left--introduce__text">
              {{ t("home.jobTitleAt") }}
              <a href="https://honestdesign.com.tw/">
                {{ t("home.company") }}</a
              >
            </p>
            <p class="home-left--introduce__text">
              <span class="home-left--title__symbol">* </span>
              {{ t("home.workLocation") }}
            </p>
          </div>
          <arch-animation color="#121212">
            <button class="connectBtn">
              {{ t("global.about") }}
              <img
                class="connectBtnImg"
                src="../assets/images/icon/link.png"
                alt=""
              />
            </button>
          </arch-animation>
        </div>
        <h2>{{ t("home.skills") }}</h2>
        <div class="home-marquee">
          <Vue3Marquee>
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              :alt="'圖片 ' + (index + 1)"
            />
          </Vue3Marquee>
        </div>
      </div>
      <div class="home-right">
        <header-host>
          <img class="home-right--img" src="../assets/images/luna.png" alt="" />
        </header-host>
      </div>
    </section>
    <section class="home-introductionBar page-container">
      <div class="home-introductionCard">
        <IntroductionCard
          :title="t('global.portfolio')"
          :narrative="t('home.narrative')"
          :content="t('home.connect')"
        />
      </div>
      <div class="home-worksDisplay">
        <WorksDisplay :worksDisplay="worksDisplayData" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>

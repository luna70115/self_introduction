<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import gameCard from "@/components/gameCard.vue";
import getImageUrl from "@/utils/getImageUrl";

import { useI18n } from "@/i18n";
import { Vue3Marquee } from "vue3-marquee";
import { ref } from "vue";
import SpotifyIframe from "@/components/spotify-iframe.vue";
import { spotifyEmbed } from "@/types/global";
const { t } = useI18n();
interface WorkItem {
  title: string;
  text: string;
  date: string;
}

const spotifyEmbeds: spotifyEmbed[] = [
  {
    uri: "https://open.spotify.com/embed/track/6oilrypHWm0iylwgX6ujQc?utm_source=generator",
    theme: "dark"
  },
  {
    uri: "https://open.spotify.com/embed/track/7JY1LciLO1MpI3XikSUgzy?utm_source=generator",
    theme: "dark"
  }
];

const worksData = ref<WorkItem[]>([
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" }
]);
</script>

<template>
  <div class="about">
    <div class="about-avatar">
      <img class="about-avatar--img" src="@/assets/images/avatar.jpg" alt="" />
    </div>
    <div class="about-marquee">
      <Vue3Marquee>
        <h2 class="about-marquee--text">{{ t("about.about") }}</h2>
      </Vue3Marquee>
    </div>
    <section class="about-bar page-container">
      <div class="about-left">
        <div class="about-left--title">
          <p class="about-left--title__text">{{ t("about.helloTitle") }}</p>
        </div>
        <div class="about-left--introduce">
          <div class="about-left--introduce__bar">
            <p class="about-left--introduce__text">
              {{ t("about.im") }}
              <span class="about-left--introduce__bright">{{
                t("about.jobTitle")
              }}</span>
              {{ t("about.openingText") }}
            </p>
          </div>
          <button class="connectBtn">
            {{ t("about.button") }}
            <img
              class="about-left--img"
              src="../assets/images/icon/link.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div class="about-right">
        <header-host>
          <img
            class="about-right--img"
            srcset="
              https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/66f17147b276d2788ca91113_Purple%20Card%202-p-500.png 500w,
              https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/66f17147b276d2788ca91113_Purple%20Card%202.png       768w
            "
            alt=""
          />
        </header-host>
      </div>
    </section>
    <section class="card-pd">
      <div class="about-introduce">
        <IntroductionCard
          :title="t('about.introductionCard.title')"
          :narrative="t('about.introductionCard.narrative')"
          :content="t('about.introductionCard.connect')"
          :titleColor="'black'"
          :textColor="'black'"
          :contentColor="'black'"
          :fontSize="'8vw'"
        />
        <div
          class="about-introduce--block"
          v-for="(item, index) in worksData"
          :key="index"
        >
          <div class="about-introduce--bar">
            <h1 class="about-introduce--title">{{ item.title }}|</h1>
            <p class="about-introduce--text">{{ item.text }}</p>
          </div>
          <p class="about-introduce--text">{{ item.date }}</p>
        </div>
      </div>
    </section>
    <section class="page-container">
      <div>
        <IntroductionCard
          :title="t('about.introductionCard.title.music')"
          :narrative="t('about.introductionCard.narrative.music')"
          :content="t('about.introductionCard.connect.music')"
          :fontSize="'8vw'"
        />
      </div>
      <div class="spotify">
        <spotify-iframe
          v-for="({ uri, theme }, index) in spotifyEmbeds"
          :key="`${index}-${uri}`"
          :song-url="uri"
          :theme="theme"
          class="spotify-block"
        ></spotify-iframe>
        <!--        <div-->
        <!--          v-for="(item, index) in spotifyEmbedUrl"-->
        <!--          :key="index"-->
        <!--          class="spotify-block"-->
        <!--        >-->
        <!--          <iframe-->
        <!--            class="spotify-iframe"-->
        <!--            :src="item"-->
        <!--            frameborder="0"-->
        <!--            allowfullscreen-->
        <!--            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"-->
        <!--          >-->
        <!--          </iframe>-->
        <!--        </div>-->
      </div>
    </section>
    <section class="card-pd">
      <div>
        <IntroductionCard
          :title="t('about.introductionCard.title.game')"
          :narrative="t('about.introductionCard.narrative.game')"
          :content="t('about.introductionCard.connect.game')"
          :fontSize="'8vw'"
        />
      </div>
      <div class="about-gameCard">
        <gameCard
          :title="t('about.introductionCard.gameTitle.one')"
          :text="t('about.introductionCard.gameText.one')"
          :img="getImageUrl('game/lol.png')"
        />
        <gameCard
          title="OOXX"
          text="xxoo"
          :img="getImageUrl('worksDisplay/worksDisplay.jpg')"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/about";
</style>

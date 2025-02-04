<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import gameCard from "@/components/gameCard.vue";
import getImageUrl from "@/utils/getImageUrl";

import { useI18n } from "@/i18n";
import { Vue3Marquee } from "vue3-marquee";
import { ref } from "vue";

const { t } = useI18n();
interface WorkItem {
  title: string;
  text: string;
  date: string;
}

const worksData = ref<WorkItem[]>([
  { title: "刺激1995 |", text: "The Shawshank Redemption", date: "1994" },
  { title: "令人討厭的松子的一生 |", text: "嫌われ松子の一生", date: "2006" },
  { title: "初戀那件小事 |", text: "First Love", date: "2010" },
  { title: "雲端情人 |", text: "Her", date: "2013" },
  { title: "真愛每一天 |", text: "About Time", date: "2013" },
  {
    title: "如果這世界貓消失了 |",
    text: "世界から猫が消えたなら",
    date: "2016"
  }
]);
</script>

<template>
  <div class="about">
    <div class="about-avatar">
      <img class="about-avatar--img" src="../assets/images/luna.png" alt="" />
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
          <a
            class="connectBtn"
            href="https://www.linkedin.com/in/hui-xiang-su-a849a0269/?trk=public-profile-join-page"
            target="_blank"
          >
            {{ t("global.about") }}
            <img
              class="about-left--img"
              src="../assets/images/icon/link.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="about-right">
        <header-host>
          <img
            class="about-right--img"
            src="../assets/images/luna.png"
            alt=""
          />
        </header-host>
      </div>
    </section>
    <section class="card-pd page-container">
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
      <div class="spotify grid-col grid-col-two">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/6ppefZt5uQ62aHAfSa1Jx9?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/3tgWMPOY4stCdKYj5NjrAe?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div class="spotify grid-col grid-col-three">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/1MYK39bbxvYX0LzS30mlqU?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/56wDFSIa9Tr7zbEXUVMwjP?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/5HsSsEeP3hU9QSfHZrzbtA?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
    <section class="card-pd page-container">
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
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/about";
</style>

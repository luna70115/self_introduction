<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import ContentCard from "@/components/content-card.vue";
import getImageUrl from "@/utils/getImageUrl";

import { useI18n } from "@/i18n";

// import ArchAnimation from "@/components/arch-animation.vue";

const { t } = useI18n();
</script>

<template>
  <section class="card-pd">
    <introductionCard
      :title="'Hello'"
      :narrative="t('blog.narrative')"
      :content="t('blog.connect')"
      :fontSize="'20vw'"
    />
    <a
      class="connectBtn"
      href="https://www.linkedin.com/in/hui-xiang-su-a849a0269/?trk=public-profile-join-page"
      target="_blank"
    >
      {{ t("global.about") }}
      <img class="connectBtnImg" src="../assets/images/icon/link.png" alt="" />
    </a>
  </section>
  <section class="blog-contentCard">
    <ContentCard
      :title="t('content-card.title.one')"
      :content="t('content-card.content.one')"
      :text="t('content-card.text.one')"
      :date="t('content-card.date.one')"
      :img="getImageUrl('blog/blog.png')"
      :url="'https://www.casper.tw/'"
    />
    <ContentCard
      :title="t('content-card.title.two')"
      :content="t('content-card.content.two')"
      :text="t('content-card.text.two')"
      :date="t('content-card.date.two')"
      :img="getImageUrl('blog/thisWeb.jpg')"
      :url="'https://www.thisweb.dev/?fbclid=PAZXh0bgNhZW0CMTEAAaYYfxqKwrNCQ4U1W6R9FFPMpbU9vXHidiEAcdC_6Dd3CW4POtBYoR0rTYg_aem_mhvwPbp_WVr2FWdpuplseA'"
    />
  </section>
</template>

<style scoped lang="scss">
.blog {
  &-contentCard {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 0 88px;
    @include desktop {
      padding: 0 24px;
    }
  }
}
</style>

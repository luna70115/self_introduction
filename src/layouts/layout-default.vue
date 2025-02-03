<script setup lang="ts">
import { useRouter } from "vue-router";
import FooterChat from "@/components/footerChat.vue";

import optionFields from "@/components/optionFields.vue";
import ArchAnimation from "@/components/arch-animation.vue";
import { useI18n } from "@/i18n";
const { t } = useI18n();

const router = useRouter();
const isOptionFields = ref(false);
const showOptionFields = () => {
  isOptionFields.value = true;
  console.log("666666", isOptionFields.value);
};
const toHome = () => {
  router.push("/home");
};
const toAbout = () => {
  router.push("/about");
};
const toBlog = () => {
  router.push("/blog");
};
</script>

<template>
  <div class="layout-default">
    <optionFields v-model="isOptionFields"></optionFields>
    <div class="layout-default-head">
      <div class="layout-default-head-frontPage">
        <img
          src="../assets/images/personal_logo/LUNA-cutout.png"
          @click="toHome"
          class="layout-default-head-frontPage--img"
          alt=""
        />
      </div>

      <div class="layout-default-linkBar">
        <arch-animation color="#ffffff" border-radius="8px">
          <a class="layout-default-link" @click="toHome">
            {{ t("global.portfolio") }}
          </a>
        </arch-animation>
        <arch-animation color="#ffffff" border-radius="8px">
          <a class="layout-default-link" @click="toAbout">
            {{ t("global.about") }}</a
          >
        </arch-animation>
        <arch-animation color="#ffffff" border-radius="8px">
          <a class="layout-default-link" @click="toBlog">
            {{ t("global.blog") }}</a
          >
        </arch-animation>
        <arch-animation direction="top" color="#ffffff" border-radius="8px">
          <a
            class="layout-default-link"
            href="https://www.linkedin.com/in/hui-xiang-su-a849a0269/?trk=public-profile-join-page"
            target="_blank"
          >
            {{ t("global.linkedin") }}
            <img
              class="layout-default-img"
              src="../assets/images/icon/link.png"
              alt=""
            />
          </a>
        </arch-animation>
      </div>
      <div class="layout-default-connect">
        <a
          class="layout-default-link"
          href="https://www.linkedin.com/in/hui-xiang-su-a849a0269/?trk=public-profile-join-page"
          target="_blank"
        >
          {{ t("global.connect") }}
          <img
            class="layout-default-img"
            src="../assets/images/icon/link.png"
            alt=""
          />
        </a>
        <a
          class="layout-default-link connectLink"
          @click.prevent="showOptionFields"
        >
          <q-icon name="more_horiz" color="#ffffff" size="24px"></q-icon>
        </a>
        <teleport to="body" v-if="isOptionFields">
          <a
            class="layout-default-link connectLink layout-default-link--fixed"
            @click.prevent="isOptionFields = false"
          >
            <q-icon name="more_horiz" color="#ffffff" size="24px"></q-icon>
          </a>
        </teleport>
      </div>
    </div>
    <a
      class="layout-default-suspension"
      href="https://www.linkedin.com/in/hui-xiang-su-a849a0269/?trk=public-profile-join-page"
      target="_blank"
    >
      <div class="layout-default-suspensionBar">
        <p>L</p>
        <p class="layout-default-suspensionBar--text">Luna</p>
      </div>
    </a>
    <slot />
    <section><FooterChat :title="'Hello'" /></section>
  </div>
</template>

<style lang="scss"></style>

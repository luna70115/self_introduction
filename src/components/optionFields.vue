<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "@/i18n";

const emit = defineEmits(["close"]);

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const currentRoute = computed(() => route.path);
const isShow = defineModel<boolean>();

const onClose = () => {
  emit("close", false);
  isShow.value = false;
};

const toHome = () => {
  router.push("/home");
  onClose();
};
const toAbout = () => {
  router.push("/about");
  onClose();
};
const toBlog = () => {
  router.push("/blog");
  onClose();
};
</script>

<template>
  <q-dialog v-model="isShow" @hide="onClose" full-height full-width>
    <div class="optionFields" @click.self="onClose">
      <div class="optionFields-card">
        <p
          class="optionFields-link"
          :class="{ 'optionFields-oneLink': currentRoute === '/home' }"
          @click="toHome"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 240 48"
            fill="none"
            class="nav-menu-gooey"
          >
            <path
              d="M120 48C179.027 48 181.622 -5.1036e-06 240 0L1.94551e-05 -2.09815e-05C58.3784 -1.58779e-05 60.973 48 120 48Z"
              fill="#f1f1f1"
            ></path>
          </svg>
          <span>
            {{ t("global.portfolio") }}
          </span>
          <q-icon name="arrow_forward" color="#ffffff"></q-icon>
        </p>
        <p
          class="optionFields-link"
          :class="{ 'optionFields-oneLink': currentRoute === '/about' }"
          @click="toAbout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 240 48"
            fill="none"
            class="nav-menu-gooey"
          >
            <path
              d="M120 48C179.027 48 181.622 -5.1036e-06 240 0L1.94551e-05 -2.09815e-05C58.3784 -1.58779e-05 60.973 48 120 48Z"
              fill="#f1f1f1"
            ></path>
          </svg>
          <span>
            {{ t("global.about") }}
          </span>
          <q-icon name="arrow_forward" color="#ffffff"></q-icon>
        </p>
        <p
          class="optionFields-link"
          :class="{ 'optionFields-oneLink': currentRoute === '/blog' }"
          @click="toBlog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 240 48"
            fill="none"
            class="nav-menu-gooey"
          >
            <path
              d="M120 48C179.027 48 181.622 -5.1036e-06 240 0L1.94551e-05 -2.09815e-05C58.3784 -1.58779e-05 60.973 48 120 48Z"
              fill="#f1f1f1"
            ></path>
          </svg>
          <span>
            {{ t("global.blog") }}
          </span>
          <q-icon name="arrow_forward" color="#ffffff"></q-icon>
        </p>
        <a
          class="optionFields-link"
          href="https://www.linkedin.com/in/hui-xiang-su-a849a0269/?trk=public-profile-join-page"
          target="_blank"
        >
          <span>
            {{ t("global.linkedin") }}
          </span>
          <q-icon name="open_in_new" color="#ffffff"></q-icon>
        </a>
      </div>
    </div>
  </q-dialog>
</template>
<style scoped lang="scss">
.optionFields {
  &-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    justify-content: center;
    width: 100%;
    background-color: var(--white);
    border-radius: 16px;
    padding: 8px 0;
    top: 100px;
  }

  &-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 16px 32px;
    color: var(--dark-100);
    font-size: 36px;
    cursor: pointer;
    svg {
      position: absolute;
      top: -1px;
      right: 8%;
      width: 45vw;
      max-width: 250px;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      transform-origin: top;
      animation: svg-top-show 0.8s cubic-bezier(0.4, 0, 0.2, 1.4) forwards;
      animation-delay: 0.2s;
      visibility: hidden;
    }
  }
  &-oneLink {
    background-color: var(--dark-100);
    color: var(--white);
    padding: 16px 16px 16px 32px;
    svg {
      visibility: visible;
    }
    //font-size: 40px;
  }
}
:global(.q-dialog__inner--minimized) {
  padding: 8px !important;
}

@keyframes svg-top-show {
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  98% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1.01, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  100% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}
</style>

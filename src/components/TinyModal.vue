<template>
  <div
    v-if="visible"
    class="overlay"
  >
  </div>
  <div
    class="modal-wrapper"
    :class="{ 'is-visible': visible}"
  >
    <transition 
      :css="false"
      @leave="(el, done) => motions.slideUp.leave(done)"
    >
      <div
        class="modal"
        v-if="visible"
        v-motion="'slideUp'"
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: -100,
          transition: SPRING_TRANSITION
        }"
        :leave="{ opacity: 0, y: -300,
        transition: SPRING_FAST_TRANSITION }"
      >
        <h1 class="modal-title">
          <slot name="title">
          </slot>
        </h1>
        <slot>

        </slot>

        <div class="button-row" v-if="false">
          <div
            class="icon-button"
            @click="onCloseClick"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup>
// import { socket } from "@/socket";
import { useMotions } from "@vueuse/motion";
import { SPRING_FAST_TRANSITION, SPRING_TRANSITION } from "@/constants/motion";
// import { SFX_BUTTON } from "@/constants/sound";
// import { sound } from "@/utils/sound";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});

defineEmits(['close']);

const motions = useMotions();

function onCloseClick() {
  // sound.play(SFX_BUTTON);
  // socket.emit('modal:close')
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color:  rgb(254, 254, 240, 0.8);
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.modal-wrapper.is-visible {
  pointer-events: auto;
}

.modal {
  max-width: var(--modal-max);
  padding: 32px;
  color: var(--color-bg);
  background-color: white;
  border: var(--border);
  border-radius: var(--radius);
  text-align: center;
}

.modal-title {
  font-size: 3rem;
}
.button-row {
  display: flex;
  justify-content: space-between;
}

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: var(--color-bg);
  background: black;
  /* border: 3px solid black; */
  border-radius: 100%;
  cursor: pointer;
}

</style>
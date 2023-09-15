<template>
    <teleport to="body">
        <div class="overlay" @click.stop="closeModal">
            <div @click.stop class="overlay__modal">
                <div class="overlay__modal__header">
                    <h2 class="overlay__modal__header__title">
                        <slot name="title">{{ title }}</slot>
                    </h2>
                    <button class="overlay__modal__header__close" @click="closeModal">X</button>
                </div>
                <div class="overlay__modal__body">
                    <slot name="text">{{ text }}</slot>
                </div>
                <div class="overlay__modal__footer">
                    <slot name="buttons">
                        <button v-for="button in buttons" :key="button.id" @click="() => handleButtonClick(button)"
                            class="overlay__modal__footer__button">
                            {{ button.name }}
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
  
<script setup>
import { defineProps, defineEmits } from "vue";

const { buttons, text, title } = defineProps(["buttons", "text", "title"]);
const emit = defineEmits(["close"]);

const closeModal = () => {
    emit("close");
};

const handleButtonClick = (button) => {
    if (button.onClick) {
        button.onClick();
    }
    closeModal();
};
</script>
  
<style scoped src="./MyModal.scss"></style>
  
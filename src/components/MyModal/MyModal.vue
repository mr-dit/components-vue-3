<template>
    <teleport to="body">
      <div class="modal-overlay" @click.stop="closeModal">
      <div @click.stop class="modal">
        <div class="modal-header">
          <h2 class="modal-title"><slot name="title">{{ title }}</slot></h2>
          <button class="modal-close" @click="closeModal">X</button>
        </div>
        <div class="modal-body">
          <slot name="text">{{ text }}</slot>
        </div>
        <div class="modal-footer">
          <slot name="buttons">
            <button
              v-for="button in buttons"
              :key="button.id"
              @click="() => handleButtonClick(button)"
              class="modal-button"
            >
              {{ button.name }}
            </button>
          </slot>
        </div>
      </div>
    </div>
    </teleport>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from "vue";
  
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
  
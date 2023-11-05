<script setup lang="ts">
import { ref } from 'vue';
const message = ref<string>('Reports Page')
</script>

<template>
  <q-page class="row items-center justify-evenly">
    {{message}}
  </q-page>
</template>

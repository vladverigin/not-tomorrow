<script setup lang="ts">

</script>

<template>
  <q-layout>
    <div class="layout">
      There will be normal landing page but not today
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Dashboard"
        no-caps
      />
    </div>
  </q-layout>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-grow: 1;
}
</style>

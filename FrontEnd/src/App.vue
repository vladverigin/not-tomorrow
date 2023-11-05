<template>
  <router-view />
</template>

<script setup lang="ts">
import useUserStore from "stores/userStore/user-store";

const userStore = useUserStore();
userStore.checking();
</script>

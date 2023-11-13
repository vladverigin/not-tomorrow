<script setup lang="ts">
import useUserStore from "stores/userStore/user-store";

const userStore = useUserStore();
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title
          @click="$router.push('/welcome')"
          class="site-name-title"
        >
          Not tomorrow
        </q-toolbar-title>

        <q-space />
        <q-btn stretch flat label="Dashboard" to="/" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Reports" to="/reports" />
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat :label="userStore.firstname">
          <q-list>
            <q-item-label header>Last Reports</q-item-label>
            <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Report #</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item class="flex-end">
              <q-btn
                color="primary"
              >
                Settings
              </q-btn>
              <q-btn
                color="red"
                @click="userStore.logout()"
              >
                Log out
              </q-btn>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.site-name-title {
  cursor: pointer;
}
.flex-end {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
<script setup lang="ts">
</script>

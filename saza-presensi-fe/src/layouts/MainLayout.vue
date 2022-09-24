<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <!-- <q-icon :name="fabYoutube" color="red" size="28px" /> -->
          <q-toolbar-title shrink class="text-weight-bold">
            Salsabiila Zainia
            <small>Presensi</small>
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="video_call"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="apps"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-expansion-item expand-icon=" ">
            <template #header>
              <q-icon name="dashboard" color="grey" size="sm" />
              <q-item-label header class="text-weight-bold text-uppercase">
                DASHBOARD
              </q-item-label>
            </template>
          </q-expansion-item>

          <!-- <q-separator class="q-my-md" /> -->

          <ExpansionMenu title="MASTER DATA" :links="master" />
          <q-separator class="q-mt-md q-mb-xs" />
          <ExpansionMenu title="PRESENSI" :links="master" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import {
  fabYoutube,
  fasSitemap,
  fasPersonChalkboard,
  fasUserGroup,
} from "@quasar/extras/fontawesome-v6";
import ExpansionMenu from "src/components/ExpansionMenu.vue";
export default {
  name: "MyLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
      fabYoutube,
      leftDrawerOpen,
      search,
      toggleLeftDrawer,
      links1: [
        { icon: "dashboard", text: "Dashboard" },
        // { icon: 'folder', text: 'Master Data' },
        // { icon: 'subscriptions', text: 'Subscriptions' }
      ],
      master: [
        { icon: fasPersonChalkboard, text: "Guru" },
        { icon: fasUserGroup, text: "Santri" },
        { icon: fasSitemap, text: "Jabatan" },
        { icon: "watch_later", text: "Jam" },
      ],
      links3: [
        { icon: fabYoutube, text: "YouTube Premium" },
        { icon: "local_movies", text: "Movies & Shows" },
        { icon: "videogame_asset", text: "Gaming" },
        { icon: "live_tv", text: "Live" },
      ],
      links4: [
        { icon: "settings", text: "Settings" },
        { icon: "flag", text: "Report history" },
        { icon: "help", text: "Help" },
        { icon: "feedback", text: "Send feedback" },
      ],
      buttons1: [
        { text: "About" },
        { text: "Press" },
        { text: "Copyright" },
        { text: "Contact us" },
        { text: "Creators" },
        { text: "Advertise" },
        { text: "Developers" },
      ],
      buttons2: [
        { text: "Terms" },
        { text: "Privacy" },
        { text: "Policy & Safety" },
        { text: "Test new features" },
      ],
    };
  },
  components: { ExpansionMenu },
};
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
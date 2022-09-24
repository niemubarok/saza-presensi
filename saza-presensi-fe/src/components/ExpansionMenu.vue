<template>
  <!-- content-inset-level="1" -->
  <q-expansion-item icon="folder" label="MASTER DATA">
    <template #header>
      <q-icon name="folder" color="grey" size="sm" />
      <q-item-label header class="text-weight-bold text-uppercase">
        {{ title }}
      </q-item-label>
    </template>

    <q-item
      class="q-ml-md"
      v-for="link in links"
      :key="link.text"
      v-ripple
      clickable
    >
      <q-item-section avatar>
        <q-icon color="grey" :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    links: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <div style="height: fit-content" class="q-pa-xs zoom">
    <q-card
      :style="
        props.status == 'ontime'
          ? 'border-left: 3px solid green; border-bottom: 1px solid green'
          : 'border-left:3px solid red; border-bottom: 1px solid red'
      "
      style="width: 200px; border-radius: 8px"
      class="q-pr-sm"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar class="rounded-borders" style="margin-left: -10px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            style="width: 150px; margin-left: -15px"
            class="textOverflow text-left text-weight-bold"
            >{{ props.name }}</q-item-label
          >
          <q-item-label style="margin-left: -15px" caption class="text-left"
            >{{ props.in }} - {{ props.out }}</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  in: String,
  out: String,
  status: String,
});
</script>

<style >
.zoom {
  transition: transform 0.2s; /* Animation */
}

.zoom:hover {
  transform: scale(
    1.6
  ); /*
     (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  z-index: 100;
}

.textOverflow {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  width: 400px;
}
</style>

<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="bg-green-5" style="width: 50%; height: 50%">
      <!-- <AttandeeCard
        :name="props.name"
        :in="props.in"
        :out="props.out"
        :status="props.status"
      /> -->
      <q-icon name="done"></q-icon>
    </q-card>
  </q-dialog>
</template>

<script setup>
import AttandeeCard from "./AttandeeCard.vue";
import { useDialogPluginComponent } from "quasar";
const props = defineProps({
  name: String,
  in: String,
  out: String,
  status: String,
});

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
</script>

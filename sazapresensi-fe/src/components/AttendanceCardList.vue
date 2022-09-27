<template>
  <div class="window-height">
    <q-table
      title="DAFTAR HADIR SANTRI"
      :rows="tableRows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      rows-per-page-label="Per halaman "
      :rows-per-page-options="[30, 50, 100]"
      grid
      style="padding-left: 250px"
      title-class="text-weight-bold q-px-xl bg-grey-3  rounded-borders"
      binary-state-sort
      dense
    >
      <!-- :sort-method="customSort" -->
      <!-- <template #top>
        <p>test</p>
      </template> -->
      <template #top-left>
        <div style="margin-bottom: -20px" class="row">
          <q-card class="column q-px-xs" square flat>
            <span
              style="border-left: 3px solid navy"
              class="q-px-xs text-weight-bolder"
              >DAFTAR KEHADIRAN</span
            >
            <q-separator />
          </q-card>

          <div class="column q-pl-xl">
            <div class="row">
              <q-chip size="sm" color="grey-1"> filter :</q-chip>
              <q-chip size="sm" color="blue" clickable> Semua </q-chip>
              <q-chip size="sm" color="green" clickable> Tepat Waktu </q-chip>
              <q-chip size="sm" color="red" clickable> Telat </q-chip>
            </div>
          </div>
          <!-- <q-banner dense> -->
        </div>
        <!-- </q-banner> -->
      </template>
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          class="q-mr-xl"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <AttandeeCard
          :name="props.row.name"
          :in="props.row.in"
          :out="props.row.out"
          :status="props.row.status"
        />
      </template>

      <template v-slot:pagination="scope">
        <div
          class="fixed-bottom-right q-mb-md z-top"
          style="margin-right: 300px"
        >
          <q-card class="bg-dark text-white q-px-xs"
            >halaman : {{ scope.pagination.page }}</q-card
          >
        </div>

        <div
          class="fixed-bottom-right q-mb-md z-top"
          style="margin-right: 190px"
        >
          <q-btn size="xs" color="dark" @click="scope.nextPage()"
            ><q-icon :name="fasChevronRight"></q-icon
          ></q-btn>
        </div>
        <div
          class="fixed-bottom-right q-mb-md z-top"
          style="margin-right: 250px"
        >
          <q-btn size="xs" color="dark" @click="scope.prevPage()"
            ><q-icon :name="fasChevronLeft"></q-icon
          ></q-btn>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { useAttendancesStore } from "src/stores/attendances-store";
import { onMounted, ref } from "vue";
import { fasChevronLeft, fasChevronRight } from "@quasar/extras/fontawesome-v6";
import AttandeeCard from "./AttandeeCard.vue";

const useAttendance = useAttendancesStore();
const attendances = useAttendance.attendances;
const filter = ref("");

const columns = [
  {
    name: "no",
    label: "NO",
    align: "center",
  },
  {
    name: "name",
    label: "Nama",
    align: "left",
  },
  {
    name: "class",
    label: "Kelas",
    align: "center",
  },
  {
    name: "date",
    label: "Tanggal",
    align: "center",
  },
  {
    name: "in",
    label: "Jam Datang",
    align: "center",
  },
  {
    name: "out",
    label: "Jam Pulang",
    align: "center",
  },
  {
    name: "status",
    label: "Status",
    align: "center",
  },
];

const tableRows = ref([]);

onMounted(() => {
  // console.log(useAttendance.getAttendance);
  tableRows.value = useAttendance.getAttendance;
  // useAttendance.addAttendance();
});
</script>

<style>
/* div.q-table--dense div.q-table__top div.q-table-control {
  padding-bottom: 5px;
} */
</style>


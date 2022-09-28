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
      <template #top-left>
        <div style="margin-bottom: -20px" class="row">
          <q-card class="bg-grey-1 column q-px-xs" square flat>
            <div class="bg-grey-1">
              <q-chip
                icon="dashboard"
                color="grey-1"
                class="rounded-borders transparent"
                dense
                ><span
                  style="border-left: 3px solid dark"
                  class="q-px-xs text-weight-bolder"
                  >DAFTAR KEHADIRAN SANTRI</span
                ></q-chip
              >
            </div>
          </q-card>

          <!-- <div class="column q-pl-xl">
            <div class="row">
              <q-chip size="sm" color="grey-1"> filter :</q-chip>
              <q-chip size="sm" color="blue" clickable> Semua </q-chip>
              <q-chip size="sm" color="green" clickable> Tepat Waktu </q-chip>
              <q-chip size="sm" color="red" clickable> Telat </q-chip>
            </div>
          </div> -->
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
          class="row fixed-bottom-right q-mb-md z-top"
          style="margin-right: 300px"
        >
          <div class="column q-pr-xl">
            <div class="row">
              <q-chip text-color="dark" size="sm" color="grey-1">
                filter :</q-chip
              >
              <q-chip
                class="card-border-radius"
                text-color="white"
                size="sm"
                color="blue-grey-8"
                clickable
              >
                Semua
              </q-chip>
              <q-chip
                class="card-border-radius"
                text-color="white"
                size="sm"
                color="green"
                clickable
              >
                Tepat Waktu
              </q-chip>
              <q-chip
                class="card-border-radius"
                text-color="white"
                size="sm"
                color="red"
                clickable
              >
                Telat
              </q-chip>
            </div>
          </div>
          <!-- </div> -->
          <div class="column q-px-md">
            <q-btn
              unelevated
              class="no-shadow card-border-radius"
              :icon="fasChevronLeft"
              size="xs"
              color="blue-grey-8"
              @click="scope.prevPage()"
              ><q-tooltip>Halaman Sebelumnya</q-tooltip></q-btn
            >
          </div>

          <div class="column">
            <q-btn
              unelevated
              class="card-border-radius"
              :icon="fasChevronRight"
              size="xs"
              color="blue-grey-8"
              @click="scope.nextPage()"
              ><q-tooltip>Halaman Selanjutnya</q-tooltip></q-btn
            >
          </div>
          <div class="column q-px-md">
            <q-chip
              outline
              size="xs"
              dense
              class="card-border-radius text-dark q-pa-sm"
              >halaman : {{ scope.pagination.page }}</q-chip
            >
          </div>
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

// import { fab } from "@quasar/extras/fontawesome-v6";

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


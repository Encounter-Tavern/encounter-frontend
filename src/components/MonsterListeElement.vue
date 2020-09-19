<template>
  <v-card>
    <v-list-item :to="/encounters/ + id" link>
      <v-list-item-content>
        <v-list-item-title>{{name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "EncounterListElement",
  props: {
    name: String,
    id: Number,
  }
};
</script>
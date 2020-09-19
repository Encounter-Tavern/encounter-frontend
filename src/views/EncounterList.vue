<template>
  <div class="pa-3">
    <v-container>
      <h1>Encounters</h1>
      <div v-for="(encounter) in encounters" :key="encounter.id">
        <EncounterListElement :name="encounter.name" :id="encounter.id"/>
      </div>
    </v-container>
  </div>
</template>

<script>
import EncounterListElement from "../components/MonsterListeElement";

export default {
  name: "EncounterList",
  components: {
    EncounterListElement,
  },
  data() {
    return {
      encounters: [],
    };
  },
  methods: {
    getData() {
      this.$http.get("http://localhost:8081/encounters/").then((response) => {
        console.log(response);
        this.encounters = response.data;
      });
    },
  },
  mounted: function () {
    this.getData();
  },
};
</script>
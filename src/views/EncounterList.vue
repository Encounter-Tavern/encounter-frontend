<template>
  <div class="pa-3">
    <v-container>
      <h1>Encounters</h1>
      <v-row v-for="(encounter) in encounters" :key="encounter.id">
        <v-col>
         <EncounterListElement :name="encounter.name" :id="encounter.id"/>
        </v-col>
      </v-row>
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
      this.$http.get(this.$url + "/encounters/").then((response) => {
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
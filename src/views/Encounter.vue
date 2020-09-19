<template>
  <div class="encounter pa-3">
    <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex v-for="monster in encounter.monsters" :key="monster.id" xs12 sm6 md6 lg4 xl3 class="mb-10">
          <MonsterCard :monster="monster"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MonsterCard from "../components/MonsterCard";

export default {
  name: "Encounter",
  components: {
    MonsterCard
  },
  data () {
    return {
      encounter: {}
    }
  },
  created(){
    this.$http.get("http://localhost:8081/encounters/" + this.$route.params.id)
    .then((response) => {this.encounter = response.data})
  }
};
</script>


<style scoped>
</style>
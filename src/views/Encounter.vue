<template>
  <div class="encounter pa-3">
    <v-layout row wrap>
      <v-flex xs12 sm7 md8 xl10>
        <div>
          <v-layout row wrap justify-space-around>
            <v-flex
              v-for="monster in encounter.monsters"
              :key="monster.id"
              xs12
              sm12
              md12
              lg4
              xl3
              :class="justify-space-around"
            >
              <MonsterCard :monster="monster" />
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 sm5 md4 xl2>
        <h1>Test</h1>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import MonsterCard from "../components/MonsterCard";

export default {
  name: "Encounter",
  components: {
    MonsterCard,
  },
  data() {
    return {
      encounter: {},
    };
  },
  created() {
    this.$http
      .get("http://localhost:8081/encounters/" + this.$route.params.id)
      .then((response) => {
        this.encounter = response.data;
      });
  },
};
</script>


<style scoped>
</style>
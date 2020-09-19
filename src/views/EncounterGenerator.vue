<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Generator</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-text-field
        label="Name"
        placeholder="Thundertree Cultists"
        hint="Enter the name of your encounter. This will help you identify it later on."
        clearable
        counter="25"
        v-model="name"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-col>
        <v-radio-group v-model="difficulty" label="Difficulty" :mandatory="true" :row="true">
          <v-radio label="Easy" value="EASY"></v-radio>
          <v-radio label="Normal" value="NORMAL"></v-radio>
          <v-radio label="Hard" value="HARD"></v-radio>
          <v-radio label="Total Party Kill" value="TPK"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PlayerPopup @addPlayer="addPlayerToList($event.name, $event.level)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-chip-group v-for="(player, index) in players" :key="player.name">
          <v-chip
            close
            @click:close="removePlayerFromList(index)"
            color="blue"
          >{{player.name}} Level: {{player.level}}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="createEncounter()" color="success">Generate</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PlayerPopup from "../components/PlayerPopup";

export default {
  name: "EncounterGenerator",
  components: {
    PlayerPopup,
  },
  data() {
    return {
      name: "",
      difficulty: "",
      players: [],
    };
  },
  methods: {
    addPlayerToList(name, level) {
      console.log(name);
      this.players.push({
        name: name,
        level: level,
      });
    },
    removePlayerFromList(index) {
      this.players.splice(index, 1);
    },
    createEncounter() {
      this.$http
        .post("http://localhost:8081/encounters/generate", {
          name: this.name,
          difficulty: this.difficulty,
          players: this.players,
        })
        .then((response) => console.log(response));
    },
  },
};
</script>

<style scoped>
.encounterGenerator {
}
</style>

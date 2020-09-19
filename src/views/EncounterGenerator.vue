<template>
  <div class="encounterGenerator">
        <v-container>
            <v-row>
                <h1>Generator</h1>
            </v-row>
            <v-row>
                <v-radio-group v-model="difficulty" label="Difficulty" :mandatory="true" :row='true'>
                    <v-radio label="Easy" value="EASY"></v-radio>
                    <v-radio label="Normal" value="NORMAL"></v-radio>
                    <v-radio label="Hard" value="HARD"></v-radio>
                    <v-radio label="Total Party Kill" value="TPK"></v-radio>
                </v-radio-group>
            </v-row>
            <v-row>
                <PlayerPopup @addPlayer="addPlayerToList($event.name, $event.level)"/>
            </v-row>
            <v-row>
                <v-col v-for="player in players" :key="player.name">
                    <Player :name="player.name" :level="player.level" />
                </v-col>
            </v-row>
            <v-row>
                <v-btn color="success">Generate</v-btn>
            </v-row>
        </v-container>
  </div>
</template>

<script>
import PlayerPopup from '../components/PlayerPopup';
import Player from '../components/Player';

export default {
  name: 'EncounterGenerator',
  components: {
      PlayerPopup,
      Player
  },
  data() {
      return {
          difficulty: '',
          players: []
      }
  },
  methods: {
      addPlayerToList(name, level){
        console.log("addToList");
        console.log(name);
        this.players.push({
            "name": name,
            "level": level
        });
      }
  }
}
</script>

<style scoped>
</style>

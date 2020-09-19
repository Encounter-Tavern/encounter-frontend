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
                <v-chip-group v-for="(player, index) in players" :key="player.name">
                    <v-chip close @click:close="removePlayerFromList(index)" color="blue">
                        {{player.name}} Level: {{player.level}}
                    </v-chip>
                </v-chip-group>
            </v-row>
            <v-row>
                <v-btn @click="createEncounter()" color="success">Generate</v-btn>
            </v-row>
        </v-container>
  </div>
</template>

<script>
import PlayerPopup from '../components/PlayerPopup';

export default {
  name: 'EncounterGenerator',
  components: {
      PlayerPopup
  },
  data() {
      return {
          difficulty: '',
          players: []
      }
  },
  methods: {
      addPlayerToList(name, level){
        console.log(name);
        this.players.push({
            "name": name,
            "level": level
        });
      },
      removePlayerFromList(index){
        this.players.splice(index, 1);
      },
      createEncounter(){
        this.$http.post("https://api.coindesk.com/v1/bpi/currentprice.json", {
            
        }).
        then(response => (console.log(response)));
        //TODO
      }
  }
}
</script>

<style scoped>
</style>

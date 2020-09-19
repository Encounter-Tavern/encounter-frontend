<template>
    <div class="text-center">
        <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
            Add player
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
            Add Player to Encounter
            </v-card-title>

            <div class="cardForm">
                <v-form>
                    <v-text-field v-model="name" label="Player Name" :clearable="true" hint="Enter the name of this player" placeholder="Zork the Ork"/>
                    <v-slider v-model="level" label="Level" :min="1" :max="20" hint="Enter the level of this player"/>
                </v-form>
            </div>
            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="addPlayer()">
                Add Player
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    name: 'PlayerPopup',
    data () {
      return {
        dialog: false
      }
    },
    props: {
        name: String,
        level: Number
    },
    methods: {
        addPlayer(){
            this.dialog = false;
            console.log("addPlayer");
            this.$emit('addPlayer', {
                "name": this.name,
                "level": this.level
            });
        }
    }
}
</script>

<style scoped>
    .cardForm{
        margin-right: 10%;
        margin-left: 10%;
    }
</style>
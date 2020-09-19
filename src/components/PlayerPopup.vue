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
                    <v-text-field label="Player Name" :clearable="true" placeholder="Zork the Ork"/>
                    <v-slider label="Level" :min="0" :max="20" hint="20"/>
                </v-form>
            </div>
            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
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
        dialog: false,
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
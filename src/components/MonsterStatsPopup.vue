<template>
        <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn x-small depressed v-bind="attrs" v-on="on">
            Change Stats
            </v-btn>
        </template>

        <v-card class="text-left">
            <v-card-title>Change Stats</v-card-title>
            <v-container>
                <v-row>
                    <v-col>
                        <v-text-field label="Hit Points" v-model="hitPoints" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Armor Class" v-model="armorClass" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Strength" v-model="strength" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Dexterity" v-model="dexterity" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Constitution" v-model="constitution" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Intelligence" v-model="intelligence" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Wisdom" v-model="wisdom" type="number"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Charisma" v-model="charisma" type="number"/>
                    </v-col>
                </v-row>
            </v-container>
            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="dialog = false">
                Close Without Saving
            </v-btn>
            <v-btn color="success" text @click="emitChanges()">
                Save and Close
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script>
export default {
    name: 'MonsterStatsPopup',
    data (){
        return {
            "dialog": false,
            "hitPoints": 123,
            "armorClass": 12,
            "strength": 12,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 5 
        }
    },
    methods: {
        emitChanges(){
            this.dialog = false;
            this.$emit('statChanges', {
                "hitPoints": this.hitPoints,
                "armorClass": this.armorClass,
                "strength": this.strength,
                "dexterity": this.dexterity,
                "constitution": this.constitution,
                "intelligence": this.intelligence,
                "wisdom": this.wisdom,
                "charisma": this.wisdom
            })
        }
    }
}
</script>
<template>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn x-small depressed v-bind="attrs" v-on="on">
            More Info
            </v-btn>
        </template>

        <v-card class="text-left">
            <v-card-title>More Infos</v-card-title>
            <v-card-text>
                <h3>General Info</h3>
                <p>
                    <b>Name:</b> {{this.name}} <br>
                    <b>Race:</b> {{this.race}} <br>
                    <b>Aligment:</b> {{this.aligment}} <br>
                </p>
                <h3>Languages</h3>
                <p v-if="languages.length > 0">This creature can communicate in the following languages:
                    <ul>
                        <li v-for="language in languages" :key="language">
                            {{language}}
                        </li>
                    </ul>
                </p>
                <p v-else>
                    This creature does not seems to be able to communicate in any to us known languages.
                </p>
                <h3>Vulnerabilities</h3>
                <p v-if="vulnerabilities.length > 0">This creature is vulnerable against the following types of damages:
                    <ul>
                        <li v-for="vulnerability in vulnerabilities" :key="vulnerability">
                            {{vulnerability}}
                        </li>
                    </ul>
                </p>
                <p v-else>
                    This creature does not seem to have any special vulnerabilities.
                </p>
                <h3>Resistances</h3>
                <p v-if="resistances.length > 0">This creature is resistant against the following types of damages:
                    <ul>
                        <li v-for="resistance in resistances" :key="resistance">
                            {{resistance}}
                        </li>
                    </ul>
                </p>
                <p v-else>
                    This creature doesnt seem to have any special resistances.
                </p>
                <h3>Immunities</h3>
                <p v-if="immunities.length > 0">This creature is immune against the following types of damages:
                    <ul>
                        <li v-for="immunity in immunities" :key="immunity">
                            {{immunity}}
                        </li>
                    </ul>
                </p>
                <p v-else>
                    This creature does not seem to be immune against any sort of damage type.
                </p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="dialog = false">
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'MonsterInfoPopup',
    /*props: {
            languages: [],
            vulnerabilities: [],
            resistances: [],
            immunities: []
    },*/
    data () {
        return {
            dialog: false,
            languages: [],
            vulnerabilities: [],
            resistances: [],
            immunities: [],
            aligment: "chaotic evil",
            name: "Boblin",
            race: "Goblin"
        }
    }
}
</script>

<style scoped>
    .text-left {
        text-align: left;
    }
</style>
<template>
<div class="encounter pa-3">
    <v-layout row wrap>
        <v-flex xs12 sm8 md9 xl10>
            <div>
                <v-layout row wrap justify-space-around>
                    <v-flex v-for="monster in encounter.monsters" :key="monster.id" xs12 sm12 md6 lg4 xl3 class="mb-10 d-flex justify-space-around">
                        <MonsterCard :monster="monster" @save="save()" />
                    </v-flex>
                </v-layout>
            </div>
        </v-flex>
        <v-flex xs12 sm4 md3 xl2>
            <InitiativeList :entities="entities" />
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import MonsterCard from "../components/MonsterCard";
import InitiativeList from "../components/Initiative/InitiativeList"

export default {
    name: "Encounter",
    components: {
        MonsterCard,
        InitiativeList,
    },
    data() {
        return {
            encounter: {},
            entities: [],
        };
    },
    created() {
        this.$http
            .get("http://localhost:8081/encounters/" + this.$route.params.id)
            .then((response) => {
                this.encounter = response.data;

                this.encounter.monsters.forEach(monster => {
                    this.entities.push(monster.name)
                })
                this.encounter.players.forEach(player => {
                    this.entities.push(player.name)
                })
            });
    },
    methods: {
        save() {
            this.$http.put("http://localhost:8081/encounters/" + this.$route.params.id, this.encounter)
                .then((response) => {
                    console.log(response)
                })

        }
    }
};
</script>

<style scoped>
</style>

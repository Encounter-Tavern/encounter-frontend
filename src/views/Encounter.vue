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
            <h1>Initiative</h1>
            <v-list runded>
                <v-list-item>
                    <v-list-item-content>Test</v-list-item-content>
                </v-list-item>
            </v-list>
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
                console.log(response.data);
                this.encounter = response.data;
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

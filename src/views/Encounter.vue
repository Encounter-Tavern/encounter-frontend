<template>
<div class="encounter pa-3">
    <v-layout row wrap>
        <v-flex xs12 sm12 md12 xl12>
            <div>
                <v-layout row wrap justify-space-around>
                    <v-flex v-for="monster in encounter.monsters" :key="monster.id" xs12 sm6 md4 lg3 xl2 class="mb-10 d-flex justify-space-around">
                        <MonsterCard :monster="monster" @save="save()" />
                    </v-flex>
                </v-layout>
            </div>
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
            entities: [],
        };
    },
    created() {
        this.$http
            .get(this.$url + "/encounters/" + this.$route.params.id)
            .then((response) => {
                this.encounter = response.data;
            });
    },
    methods: {
        save() {
            this.$http.put(this.$url + "/encounters/" + this.$route.params.id, this.encounter)
                .then((response) => {
                    console.log(response)
                })

        }
    }
};
</script>

<style scoped>
</style>

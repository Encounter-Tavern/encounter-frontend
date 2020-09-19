<template>
    <div class="encounter pa-3">
        <v-container>
            <v-layout row wrap justify-space-around>
                <v-flex xs12 sm6 md6 lg4 xl3>
                    <MonsterCard/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import MonsterCard from '../components/MonsterCard';

export default {
    name: 'Encounter',
    components: {
        MonsterCard
    }
}
</script>


<style scoped>

</style>
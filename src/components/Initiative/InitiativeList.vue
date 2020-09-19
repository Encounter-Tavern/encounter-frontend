<template>
<div>
    <h1>Inititive</h1>
    <v-layout rounded v-for="(entity, index) in entities" :key="index">
        <InitiativeListElement :entity="entity" :index="index" />
    </v-layout>
</div>
</template>

<script>
import InitiativeListElement from "./InitiativeListElement";

export default {
    name: "InitiativeList",
    components: {
        InitiativeListElement,
    },
    props: {
        entities: Array
    },
}
</script>

<template>
<div>
    <h1>Inititive</h1>
    <v-list rounded v-for="(entity, index) in entities" :key="index">
        <v-list-item>
            <v-list-item-content>
                <InitiativeListElement :entity="entity" />
            </v-list-item-content>
        </v-list-item>
    </v-list>
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

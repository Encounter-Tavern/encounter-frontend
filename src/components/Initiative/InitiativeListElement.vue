<template>
<v-flex>
    <v-card class="mb-10">
        <div class="text-align-left">
            <h3>{{entity}}</h3>
        </div>
    </v-card>
</v-flex>
</template>

<script>
export default {
    name: "InitiativeListElement",
    props: {
        entity: String,
    },
};
</script>

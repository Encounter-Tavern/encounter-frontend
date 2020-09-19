<template>
    <v-card>
        <v-card-title>{{name}}</v-card-title>
        <v-card-subtitle>{{level}}</v-card-subtitle>
    </v-card>
</template>


<script>
export default {
    name: 'Player',
    props: {
        name: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    }
}
</script>
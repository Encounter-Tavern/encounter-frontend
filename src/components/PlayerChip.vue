<template>
    <v-chip>
        {{name}} {{level}}
    </v-chip>
</template>


<script>
export default {
    name: 'PlayerChip',
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
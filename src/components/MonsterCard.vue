<template>
    <v-card max-width="300px" class="pa-1">
        <v-img
        class="white--text align-end"
        height="250px"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-fuNOp4TfVvU%2FTr1fc7OFMsI%2FAAAAAAAAAZc%2FOHSYSyx5DCY%2Fs1600%2FTANK%252BGoblin%252BTuf%252BGit.jpg&f=1&nofb=1"
        >
      <v-card-title>{{this.name}}, the {{this.type}}</v-card-title>
    </v-img>

    <v-card-actions>
        <v-container>
            <v-row>
                <v-col>
                </v-col>
                <v-col>
                </v-col>
                <v-col>
                </v-col>
            </v-row>
        </v-container>
    </v-card-actions>
    </v-card>
</template>


<script>
export default {
    name: 'MonsterCard',
    data() {
        return {
            "name": "Boblin",
            "type": "Goblin"
        }
    }
}
</script>
<template>
    <div class="text-left">
        <h3>{{name}}</h3>
        <p> <b>Attack Bonus:</b> {{attackBonus}} <br>
            {{description}}</p>
        <div>
            <v-chip-group>
                <v-chip v-for="dam in damage" :key="dam.damage_type.name">
                    {{dam.damage_type.name}} {{dam.damage_dice}} <v-icon x-small> {{icons.dice}} </v-icon>
                </v-chip>
            </v-chip-group>
        </div>
    </div>
</template>


<script>
import { mdiDiceMultiple } from '@mdi/js';

export default {
    name: 'MonsterAction',
    props: {
        name: String, 
        description: String,
        damage: Array,
        attackBonus: Number
    },
    data() {
        return{
            icons: {
                "dice": mdiDiceMultiple
            }
        }
    }
}
</script>

<style scoped>
    .text-left {
        text-align: left;
    }
</style>
<template>
<v-card max-width="300px" class="pa-1" @mouseover="hover = true" @mouseleave="hover =false" :class="{active: hover}">
    <v-img class="white--text align-end" height="250px" src="@/assets/monster.jpeg">
        <v-card-title>{{this.monster.name}} ({{this.monster.type}}) </v-card-title>
    </v-img>
    <v-card-actions>
        <v-container>
            <v-row>
                <v-col>
                    <div>
                        <v-icon large color="blue">{{this.icons.shield}}</v-icon>
                    </div>
                    <div>{{this.monster.armor_class}}</div>
                </v-col>
                <v-col>
                    <div>
                        <v-icon x-large color="green">{{this.icons.sword}}</v-icon>
                    </div>
                    <MonsterActionsPopup :actions="monster.actions" />
                </v-col>
                <v-col>
                    <div>
                        <v-icon large color="red">{{this.icons.heart}}</v-icon>
                    </div>
                    <div>{{this.monster.currentHitPoints}}</div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-icon small color="orange">{{this.icons.strength}}</v-icon>
                    {{this.monster.strength}}
                </v-col>
                <v-col>
                    <v-icon small color="orange">{{this.icons.dexterity}}</v-icon>
                    {{this.monster.dexterity}}
                </v-col>
                <v-col>
                    <v-icon small color="orange">{{this.icons.constitution}}</v-icon>
                    {{this.monster.constitution}}
                </v-col>
                <v-col>
                    <v-icon small color="orange">{{this.icons.intelligence}}</v-icon>
                    {{this.monster.intelligence}}
                </v-col>
                <v-col>
                    <v-icon small color="orange">{{this.icons.wisdom}}</v-icon>
                    {{this.monster.wisdom}}
                </v-col>
                <v-col>
                    <v-icon small color="orange">{{this.icons.charisma}}</v-icon>
                    {{this.monster.charisma}}
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <MonsterInfoPopup :languages="monster.languages" :vulnerabilities="monster.damage_vulnerabilities" :resistances="monster.damage_resistances" :immunities="monster.damage_immunities" :aligment="monster.aligment" :name="monster.name" :race="monster.type" />
                </v-col>
                <v-col>
                    <MonsterStatsPopup @statChanges="updateStats($event)" :currentHitPoints="monster.currentHitPoints" :armor_class="monster.armor_class" :strength="monster.strength" :dexterity="monster.dexterity" :constitution="monster.constitution" :intelligence="monster.intelligence" :wisdom="monster.wisdom" :charisma="monster.charisma" />
                </v-col>
            </v-row>
        </v-container>
    </v-card-actions>
</v-card>
</template>

<script>
import {
    mdiSword,
    mdiShield,
    mdiHeart,
    mdiArmFlex,
    mdiBrain,
    mdiHandHeart,
    mdiScript,
    mdiAccount,
    mdiHandRight,
} from "@mdi/js";
import MonsterInfoPopup from "../components/MonsterInfoPopup";
import MonsterStatsPopup from "../components/MonsterStatsPopup";
import MonsterActionsPopup from "../components/MonsterActionsPopup";

export default {
    name: "MonsterCard",
    components: {
        MonsterInfoPopup,
        MonsterStatsPopup,
        MonsterActionsPopup,
    },
    props: {
        monster: Object
    },
    data() {
        return {
            hover: false,
            icons: {
                sword: mdiSword,
                shield: mdiShield,
                heart: mdiHeart,
                strength: mdiArmFlex,
                intelligence: mdiBrain,
                charisma: mdiHandHeart,
                wisdom: mdiScript,
                constitution: mdiAccount,
                dexterity: mdiHandRight,
            }
        };
    },
    methods: {
        updateStats(input) {
            this.monster.currentHitPoints = input.currentHitPoints;
            this.monster.armor_class = input.armor_class;
            this.monster.strength = input.strength;
            this.monster.dexterity = input.dexterity;
            this.monster.constitution = input.constitution;
            this.monster.intelligence = input.intelligence;
            this.monster.wisdom = input.wisdom;
            this.monster.charisma = input.charisma;
            this.$emit('save')
        },
    },
};
</script>

<style scoped>
.active {
    transform: translateY(-5pt) scale(1.05) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px var(--box-shadow-color);
}
</style>

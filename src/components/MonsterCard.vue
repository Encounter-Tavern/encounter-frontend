<template>
    <v-card max-width="300px" class="pa-1" @mouseover="hover = true" @mouseleave="hover =false" :class="{active: hover}">
        <v-img
        class="white--text align-end"
        height="250px"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-fuNOp4TfVvU%2FTr1fc7OFMsI%2FAAAAAAAAAZc%2FOHSYSyx5DCY%2Fs1600%2FTANK%252BGoblin%252BTuf%252BGit.jpg&f=1&nofb=1"
        >
      <v-card-title>{{this.monster.name}}, the {{this.monster.type}}</v-card-title>
    </v-img>
    <v-card-actions>
        <v-container>
            <v-row>
                <v-col>
                    <div><v-icon large color="blue">{{this.icons.shield}}</v-icon></div>
                    <div>{{this.monster.armorClass}}</div>
                </v-col>
                <v-col>
                    <div><v-icon x-large color="green">{{this.icons.sword}}</v-icon></div>
                    <v-btn text depressed>
                        <div>Attack</div>
                    </v-btn>
                </v-col>
                <v-col>
                    <div><v-icon large color="red">{{this.icons.heart}}</v-icon></div>
                    <div>{{this.monster.hitPoints}}</div>
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
                    <MonsterInfoPopup/>
                </v-col>
                <v-col>
                    <MonsterStatsPopup @statChanges="updateStats($event)"/>
                </v-col>
            </v-row>
        </v-container>
    </v-card-actions>
    </v-card>
</template>


<script>
import { mdiHome, mdiSword, mdiShield, mdiHeart, mdiArmFlex, mdiBrain, mdiHandHeart, mdiScript, mdiAccount, mdiHandRight } from '@mdi/js';
import MonsterInfoPopup from '../components/MonsterInfoPopup';
import MonsterStatsPopup from '../components/MonsterStatsPopup';

export default {
    name: 'MonsterCard',
    components: {
        MonsterInfoPopup,
        MonsterStatsPopup
    },
    data() {
        return {
            "hover": false,
            icons: {
                "home": mdiHome,
                "sword": mdiSword,
                "shield": mdiShield,
                "heart": mdiHeart,
                "strength": mdiArmFlex,
                "intelligence": mdiBrain,
                "charisma": mdiHandHeart,
                "wisdom": mdiScript,
                "constitution": mdiAccount,
                "dexterity": mdiHandRight
            },
            monster: {
                "name": "Boblin",
                "type": "Goblin",
                "hitPoints": 12,
                "armorClass": 15,
                "strength": 12,
                "dexterity": 16,
                "constitution": 14,
                "intelligence": 8,
                "wisdom": 10,
                "charisma": 5 
            }
        }
    },
    methods: {
        updateStats(input){
            this.monster.hitPoints = input.hitPoints;
            this.monster.armorClass = input.armorClass;
            this.monster.strength = input.strength;
            this.monster.dexterity = input.dexterity;
            this.monster.constitution = input.constitution;
            this.monster.intelligence = input.intelligence;
            this.monster.wisdom = input.wisdom;
            this.monster.charisma = input.charisma;
        }
    }
}
</script>

<style scoped>
    .active {
        transform: translateY(-5px) scale(1.005) translateZ(0);
        box-shadow: 0 24px 36px rgba(0,0,0,0.11),
        0 24px 46px var(--box-shadow-color);
    }
</style>
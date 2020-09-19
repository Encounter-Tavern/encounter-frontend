<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-small depressed v-bind="attrs" v-on="on">Change Stats</v-btn>
    </template>

    <v-card>
      <v-card-title>Change Stats</v-card-title>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.heart"
              label="Hit Points"
              v-model="hitPoints"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.shield"
              label="Armor Class"
              v-model="armorClass"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.strength"
              label="Strength"
              v-model="strength"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.dexterity"
              label="Dexterity"
              v-model="dexterity"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.constitution"
              label="Constitution"
              v-model="constitution"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.intelligence"
              label="Intelligence"
              v-model="intelligence"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.wisdom"
              label="Wisdom"
              v-model="wisdom"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              :prepend-icon="icons.charisma"
              label="Charisma"
              v-model="charisma"
              type="number"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="dialog = false">Close Without Saving</v-btn>
        <v-btn color="success" text @click="emitChanges()">Save and Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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

export default {
  name: "MonsterStatsPopup",
  props: {
    hitPoints: {
      type: Number,
      required: true,
    },
    armorClass: {
      type: Number,
      required: true,
    },
    strength: {
      type: Number,
      required: true,
    },
    dexterity: {
      type: Number,
      required: true,
    },
    constitution: {
      type: Number,
      required: true,
    },
    intelligence: {
      type: Number,
      required: true,
    },
    wisdom: {
      type: Number,
      required: true,
    },
    charisma: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
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
      },
    };
  },
  methods: {
    emitChanges() {
      this.dialog = false;
      this.$emit("statChanges", {
        hitPoints: this.hitPoints,
        armorClass: this.armorClass,
        strength: this.strength,
        dexterity: this.dexterity,
        constitution: this.constitution,
        intelligence: this.intelligence,
        wisdom: this.wisdom,
        charisma: this.wisdom,
      });
    },
  },
};
</script>
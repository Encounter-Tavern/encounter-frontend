<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text depressed v-bind="attrs" v-on="on">Actions</v-btn>
    </template>

    <v-card>
      <v-card-title>Actions</v-card-title>
      <v-container>
        <div v-for="action in actions" :key="action.name">
          <v-row>
            <v-col>
              <MonsterAction
                :name="action.name"
                :description="action.desc"
                :damage="action.damage"
                :attackBonus="action.attack_bonus"
              />
              <v-btn>Execute Action</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-divider></v-divider>
          </v-row>
        </div>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import MonsterAction from "../components/MonsterAction";

export default {
  name: "MonsterActionsPopup",
  components: {
    MonsterAction,
  },
  data() {
    return {
      dialog: false,
      actions: [
        {
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
          attack_bonus: 11,
          damage: [
            {
              damage_type: {
                index: "piercing",
                name: "Piercing",
                url: "/api/damage-types/piercing",
              },
              damage_dice: "2d10+6",
            },
            {
              damage_type: {
                index: "acid",
                name: "Acid",
                url: "/api/damage-types/acid",
              },
              damage_dice: "1d8",
            },
          ],
        },
      ],
    };
  },
};
</script>
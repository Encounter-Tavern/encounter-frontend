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
  props: {
    actions: Array
  },
  data() {
    return {
      dialog: false
    };
  },
};
</script>
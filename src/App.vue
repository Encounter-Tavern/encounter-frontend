<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app clipped v-model="drawer">
        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/encounters" link>
            <v-list-item-action>
              <v-icon>mdi-dice-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Encounters</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/generator" link>
            <v-list-item-action>
              <v-icon>mdi-calculator</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Generator</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app clipped-left max-height="7%">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Encounter-Tavern</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <v-spacer />
        <v-btn href="https://github.com/Encounter-Tavern" target="_blank" text>
          <span class="mr-2">Take a look at our GitHub</span>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

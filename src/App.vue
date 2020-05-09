<template>
  <v-app>
    <v-app-bar
      app
      color="#111E6C"
      primary
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />


        <span>DistributedComputingCA2</span>

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/markodonoghue14"
        target=""
        text
      >
        <span class="mr-2">Github Account with Server and Clientside Code available here</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
      
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
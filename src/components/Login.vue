 
<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#111E6C"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="isValid" color="blue">
                  <v-text-field
                              v-model="input.username"
            :rules="[rules.required, rules.min]"
            label="Username"
            
                  ></v-text-field>

                  <v-text-field
            v-model="input.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            counter
            @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="validateLogin" color="primary" :disabled="!isValid">Login</v-btn>
                 <br>
              </v-card-actions>
            </v-card>
                                <span align="center">
     <b> {{ apiResponse }} </b>
  </span>
  <br>
          </v-col>
        </v-row>
      </v-container>

      <p class="copyright" align="center">© Mark O'Donoghue</p>
      
    </v-content>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        input: {},
        show1: false,
        password: '',
        isValid: true,
        apiResponse: null,
        rules: {
          required: value => !!value || 'Required.',
        },
      }
    },
    methods: {
          
            async validateLogin() {
              let apiResponse = '';
                await fetch("/user/login", {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({
                  username: this.input.username, password: this.input.password
                })
              }).then(res => res.text())
              .then(text => apiResponse = text)
              this.apiResponse = apiResponse;
              if (apiResponse == "Login was successful") {
                this.$router.push('home')
              }
    }
    }
  }
</script>
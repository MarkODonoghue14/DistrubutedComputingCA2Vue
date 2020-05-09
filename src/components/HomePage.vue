<template>
    <div class="HomePage">
        <h1> Home  Page </h1>
        <h2> Welcome to My Application </h2>
                 <div class="my-2">
            <v-btn v-on:click="logOff" small color="primary" dark>Log Off</v-btn>


          </div>
                                         <span align="center">
     <b> {{ apiResponse }} </b>
  </span>
  <br>
    </div>

</template>

<script>
export default {
    data(){
        return {
        name: 'HomePage',
        apiResponse: null,
        }
    },
    methods: {
          
            async logOff() {
                
              let apiResponse = '';
                await fetch("/user/logoff", {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({
                  username: "Markslaw"
                })
              }).then(res => res.text())
              .then(text => apiResponse = text)
              this.apiResponse = apiResponse;
              console.log(apiResponse);
                this.$router.push('/')
              
    }
    }
    }
</script>
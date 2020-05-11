module.exports = {
  "transpileDependencies": [
    "vuetify"

    
  ],

      devServer: { port: 9002, proxy: "https://localhost:9001/api" }

}
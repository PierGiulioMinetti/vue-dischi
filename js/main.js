var app = new Vue({
    el: '#app',
    data: {
      album : []
    },
    /**
     * 
     */
    created(){
      const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function (result) {
          self.album = result.data.response
        console.log(result);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },
    /**
     * 
     */
    methods: {

    }
  })
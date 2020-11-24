var app = new Vue({
    el: '#app',
    data: {
      album : [],
      actualGenre : 'all',
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
    }, //-->end created
    /**
     * 
     */
    methods: {
      refresh(){
        const self = this;

      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function (result) {
        let cdsList = result.data.response;
        
        if(self.actualGenre !== 'all') {
          cdsList = cdsList.filter( cd => cd.genre.toLowerCase() === self.actualGenre)
        }  

        self.album = cdsList;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      }
    } //--> end methods

  }) //--> end vue js
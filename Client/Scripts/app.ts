(function () {
   function Start() {
      console.log('App Started!');

      $("a.delete").on("click",function(e){

         if(!confirm("Are you sure?")){

            e.preventDefault();
            location.href='/movie-list'
         }
      })

      
      
     
   }

   window.addEventListener('load', Start);
})();



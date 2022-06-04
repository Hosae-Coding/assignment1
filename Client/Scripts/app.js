/* app.js, hongseok kim, 301213545, Jun.04.2022 */
(function () {
   function Start() {
      console.log('App Started!');
      let XHR = new XMLHttpRequest();
      XHR.open('GET', '../data/data.json');
      XHR.send();
      XHR.addEventListener('readystatechange', function () {
         if (XHR.readyState == 4 && XHR.status == 200) {
            console.log('JSON Data:');
            console.log('===========');
            console.log(XHR.responseText);
         }
      });
   }
   window.addEventListener('load', Start);
})();

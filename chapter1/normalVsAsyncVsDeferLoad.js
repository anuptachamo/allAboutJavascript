s/*
* Normal vs Async vs Defer Load
console.log(fullname)
console.log(fullname)
    - When it comes to loading external javaScript files on your website, should you use async or defer? BOth methods have their own advantages and disadvantages, and there is no definitive answer. Ultimately, it depends on your specific needs
 */

/* 
* Normal -- parsing sakera matra fetching hunxa ani excuting hunxa ani last ma parsing hunxa feri
    Normal: <script src = "script.js>" </script>
*/

/*
* Async   -- parsing sang sangaii fetching panii hundai garxa anii excuting hunxa ani last ma parsing   hunxa feri
    Async: <script async = "script.js>" </script>
*/

/*
* Defer  -- parsing sang sangaii fetching panii hundai garxa anii excuting hunxa (first maii sabaii parsing garii sakeko hunxa)
    defer: <script defer = "script.js>" </script>
 */
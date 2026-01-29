
 const {test,expect} = require("@playwright/test");

 const city = {
     city : "southampton",
     town : "eastleigh",
     country : "UK",
     location : function(){
         return this.city + ", " + this.town + ", " + this.country;
         console.log(this.location());

        }
 };

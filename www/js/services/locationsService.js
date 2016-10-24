angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
  name : "Times Plaza Underground Parking <a class='lnkReserve' href='www.google.com' target='_blank' data-value='Times Plaza Underground Parking'>Reserve Now!</a>",
  lat : 14.582418,
  lng : 120.984032

},
{
  name : "Sulit Parking Space",
  lat : 14.604573,
  lng : 120.970955

},
{
  name : "Pay Parking",
  lat : 14.600505 ,
  lng : 120.988548

},
{
  name : "Prestige Parking Inc",
  lat : 14.613779,
  lng : 121.003815
},
{
  name : "Harrison Plaza Parking Lot",
  lat : 14.562374,
  lng : 120.989838

},
{
  name : "DSG Pay Parking",
  lat : 14.611030,
  lng : 120.996239

},
{

 name : "Benilde Sandejas Parking Area",
  lat : 14.564168,
  lng : 120.998093

},
{

 name : "UST Carpark",
  lat : 14.610250,
  lng : 120.990410

 },
{

 name : "Manila Traffic And Parking Bureau",
  lat : 14.590037,
  lng : 120.981377
 },
{

 name : "Manila City Hall",
  lat : 14.589771,
  lng : 120.981453

},
{

 name : "Manila Parking Management Co Ltd",
  lat : 14.598480,
  lng : 120.972694

},
{

 name : "Oregano's Wood-Fired Pizza",
  lat : -122.114647,
  lng : 37.401726


}


  ];

  return locationsObj;

}]);

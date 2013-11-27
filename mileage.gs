function mileage(a, b, roundtrip) {
  
  // Create a direction finder and get directions between a and b.
  var directionFinder = Maps.newDirectionFinder();
  directionFinder.setOrigin(a);
  directionFinder.setDestination(b);
  var distance = directionFinder.getDirections();
  
  if (distance.routes.length == 0) {
    throw 'Random Error.';
  }
  
  // Pull distance and convert metres to miles.
  var miles = (distance.routes[0].legs[0].distance.value) / 1600;
  
  //Double if it's a return trip.
  if(roundtrip)
    miles *= 2;
  
  return miles;
}

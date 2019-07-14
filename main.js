var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  console.log(name + "Thank you So much you being invited")
}

claimReservation();
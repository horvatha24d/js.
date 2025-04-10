var quantity = prompt("Add meg a jegyek db számát");
var type = prompt("Add meg a típust");

var types = {
  student: 300,
  adult: 350,
  retired: 280
};

var price = types[type];

if(price === undefined) {
    alert('Érvénytelen típus');
} else {
    var discount = quantity > 10 ? 0.9 : 1;
    var total = quantity * price * discount;
    alert(total);
}


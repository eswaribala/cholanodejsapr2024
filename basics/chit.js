function showChits(name) {
    var payments = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        payments[_i - 1] = arguments[_i];
    }
    console.log(name + "\t");
    payments.forEach(function (payment) {
        console.log(payment + "\t");
    });
    console.log("\n");
}
showChits('user1');
showChits('user2', 5000, 10000);
showChits('user3', 5000, 10000, 200000, 600000);
showChits('user4', 5000, 10000, 15000);

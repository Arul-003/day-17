let x = false;
let y = new Boolean(false);
document.getElementById("demo0").innerHTML = typeof x + "<br>" + typeof y;


let z = 10 / "Hello";
document.getElementById("demo1").innerHTML = Boolean(z);

document.getElementById("demo2").innerHTML =
(5 + null) + "<br>"  +
("5" + null) + "<br>" +
("5" + 2) + "<br>" +
("5" - 2) + "<br>" +
("5" * "2") + "<br>" +
("5" / "2") + "<br>"

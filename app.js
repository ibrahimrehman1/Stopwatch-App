document.querySelector("#start").addEventListener("click", start);
document.querySelector("#stop").addEventListener("click", stop);
document.querySelector("#reset").addEventListener("click", reset);

x = document.getElementById("spn-1");
y = document.getElementById("spn-2");
z = document.getElementById("spn-3");
var id;
function start() {
  id = setInterval(increase, 1000);
}

function increase() {
  var temp = Number(z.innerHTML);
  if (temp < 60) {
    temp += 1;
    if (temp < 10) {
      z.innerHTML = "0" + temp;
    } else {
      z.innerHTML = temp;
    }
  } else {
    z.innerHTML = "00";
    var temp2 = Number(y.innerHTML);
    if (temp2 < 60) {
      temp2 += 1;
      if (temp2 < 10) {
        y.innerHTML = "0" + temp2;
      } else {
        y.innerHTML = temp2;
      }
    } else {
      y.innerHTML = "00";
      var temp3 = Number(x.innerHTML);
      if (temp3 < 60) {
        temp3 += 1;
        if (temp3 < 10) {
          x.innerHTML = "0" + temp3;
        } else {
          x.innerHTML = temp3;
        }
      } else {
        x.innerHTML = "00";
        y.innerHTML = "00";
        z.innerHTML = "00";
      }
    }
  }
}

function reset() {
  x.innerHTML = "00";
  y.innerHTML = "00";
  z.innerHTML = "00";
  clearInterval(id);
}

function stop() {
  clearInterval(id);
}

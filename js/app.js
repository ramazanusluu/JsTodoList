// Bir "x" kapat butonu boluşturun ve bunu her liste ögesine ekleyin
let myNodeList = document.getElementsByTagName("LI");

for (let index = 0; index < myNodeList.length; index++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); // x Butonunu oluşturmak
  span.className = "close";
  span.appendChild(txt);
  myNodeList[index].appendChild(span);
}
// Geçerli olan iste ögesini gizlemek için X butonuna tıklamak
let close = document.getElementsByClassName("close");

for (let index = 0; index < close.length; index++) {
  close[index].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

//Bir liste ögesine tıklandığında işaretli sembol eklemek
// let list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toogle("checked");
//     }
//   },
//   false
// );
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

const alertDOM = document.querySelector("#alert");

const ALERT = (title, message, color) => `
<div class="alert alert-${color} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
`;

//Ekle Butonuna tıklanıldığında Yeni liste elemanı ekleme
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alertDOM.innerHTML = ALERT(
      "ERROR",
      "Hatalı Eksik Bilgi Girdiniz",
      "danger"
    );
  } else {
    document.getElementById("myUL").appendChild(li);
    alertDOM.innerHTML = ALERT("SUCCESS", "Kayıt Başarılı", "success");
    localStorage.setItem("task", inputValue);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.localStorage.getItem("task")

  for (let index = 0; index < close.length; index++) {
    close[index].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

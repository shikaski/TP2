let idselected;
let reBtn = document.getElementById("reBtn");
let resena = document.getElementById("inputid");
let resenid = document.getElementById("resenid");
let resentit = document.getElementById("resenti");
let resen = document.getElementById("resena");
let herosen = document.getElementById("heroresena_selected");

const reurl = "https://jsonplaceholder.typicode.com/posts";

const getResenaId = (id) => {
  herosen.classList.add("hidden");
  fetch(`${reurl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      idselected = data;
      console.log(idselected);
      resenid.innerText = idselected.id;
      resentit.innerText = idselected.title;
      resen.innerText = idselected.body;
    })
    .then(() => {
      herosen.classList.remove("hidden");
    });
};
reBtn.addEventListener("click", () => {
  getResenaId(resena.value);
});

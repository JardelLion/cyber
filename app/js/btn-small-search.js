const btnSmallSearch = document.querySelector("#btn-small-search");
const btnSmallSearchForm = document.querySelector("#btn-small-search-form");
let body = document.querySelector("body");

// Evento de clique no botão para alternar a classe e exibir o formulário
btnSmallSearch.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevenir o clique no body de ser acionado
  body.classList.toggle("btn-small-search");
  btnSmallSearchForm.style.display = "inline-block";
  btnSmallSearch.style.display = 'none';
});

// Evento de clique no body
document.body.addEventListener("click", function () {
  if (body.classList.contains("btn-small-search")) {
    body.classList.remove("btn-small-search");
     btnSmallSearchForm.style.display = "none";
      btnSmallSearch.style.display = "inline-block";
  }
});

// Prevenir o evento de clique no body quando clicar dentro do formulário
btnSmallSearchForm.addEventListener("click", function (event) {
  event.stopPropagation();
});

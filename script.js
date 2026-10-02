const modal = document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");


function openAccount() {

  modalTitle.textContent =
    "Abrir sua conta";

  modalText.textContent =
    "Esta é uma demonstração de um banco virtual. Nenhuma operação financeira real será realizada.";

  modal.classList.add("show");
}


function openLogin() {

  modalTitle.textContent =
    "Entrar no BANCO CODE";

  modalText.textContent =
    "Área de acesso da conta de demonstração.";

  modal.classList.add("show");
}


function closeModal() {

  modal.classList.remove("show");

}


function demoSuccess() {

  closeModal();

  showToast("Fazendo Login no Banco Code");

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Password:", password);

  // Nao existe preventDefault()
  // Portanto, o formulário continua normalmente.
}


function showDemo(event) {

  if (event) {
    event.preventDefault();
  }

  showToast(
    "Função disponível na versão de demonstração."
  );

}


function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2800);

}


function scrollToSection(id) {

  document
    .getElementById(id)
    .scrollIntoView({
      behavior: "smooth"
    });

}


modal.addEventListener("click", function(event) {

  if (event.target === modal) {
    closeModal();
  }

});


document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closeModal();
  }

});
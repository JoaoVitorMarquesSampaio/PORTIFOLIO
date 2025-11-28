// Modo claro/escuro
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Máscaras de input
  const masks = {
    telefone: v => v.replace(/\D/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
    cpf: v => v.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
    cep: v => v.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2"),
    data: v => v.replace(/\D/g, "").replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
  };

  Object.keys(masks).forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("input", e => {
        e.target.value = masks[id](e.target.value);
      });
    }
  });

  // Validação formulário
  const form = document.getElementById("contatoForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
};
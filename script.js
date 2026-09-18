// Concept 4: The Clean Editorial Light Mode Scripts

function triggerToast(message) {
  let toast = document.getElementById("editorial-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "editorial-toast";
    toast.className = "editorial-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function copyAuthorEmail() {
  const email = "powyieyuaw@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    triggerToast("Copied powyieyuaw@gmail.com to clipboard");
  }).catch(() => {
    triggerToast("Email: powyieyuaw@gmail.com");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copy-email-editorial");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyAuthorEmail);
  }

  const copyFooter = document.getElementById("copy-email-footer-ed");
  if (copyFooter) {
    copyFooter.addEventListener("click", copyAuthorEmail);
  }
});

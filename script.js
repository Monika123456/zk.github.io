document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-registracia");

  if (btn) {
    btn.addEventListener("click", () => {
      // tu vlož odkaz na svoj Google Formulár
      const formUrl = "https://forms.gle/TVOJ-ODKAZ-TU";
      window.open(formUrl, "_blank");
    });
  }
});

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fileInput = document.getElementById("fileInput");
  const layanan = document.getElementById("layananSelect").value;
  const dokumenPreview = document.getElementById("dokumenPreview");

  const file = fileInput.files[0];
  if (!file) {
    alert("Silakan unggah file terlebih dahulu.");
    return;
  }

  // Tampilkan dokumen ke "mesin"
  const reader = new FileReader();
  reader.onload = function(e) {
    dokumenPreview.style.backgroundImage = `url(${e.target.result})`;

    // Simulasi masuk ke mesin
    if (layanan === "print") {
      document.getElementById("mesinPrint").style.border = "3px solid green";
      document.getElementById("mesinFotokopi").style.border = "none";
    } else if (layanan === "fotokopi") {
      document.getElementById("mesinFotokopi").style.border = "3px solid blue";
      document.getElementById("mesinPrint").style.border = "none";
    } else {
      document.getElementById("mesinPrint").style.border = "3px dashed orange";
      document.getElementById("mesinFotokopi").style.border = "none";
    }
  };
  reader.readAsDataURL(file);
});

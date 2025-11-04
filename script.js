const form = document.getElementById("formNilai");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const matkul = document.getElementById("matkul").value;
  const nilai = parseFloat(document.getElementById("nilai").value);

  db.collection("nilai_mahasiswa").add({
    nama: nama,
    nim: nim,
    matkul: matkul,
    nilai: nilai,
    status: nilai >= 60 ? "Lulus" : "Tidak Lulus",
  })
  .then(() => {
    alert("Data berhasil disimpan ✅");
    form.reset();
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("Gagal menyimpan data ❌");
  });
});

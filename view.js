db.collection("nilai_mahasiswa").orderBy("nama", "asc").onSnapshot((snapshot) => {
    let table = "";
    let no = 1;

    snapshot.forEach((doc) => {
        const data = doc.data();
        const status = data.nilai >= 60 ? "Lulus" : "Tidak Lulus";

        table += `
        <tr>
            <td>${no++}</td>
            <td>${data.nama}</td>
            <td>${data.nim}</td>
            <td>${data.matkul}</td>
            <td>${data.nilai}</td>
            <td class="${status === "Lulus" ? "text-success fw-bold" : "text-danger fw-bold"}">
                ${status}
            </td>
        </tr>`;
    });

    document.getElementById("dataTable").innerHTML = table;
});

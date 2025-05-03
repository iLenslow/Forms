function showForm() {
    const selection = document.getElementById("entrySelect").value;
    const formContainer = document.getElementById("formContainer");
    const formFields = document.getElementById("formFields");
    const formTitle = document.getElementById("formTitle");

    formFields.innerHTML = ''; // Felder leeren
    formContainer.style.display = selection ? 'block' : 'none';

    if (selection === "Zollausgang") {
        formTitle.textContent = "ATC-Nummern eingeben:";
        formFields.innerHTML = `
            <label>ATC 1:<input type="text" name="ATC"></label>
            <label>ATC 2:<input type="text" name="ATC2"></label>
            <label>ATC 3:<input type="text" name="ATC3"></label>
            <label>ATC 4:<input type="text" name="ATC4"></label>
            <label>ATC 5:<input type="text" name="ATC5"></label>
            <label>ATC 6:<input type="text" name="ATC6"></label>
            <label>ATC 7:<input type="text" name="ATC7"></label>
            <label>ATC 8:<input type="text" name="ATC8"></label>
            <label>ATC 9:<input type="text" name="ATC9"></label>
        `;
    } else if (selection === "Zolleingang") {
        formTitle.textContent = "Tournummer eingeben:";
        formFields.innerHTML = `
            <label>Tournummer:<input type="text" name="TNR"></label>
        `;
    } else if (selection === "Kundenperformance") {
        formTitle.textContent = "Daten eingeben:";
        formFields.innerHTML = `
        <label>Datum Von:<input type="date" name="DATUM_VON"></label>
        <label>Datum Bis:<input type="date" name="DATUM_BIS"></label>
        <label>KundenID:<input type="text" name="KDID"></label>
        
        `;
    }

}
document.getElementById("entryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const selection = document.getElementById("entrySelect").value;
    const formData = new FormData(event.target);
    const params = [];

    formData.forEach((value, key) => {
        const paramName = key.replace(/\s+/g, ''); // Leerzeichen im Namen entfernen
        const paramValue = value.trim() === "" ? "blank" : value.trim();
        params.push(`${encodeURIComponent(paramName)}=${encodeURIComponent(paramValue)}`);
    });

    const baseUrl = "http://192.168.101.110/dw/trigger";
    const finalUrl = `${baseUrl}/${selection}?${params.join("&")}`;

    console.log("?? Generierte URL:", finalUrl); // Optional: zum Debuggen
    window.open(finalUrl);
});
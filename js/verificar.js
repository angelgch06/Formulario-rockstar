// Rellenar días y años
const diaSelect = document.getElementById('dia');
const anioSelect = document.getElementById('anio');
for (let i = 1; i <= 31; i++) {
    diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
}
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    anioSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Validar edad
document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const dia = parseInt(diaSelect.value);
    const mes = parseInt(document.getElementById('mes').value) - 1;
    const anio = parseInt(anioSelect.value);

    if (!dia || !mes || !anio) return;

    const nacimiento = new Date(anio, mes, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const cumpleEsteAnio = new Date(hoy.getFullYear(), mes, dia);
    if (hoy < cumpleEsteAnio) edad--;

    const esMayor = edad >= 18;

    document.getElementById('error').style.display = esMayor ? 'none' : 'block';
    if (esMayor) alert('✅ Edad verificada correctamente.');
});
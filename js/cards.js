document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".producto-card");

    cards.forEach(card => {
        const btn = card.querySelector(".producto-btn");

        btn.addEventListener("click", function () {
            // Resetear todos los botones
            document.querySelectorAll(".producto-btn").forEach(b => {
                b.classList.remove("contratado");
                b.textContent = "CONTRATAR";
            });

            // Activar solo el botón de esta card
            this.classList.add("contratado");
            this.textContent = "CONTRATADO";
        });
    });
});





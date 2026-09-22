const btnCotizar = document.getElementById("btnCotizar");
const resultado = document.getElementById("resultado");

function cotizarPedido() {
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const costoEnvio = parseFloat(document.getElementById("envio").value);

    if (!precio || !cantidad || precio <= 0 || cantidad <= 0) {
        resultado.innerHTML = "Ingrese un precio y una cantidad mayores que cero.";
        return;
    }

    const subtotal = precio * cantidad;
    const total = subtotal + costoEnvio;

    resultado.innerHTML = `
        Subtotal: S/ ${subtotal.toFixed(2)}<br>
        Costo de envío: S/ ${costoEnvio.toFixed(2)}<br>
        <strong>Total a pagar: S/ ${total.toFixed(2)}</strong>
    `;
}

btnCotizar.addEventListener("click", cotizarPedido);

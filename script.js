function comprar(producto, precio) {
    const numero = "51924890953"; // Numero de celular
    const mensaje = `Hola, quiero comprar el producto: ${producto} por S/ ${precio}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

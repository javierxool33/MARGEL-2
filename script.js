function enviarwhat() {
    const numero = "5539583855";
    const mensaje = "Me interesa el servicio";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch(genero) {
        case 'drama':
            if (edad < 13) {
                recomendacion.textContent = "Casablanca";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "The Shawshank Redemption";
                } else {
                    recomendacion.textContent = "Taxi Driver";
                }
            }
            break;
     
    }
}

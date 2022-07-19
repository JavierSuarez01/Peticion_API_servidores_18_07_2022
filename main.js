addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method: "GET"
    };
    let peticion = await fetch("api.php", config);
    let texto = await peticion.text();
    document.querySelector("#mostrar").innerHTML = texto;
})


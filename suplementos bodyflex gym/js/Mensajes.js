function Saludar(){
    alert("Aprovecha nuestras Ofertas");
}



function Crear(){

    let carruselm=document.getElementById('Aminoacidos');

    carruselm.innerHTML=`

    <div id="carouselExample2" class="carousel slide m-4">
    <div class="carousel-inner container">
      <div class="carousel-item active">
        <img src="imgg/Suplementos completos.png" class="d-block w-60"  alt="...">
      </div>
      <div class="carousel-item">
        <img src="imgg/C4 completo.png" class="d-block w-60" alt="...">
      </div>
      <div class="carousel-item">
        <img src="imgg/costal.png" class="d-block w-60" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    `;
}
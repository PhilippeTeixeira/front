<template>
  <div class="container bg-dark">
  <footer class="pt-4">
    <div class="row d-flex justify-content-center">
      <div class="col-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>Abonnez-vous à notre newsletter</h5>
          <p>Recevez chaque mois nos actus jeux vidéos.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Adresse Email</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Adresse Email">
            <button class="btn btn-outline-light" type="button">S'abonner</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-around py-2 my-0 border-top">
      <p>©2023 Gamesoft, Tous droits réservés.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-light" href="#"><i class="bi bi-twitter"><use xlink:href="#twitter"></use></i></a></li>
        <li class="ms-3"><a class="link-light" href="#"><i class="bi bi-instagram"><use xlink:href="#instagram"></use></i></a></li>
        <li class="ms-3"><a class="link-light" href="#"><i class="bi bi-facebook"><use xlink:href="#facebook"></use></i></a></li>
      </ul>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

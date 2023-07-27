<template>
  <div class="background-image m-0 p-0">
    <HeaderComponent />
    <div class="container">
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <h2>LES DERNIÈRES NEWS !</h2>
        <div class="col-10">
          <div class="card bg-dark text-white p-2">
            <h5 class="card-title">Demonio : Le jeu vidéo RPG médiéval fantastique qui repousse les limites</h5>
            <img class="card-img-top p-4" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
            <div class="card-body">
              <p class="card-text">
                Dans le monde dynamique et en constante évolution des jeux vidéo, les joueurs avides d'aventure et de
                défis
                ont toujours soif de nouveaux titres innovants. Leur attente est sur le point d'être récompensée avec
                l'annonce
                du jeu vidéo très attendu "Demonio". Développé par une équipe de talents passionnés, ce RPG (jeu de rôle)
                immersif transporte les joueurs dans un univers médiéval fantastique riche en démons, en magie et en
                mystères.
                Avec la possibilité de choisir parmi différentes classes et d'explorer jusqu'à 150 niveaux captivants,
                "Demonio"
                s'apprête à offrir une expérience de jeu inoubliable.</p>

              <div class="accordion accordion-flush" id="accordionExample">
                <div class="accordion-item bg-transparent">
                  <div id="collapseOne" class="accordion-collapse collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body text-white p-0">
                      <h6 class="text-primary">Une immersion totale dans un univers médiéval fantastique :</h6>

                      <p>"Demonio" plonge les joueurs au cœur d'un univers médiéval fantastique spectaculaire, où la magie
                        et les créatures diaboliques se côtoient. Que vous soyez un fan de chevalerie, de sorts puissants
                        ou de quêtes épiques, ce jeu a tout pour vous séduire. Les graphismes à couper le souffle, les
                        paysages enchanteurs et les détails minutieux transportent les joueurs dans un monde digne des
                        plus grandes sagas fantastiques.</p>

                      <h6 class="text-primary">Des classes variées et des possibilités infinies :</h6>

                      <p>"Demonio" offre une variété de classes, permettant aux joueurs de personnaliser leur expérience
                        de jeu. Que vous souhaitiez incarner un guerrier intrépide, un mage mystique ou un chasseur agile,
                        chaque classe offre un style de jeu unique et des compétences spéciales qui vous permettront de
                        vous frayer un chemin à travers les défis qui se dresseront sur votre chemin. L'expérience de jeu
                        est entièrement personnalisable, permettant aux joueurs de développer leurs personnages selon
                        leurs préférences et leur style de jeu.</p>

                      <h6 class="text-primary">150 niveaux de défis épiques :</h6>

                      <p>"Demonio" promet une longévité incroyable avec ses 150 niveaux captivants. Chaque niveau est
                        soigneusement conçu pour offrir des défis uniques, des énigmes complexes et des combats intenses.
                        Les joueurs devront affronter une multitude de démons vicieux, maîtriser des sorts puissants et
                        coopérer avec d'autres joueurs pour surmonter des boss redoutables. Avec chaque niveau franchi,
                        les joueurs seront récompensés par des équipements plus puissants et des compétences améliorées,
                        les incitant à continuer leur quête épique.</p>

                      <h6 class="text-primary">Un mode multijoueur dynamique :</h6>

                      <p>"Demonio" ne se limite pas à une expérience solo. Les joueurs auront également la possibilité de
                        se connecter en ligne et de participer à des batailles épiques en mode multijoueur. Que ce soit
                        pour coopérer avec d'autres aventuriers pour affronter des ennemis redoutables ou pour rivaliser
                        entre eux lors de compétitions intenses, le mode multijoueur offre une dimension sociale
                        passionnante qui prolonge la durée de vie du jeu et renforce la communauté des joueurs.</p>

                      <p>"Demonio" promet d'être un incontournable pour les amateurs de jeux vidéo de style RPG. Avec son
                        univers médiéval fantastique riche, ses classes variées, ses 150 niveaux captivants et son mode
                        multijoueur dynamique, le jeu offre une expérience immersive et passionnante. Les joueurs devront
                        affronter des défis redoutables, maîtriser la magie et explorer des paysages à couper le souffle.
                        Préparez-vous à embarquer dans une aventure épique et à découvrir les mystères de "Demonio"
                        lorsque le jeu sortira dans les mois à venir.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end"><a href="#" id="learnmore" class="btn btn-outline-light"
                  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                  aria-controls="collapseOne" @click="toggleTextBtn()">En savoir plus <i class="bi bi-chevron-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <h2>LES PROCHAINES SORTIES</h2>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner pb-5">
            <div class="carousel-item active">
              <div class="col-12 d-flex justify-content-center">
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Demonio</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Neverwinter Days</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Baladur's Doors</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 d-flex justify-content-center">
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Skygrim</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">The Sorcerer</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Fall Up</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 d-flex justify-content-center">
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Conqueror's sword</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Divination: original sin</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
                <div class="card bg-dark text-white p-2 col-3 m-2">
                  <h5 class="card-title">Tempest Dale</h5>
                  <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut, quae commodi maxime consequuntur
                    est
                    eos
                    harum eius aut at! Cum numquam alias blanditiis inventore animi commodi obcaecati ex cumque?</p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="row">

      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  beforeCreate: function () {
    document.body.className = "homebody";
  },
  name: "HomePage",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    toggleTextBtn() {
      let text = document.getElementById("learnmore");
      if (text.innerHTML === 'En savoir plus <i class="bi bi-chevron-down"></i>') {
        text.innerHTML = 'Replier <i class="bi bi-chevron-up"></i>' ;
      } else {
        text.innerHTML = 'En savoir plus <i class="bi bi-chevron-down"></i>';
      }
    }
  }
};

</script>

<style>
.background-image {
  background-image: url('../assets/background_wallpaper.jpg');
  background-attachment: fixed;
}
</style>
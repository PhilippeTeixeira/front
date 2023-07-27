<template>
  <div class="container p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand d-flex align-items-center"><img src="../assets/logo.png" width="50"
            height="50" alt="logo gamesoft" class="rounded-circle" />
          <h1 class="mx-2" style="font-size: 2rem;">Gamesoft</h1>
        </router-link><span class="m-auto" style="font-style:italic;">Le studio de jeu vidéo RPG 100% français !</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/games" class="nav-link">Nos jeux</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/incoming" class="nav-link">Prochaines sorties</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <router-link v-if="!this.currentUser" to="/signup"><button
              class="btn btn-outline-light ms-2">S'inscrire</button></router-link>
          <router-link v-if="!this.currentUser" to="/signin"><button
              class="btn btn-outline-light ms-2 me-2">Connexion</button></router-link>
          <ul v-if="this.currentUser" class="nav navbar-nav navbar-right ms-2 me-2">
            <div>
              <li class="dropdown">
                <div data-bs-toggle="dropdown" class="dropdown-toggle user-action d-flex align-items-center btn btn-outline-light ps-2 pe-2 pt-0 pb-1" type="button"><i class="bi bi-person-circle rounded-circle me-2" style="font-size: 2rem;"></i> {{ this.currentUser.username }}
                  <b class="caret"></b></div>
                <ul class="dropdown-menu text-center">
                  <router-link to="/account"><li class="list-group-item"><i class="fa fa-user-o"></i> Mon compte</li></router-link>
                  <li class="divider"></li>
                  <li><a href="#"><button class="btn btn-danger text-white" @click.prevent="UserLogout"><i
                          class="material-icons">&#xE8AC;</i> Logout</button></a></li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-secondary ps-2">
        <li class="breadcrumb-item"><a href="#">Accueil</a></li>
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    UserLogout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/')
      },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        })
    }
  }
}
</script>

<style>
.nav-item {
  white-space: nowrap;
  border-bottom: solid rgba(0, 0, 0, 0);
}

.nav-item:hover {
  border-bottom: solid whitesmoke;
}
</style>

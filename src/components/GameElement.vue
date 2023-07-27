<template>
    <div class="card bg-dark text-white p-2 col-3 m-2">
        <h5 class="card-title">{{ title }}</h5>
        <img class="card-img-top p-2" src="../assets/demonio_background.jpg" alt="image jeu Demonio">
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
  props: ['title','description']
}
</script>
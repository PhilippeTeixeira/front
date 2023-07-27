<template>
  <div class="background-image m-0 p-0">
    <HeaderComponent />
    <div class="container">
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <GameElement v-for="element in elements" :key="element.name" :title="element.title"
          :description="element.description" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import GameElement from "../components/GameElement.vue";

export default {
  beforeCreate: function () {
    document.body.className = "homebody";
  },
  name: "IncomingPage",
  components: {
    HeaderComponent,
    GameElement,
    FooterComponent,
  },
  data() {
    return {
      elements: [
        { title: "titre 1", description: "description 1" },
        { title: "titre 2", description: "description 2" },
        { title: "titre 3", description: "description 3" },
        { title: "titre 4", description: "description 4" },
        { title: "titre 5", description: "description 5" },
        { title: "titre 6", description: "description 6" },
        { title: "titre 7", description: "description 7" },
        { title: "titre 8", description: "description 8" },
        { title: "titre 9", description: "description 9" },
        { title: "titre 10", description: "description 10" }
      ]
    }
  }
};
</script>
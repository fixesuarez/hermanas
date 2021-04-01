<template>
  <ul class="categories-container">
    <router-link tag=li class="category-item" :to="{ name: 'recipes' }">Recettes</router-link>
    <li class="category-item">Zéro déchets</li>
    <li class="category-item">Tout pour nos boss</li>
    <li class="category-item">Brico bois et récup</li>
    <li class="category-item">Déco et DIY</li>
    <li class="category-item">Mama !? Aidons-nous</li>
    <li class="category-item">Faut bien rigoler !</li>
    <li class="category-item">Wakatepe Baboun !</li>
  </ul>
</template>

<script>
import { Vue } from "vue-class-component";

export default class Hom extends Vue{

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.categories-container {
  padding: 30px 15px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 30px;
  .category-item {
    padding: 70px 20px 20px 20px;
    height: 125px;
    background-color: #c4c4c4;
    border-radius: 25px;
    font-weight: bold;
    text-decoration: none;
    color: unset;
  }
}
</style>

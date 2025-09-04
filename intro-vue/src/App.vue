<script setup lang="ts">
// Section de code TypeScript
const framework = "Vue"
const nom = "David Dumas-Desgagné"
const annee = new Date().getFullYear()
</script>

<template>
<!--Section HTML-->
<main>
  <!-- On accede aux variables definies dans la section script en les entourant de {{  }}
   appelé notation moustache-->
  <h1>Notre premier composant {{framework}}</h1>
</main>
<footer>
  <p>&copy; {{nom}} {{annee}}</p>
</footer>
</template>

<style scoped>
/*Section CSS
scoped: ne s'applique qu'au composant de ce fichier, pas de conflit */
h1 {
  font-weight: bold;
  text-align: center;
  color: blueviolet;
  
}

footer {
  position: fixed;
  bottom : 0;
  font-style: italic;
}
</style>

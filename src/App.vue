<template>
  <div id="app">
    <label>Nombre:</label> <input v-model="nombre" /> <br />
    <label>Hobbie:</label> <input v-model="hobbie" /> <br />
    <button @click="addUsers">Agregar</button>
    {{usuarios}}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Saludo from "./components/Saludo.vue";

export default {
  name: "App",
  data() {
    return {
      nombre: "",
      hobbie: "",
      usuarios: [],
    };
  },
  methods: {
    addUsers() {
      this.usuarios.push({ nombre: this.nombre, hobbie: this.hobbie });
    },
  },
  components: {
    HelloWorld,
    Saludo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

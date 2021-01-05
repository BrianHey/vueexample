<template>
  <div id="app">
    <label>Nombre:</label> <input v-model="nombre" /> <br />
    <label>Hobbie:</label> <input v-model="hobbie" /> <br />
    <button @click="addUsers">Agregar</button>
    <b-table striped hover :items='usuarios'>
      <!-- <template #cell(acciones)="data"> -->
      <template #cell(acciones)="pablo">
        <b-button v-b-modal.modal-1 variant="warning" >Editar</b-button>
        <b-button variant="danger" @click="eraseUser(pablo.index)" >Borrar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Saludo from "./components/Saludo.vue";

export default {
  name: "App",
  data() {
    return {
      fields: ['nombre', 'hobbie','acciones'],
      nombre: "",
      hobbie: "",
      usuarios: [],
      on: false
    };
  },
  methods: {
    addUsers() {
      this.usuarios.push({ nombre: this.nombre, hobbie: this.hobbie, acciones: ''});
    },
    eraseUser(indice){
      this.usuarios.splice(indice,1)
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

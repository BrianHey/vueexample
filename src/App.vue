<template>
  <div id="app">
    <label>Nombre:</label> <input v-model="nombre" /> <br />
    <label>Hobbie:</label> <input v-model="hobbie" /> <br />
    <button @click="addUsers" v-show="!encendido">Agregar</button>
    <button @click="updateUsers" v-show="encendido">actualizar</button>
    <b-table striped hover :items="usuarios" :fields="fields">
      <template #cell(botones)="data">
        <b-button @click="editUsers(data.index)" variant="outline-primary"
          >editar</b-button
        >
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
      nombre: "",
      hobbie: "",
      fields: ["nombre", "hobbie", "botones"],
      usuarios: [],
      encendido: false,
      indiceUsersEditing: "",
    };
  },

  methods: {
    addUsers() {
      this.usuarios.push({ nombre: this.nombre, hobbie: this.hobbie });
    },
    editUsers(indice) {
      this.indiceUsersEditing = indice;
      this.encendido=true
    },
    updateUsers() {
      let elementoModificado = { nombre: this.nombre, hobbie: this.hobbie };
      console.log(elementoModificado)
      this.usuarios[this.indiceUsersEditing] = elementoModificado;
      
      this.encendido = false;
  
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
<template>
  <div id="app">
    <label>Nombre:</label> <input v-model="nombre" /> <br />
    <label>Hobbie:</label> <input v-model="hobbie" /> <br />
    <button @click="addUsers" v-show="!encendido">Agregar</button>
    <button @click="updateUsers" v-show="encendido">actualizar</button>
    <!-- <b-table :items="usuarios" :fields="fields">
      <template #cell(botones)="data">
        <b-button @click="editUsers(data.index)" variant="outline-primary"
          >editar</b-button
        >
      </template>
    </b-table> -->

    <table class="table">
      <thead>
        <th>Nombre</th>
        <th>Hobbie</th>
        <th>Acciones</th>
      </thead>

      <tbody>
        <tr v-for="(usuario, i) in usuarios" :key="i">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.hobbie }}</td>
          <td>
            <b-button @click="editUsers(i)" variant="outline-primary"
              >editar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-info" @click="loginGmail">
      Log in con Gmail jeje =)
    </button>

    <img :src="user.photoURL" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Saludo from "./components/Saludo.vue";

import firebase from "firebase";

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
      hobbies: [],
      user: {},
    };
  },

  methods: {
    addUsers() {
      firebase
        .firestore()
        .collection("hobbies")
        .add({ nombre: this.nombre, hobbie: this.hobbie });
    },
    editUsers(indice) {
      this.indiceUsersEditing = indice;
      this.encendido = true;
    },
    updateUsers() {
      let elementoModificado = { nombre: this.nombre, hobbie: this.hobbie };
      console.log(elementoModificado);
      let usuarios = this.usuarios;
      usuarios[this.indiceUsersEditing] = elementoModificado;
      let newUsuarios = usuarios;
      this.usuarios = newUsuarios;
      this.encendido = false;
    },

    loginGmail() {
      alert();
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((resul) => {
          this.user = resul.user;
        });
    },
  },
  components: {
    HelloWorld,
    Saludo,
  },

  mounted() {
    firebase
      .firestore()
      .collection("hobbies")
      .onSnapshot((snapshot) => {
        let hobbies = [];
        snapshot.forEach((doc) => {
          hobbies.push({ id: doc.id, data: doc.data() });
        });
        this.hobbies = hobbies;
        this.usuarios = hobbies.map((h) => h.data);
      });
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

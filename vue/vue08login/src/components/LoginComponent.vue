<template>
  <div>
    <div class="parent">
      <div class="container" :class="isSignDiv ? 'active' : ''"  id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Crear Cuenta</h1>
            <span>Introduzca nombre, mail y tipo de entidad</span>
            <input type="text" name="name" v-model="signUpObj.name" placeholder="Nombre">
            <input type="email" name="email" v-model="signUpObj.email" placeholder="Email">
            <input type="password" name="password" v-model="signUpObj.password" placeholder="Contraseña">
            <button @click="onRegister()">Crear cuenta</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form>
            <h1>Iniciar Sesión</h1>
            <span>Introduzca apellido y contraseña</span>
            <input type="text" name="email" v-model="userName" placeholder="Email">
            <input type="password" name="password" v-model="password" placeholder="Contraseña">
            <a href="#">→ ¿Olvidaste la contraseña? ←</a>
            <button @click="login()">Acceder</button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>E V O bank</h1>
              <p>¿Ya tienes una cuenta?</p>
              <button type="button" class="hidden" id="login" @click="swap()">Conectarse</button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>E V O bank</h1>
              <p>¿Aún no tienes cuenta?</p>
              <button type="button" class="hidden" id="register" @click="swap()">Crear
                cuenta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      isSignDiv: false,
      signUpObj: {
        name: '',
        email: '',
        password: ''
      },
      userName: '',
      password: ''
    }
  },
  mounted() {

  },
  methods: {
    swap() {
      this.isSignDiv = !this.isSignDiv;
      console.log(this.isSignDiv);
    },
  }
}
</script>

<style>
@import "../assets/css/login.css";
</style>
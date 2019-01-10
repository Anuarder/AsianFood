<template>
  <v-app>
    <transition 
      name="fade"
      mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>
<style>

#app{
  background-color: #fff;
}
/* Login and Register page CSS */
.login{
    background-image: url('./assets/previewback1.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    font-family: 'Baloo', sans-serif;
    color: #393942;
  }
  .login-card{
    background-image: url('./assets/preview.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90vh;
    width: 90vw;
    border-radius: 10px;
  }
  .login-form{
    max-width: 40%;
    font-size: 1.5rem;
  }
  .login-input{
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }
  .login-form .v-btn{
    font-size: 1.5rem;
  }
  .router-btn{
    cursor: pointer;
  }
  .error-alert{
    font-size: 16px;
    letter-spacing: .8px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 10px;
  }
  .home-link{
    cursor: pointer;
  }
  /* Router transition */
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

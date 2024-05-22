<!-- UserProfile.component.vue -->
<template>
  <div class="user-profile-container">
    <div class="profile-info">
      <p><strong>Nombres:</strong> Henry William</p>
      <p><strong>Apellidos:</strong> Cavill Dalgliesh</p>
      <p><strong>Celular:</strong> 942431232</p>
      <p><strong>Correo:</strong> Elmaspepadelmundo@gmail.com</p>
      <UserProfileButton label="Actualizar Datos" class="p-button-outlined update-button" @click="updateProfile" />
      <UserProfileButton label="Cerrar Sesión" class="p-button-danger p-button-outlined logout-button" @click="logout" />
    </div>
    <div class="profile-picture">
      <img :src="user.profilePicture" alt="Foto de perfil" />
      <div class="change-photo-link">
        <a href="#" @click="changePhoto">Cambiar foto</a>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileButton from "@/core/fast-scooter/components/user-profile-button.component.vue";

export default {
  name: 'UserProfile',
  components: {
    UserProfileButton
  },
  data() {
    return {
      user: {
        profilePicture: 'https://via.placeholder.com/300x400' // URL de ejemplo para la foto de perfil
      }
    };
  },
  methods: {
    updateProfile() {
      // Lógica para actualizar los datos del perfil
      alert('Actualizar perfil');
    },
    logout() {
      // Lógica para cerrar sesión
      alert('Cerrar sesión');
    },
    changePhoto() {
      // Lógica para cambiar la foto del perfil
      alert('Cambiar foto');
    }
  }
};
</script>

<style scoped>
.user-profile-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.profile-info {
  flex: 1;
  margin-right: 20px;
}

.profile-info p {
  margin: 5px 0;
  font-size: 1.2em;
}

.profile-info p strong {
  font-weight: bold;
}

.update-button,
.logout-button {
  display: block;
  margin-top: 10px;
  width: 200px;
}

.profile-picture {
  flex: 1;
  text-align: center;
}

.profile-picture img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  border: 3px solid #ddd;
}

.profile-picture a {
  display: inline-block;
  margin-top: 10px;
  font-size: 1em;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

.profile-picture a:hover {
  text-decoration: underline;
}
</style>

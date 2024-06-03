<template>
  <the-header-content></the-header-content>
  <div class="user-profile-container">
    <div class="profile-info-container">
      <div class="profile-info">
        <p><strong>Nombres:</strong> {{ user.firstName }}</p>
        <p><strong>Apellidos:</strong> {{ user.lastName }}</p>
        <p><strong>Celular:</strong> {{ user.phone }}</p>
        <p><strong>Correo:</strong> {{ user.email }}</p>
        <div class="button-group">
          <UserProfileButton label="Actualizar Datos" class="p-button-outlined update-button" @click="updateProfile" />
          <UserProfileButton label="Cerrar Sesión" class="p-button-danger  logout-button" @click="logout" />
        </div>
      </div>
    </div>
    <div class="profile-picture">
      <img :src="user.profilePicture" alt="Foto de perfil" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserProfileButton from "@/core/fast-scooter/components/user-profile-button.component.vue";
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'
export default {
name: 'UserProfile',
  components: {
    TheHeaderContent,
  UserProfileButton
},
data() {
  return {
    user: {}
  }
},
  mounted() {
    // Fetch los datos del usuario
    axios.get('http://localhost:3000/users/1')
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        console.error('Error al obtener datos del usuario:', error)
      })
},
methods: {
  updateProfile() {
    this.$router.push('/user-update');
  },
  logout() {
    // Lógica para cerrar sesión
    this.$router.push('/home');
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
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

.profile-info-container {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 100%;
  max-width: 450px;
}

.profile-info {
  margin-bottom: 20px;
}
.update-button {
  background-color: #28a745;
  color: white;
}
.button-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
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
  flex: 1;
  margin: 5px;
  min-width: 150px;
}

.logout-button {
  background-color: #f44336;
  color: white;
}
.profile-picture {
  text-align: center;
  margin: 20px;
}
.profile-picture img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  border: 3px solid #ddd;
}




@media (max-width: 768px) {
  .user-profile-container {
    flex-direction: column;
    height: auto;
  }
  .profile-info-container,
  .profile-picture {
    margin: 10px 0;
  }
  .button-group {
    flex-direction: column;
  }
  .update-button,
  .logout-button {
    width: calc(50% - 10px);
    margin: 5px;
  }

}
</style>
<template>
  <div class="user-profile-container">
    <div class="profile-info-container">
      <div class="profile-info">
        <p><strong>Nombres:</strong> Henry William</p>
        <p><strong>Apellidos:</strong> Cavill Dalgliesh</p>
        <p><strong>Celular:</strong> 942431232</p>
        <p><strong>Correo:</strong> Elmaspepadelmundo@gmail.com</p>
        <div class="button-group">
          <UserProfileButton label="Actualizar Datos" class="p-button-outlined update-button" @click="updateProfile" />
          <UserProfileButton label="Cerrar Sesión" class="p-button-danger p-button-outlined logout-button" @click="logout" />
        </div>
      </div>
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
    this.$router.push('/user-update');
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
.change-photo-link  a {
  display: inline-block;
  margin-top: 10px;
  font-size: 1em;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}
.change-photo-link a:hover {
  text-decoration: underline;
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
  .update-button {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #007bff;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
  }
  .button-text {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .button-text:hover {
    background-color: #0056b3;
  }
}
</style>
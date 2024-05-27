<template>
  <div class="user-profile-update-container">
    <div class="center-content">
      <div class="profile-picture">
        <img :src="user.profilePicture" alt="Foto de perfil" />
        <a href="#" class="change-photo-link">Cambiar foto</a>
      </div>
      <form @submit.prevent="saveProfile" class="user-form">
        <div class="form-group">
          <label for="firstName">Nombres:</label>
          <input type="text" id="firstName" v-model="user.firstName" />
        </div>
        <div class="form-group">
          <label for="lastName">Apellidos:</label>
          <input type="text" id="lastName" v-model="user.lastName" />
        </div>
        <div class="form-group">
          <label for="phone">Celular:</label>
          <input type="text" id="phone" v-model="user.phone" pattern="[0-9]{9}" maxlength="9" title="El número de teléfono debe tener 9 dígitos" />
          <small class="error" v-if="phoneError">El número de telefono debe tener 9 digitos.</small>
        </div>
        <div class="form-group">
          <label for="email">Correo:</label>
          <input type="email" id="email" v-model="user.email" />
        </div>
        <div class="button-group">
          <UserProfileButton label="Guardar Cambios" class="p-button-outlined save-button" type="submit" />
          <UserProfileButton label="Cancelar" class="p-button-outlined cancel-button" @click="cancelUpdate" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserProfileButton from "@/core/fast-scooter/components/user-profile-button.component.vue";
import axios from 'axios'
export default {
name: 'UserProfileUpdate',
  components: {
  UserProfileButton
},
data() {
  return {
    user: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      profilePicture: ''
    },
    phoneError: false
  };
},
  mounted() {
    axios.get('http://localhost:3000/users/1')
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error('Error al obtener datos del usuario:', error);
      });
  },
methods: {
  saveProfile() {
    if (this.user.phone.length === 9) {
      axios.put('http://localhost:3000/users/1', this.user)
        .then(response => {
          alert('Perfil actualizado correctamente');
          this.$router.push('/user-profile');
        })
        .catch(error => {
          console.error('Error al guardar los cambios del perfil:', error);
        });
    } else {
      this.phoneError = true;
    }
  },
  cancelUpdate() {
    this.$router.push('/user-profile');
  }
}
};
</script>

  <style scoped>
    .user-profile-update-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f9f9f9;
      padding: 20px;
    }

    .center-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .profile-picture {
      margin-bottom: 20px;
      text-align: center;
    }
    .profile-picture img {
      width: 300px;
      height: auto;
        border-radius: 10px;
      }

    .change-photo-link {
      display: block;
      color: #007bff;
      text-decoration: none;
      font-size: 18px;
      margin-top: 10px;
    }
    .change-photo-link:hover {
      text-decoration: underline;
    }
     .form-group {
       margin-bottom: 15px;
       width: 100%;
     }

  .form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  }
  .form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  }

  .button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
    width: 100%;
  }
  .save-button {
    flex: 1;
    margin-right: 5px;
    background-color: #28a745;
    color: white;
  }
  .cancel-button {
    flex: 1;
    margin-left: 5px;
  background-color: #f44336;
  color: white;
  }

    .error {
      color: red;
    }
    @media (min-width: 768px) {
      .user-profile-update-container {
        padding: 40px;
      }
      .center-content {
        flex-direction: row;
      }
      .profile-picture {
        margin-bottom: 0;
        margin-right: 20px;
      }
      .form-group {
        width: auto;
        max-width: 400px;
      }
      .button-group {
        width: auto;
      }
    }

  </style>
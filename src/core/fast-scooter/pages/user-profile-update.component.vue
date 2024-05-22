<!-- UserProfileUpdate.component.vue -->
<template>
  <div class="user-profile-update-container">
    <form @submit.prevent="saveProfile">
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
        <input type="text" id="phone" v-model="user.phone" />
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
</template>

<script>
import UserProfileButton from "@/core/fast-scooter/components/user-profile-button.component.vue";

export default {
  name: 'UserProfileUpdate',
  components: {
    UserProfileButton
  },
  data() {
    return {
      user: {
        firstName: 'Henry William',
        lastName: 'Cavill Dalgliesh',
        phone: '942431232',
        email: 'Elmaspepadelmundo@gmail.com'
      }
    };
  },
  methods: {
    saveProfile() {
      // Lógica para guardar los cambios del perfil
      alert('Guardar cambios del perfil');
    },
    cancelUpdate() {
      // Lógica para cancelar la actualización del perfil
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
}

form {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
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
  justify-content: flex-start;
  margin-top: 20px;
}

.save-button,
.cancel-button {
  display: inline-block;
  width: auto;
  padding: 10px 20px;
  white-space: nowrap;
}

.save-button {
  margin-right: 20px;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}
</style>

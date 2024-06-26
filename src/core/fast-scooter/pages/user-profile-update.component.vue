<template>
  <the-header-content></the-header-content>
  <div class="user-profile-update-container">
    <div class="center-content">
      <div class="profile-picture">
<!--        <img :src="user.profilePicture" alt="Foto de perfil" />-->
        <a href="#" class="change-photo-link" @click="openFileInput">{{$t('change-photo')}}</a>
        <input type="file" ref="fileInput" @change="handleFileSelect" style="display: none;" accept="image/*">
      </div>
      <form @submit.prevent="saveProfile" class="user-form">
        <div class="form-group">
          <label for="firstName">{{$t('username')}}</label>
          <input type="text" id="firstName" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for="email">{{$t('email')}}</label>
          <input type="email" id="email" v-model="user.email" />
        </div>
        <div class="button-group">
          <pv-button :label="$t('save')" class="save-button" type="submit" />
          <pv-button :label="$t('cancel')" class="save-button" type="submit" @click=" cancelUpdate"/>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserProfileButton from "@/core/fast-scooter/components/user-profile-button.component.vue";
import axios from 'axios'
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'
import UsersService from "@/core/fast-scooter/services/users.service.js";
export default {
name: 'UserProfileUpdate',
  components: {
    TheHeaderContent,
},
data() {
  return {
    userId: sessionStorage.getItem("usuario"),
    user: null,
    phoneError: false
  };
},
  created() {
    this.getUser();
  },
methods: {
  async getUser() {
    try {
      const response = await UsersService.getUserById(this.userId);
      this.user = response.data;
      console.log(this.user)
    }catch (error){
      console.log(error);
    }
  },

  async saveProfile() {
    try {
      const response = await UsersService.updateUser(this.user);
      console.log('User updated:', response.data);
      this.$router.push('/user-profile');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  },
  cancelUpdate() {
    this.$router.push('/user-profile');
  },
  openFileInput() {
    this.$refs.fileInput.click();
  },
  handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profilePicture = reader.result;
      };
      reader.readAsDataURL(file);
    }
  },
}
};
</script>

  <style scoped>
    .user-profile-update-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: lightgray;
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
    background-color: mediumseagreen;
    color: white;
  }
  .cancel-button {
    flex: 1;
    margin-left: 5px;
  background-color: orangered;
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
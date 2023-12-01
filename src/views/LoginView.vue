<template>
    <div class="bg-[url('../assets/MMCY-Tech-Job_section-1.png')] md:bg-left-top bg-center">
    <!-- Banner header -->
    <header class=" text-white text-center py-8 h-full space-y-4 justify-items-end">
      <div class="px-4 py-40 md:pt-40 md:pl-30 md:pb-24 md:pr-4 ">
        <h1 class="md:text-[80px] text-[50px] font-bold">Login</h1>
        <!-- <p class="text-xl mb-4 pt-2">Take your Career to New Heights</p>
        <button class="bg-orangePrimary text-white md:text-[20px] text-[30px] font-bold font-poppins py-4 px-6 hover:bg-opacity-90 transition duration-300">
          Join us
        </button> -->
      </div>
    </header>
</div>
    <form @submit.prevent="loginUser" class="flex flex-col items-center max-w-[400px] mx-auto md:my-8 bg-white text-left font-Poppins px-12 py-10 rounded-lg shadow-lg">
      <h2 class="text-3xl text-bluePrimary font-black self-start">Login</h2>
      <p class="text-base self-start my-2">Please login to your account</p>
      <!-- <label class="text-bluePrimary text-xs self-start font-semibold mt-[25px] mb-3 uppercase tracking-wide">Email:</label> -->
      <input type="email" placeholder="Username or Email" required v-model="email" class="p-2 mt-[15px] bg-lightGrey block w-full border-b border-bluePrimary focus:outline-none mb-[10px] rounded-lg focus:border-orangePrimary">
  
      <!-- <label class="text-bluePrimary text-xs self-start font-semibold mt-[25px] mb-3 uppercase tracking-wide">Password:</label> -->
      <input :type="showPassword ? 'text' : 'password'" placeholder="Password" required v-model="password" class="p-2 mt-[15px] block bg-lightGrey w-full border-b border-bluePrimary rounded-lg focus:outline-none focus:border-orangePrimary">
      <!-- <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-orangePrimary">
      <i
        class="cursor-pointer fas"
        :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
        @click="showPassword = !showPassword"
      ></i>
    </span> -->
      <button type="submit" class="mt-[25px] mb-[30px] text-white bg-orangePrimary py-[10px] w-full p-2 mb-2 bg-5BA4A4 text-white border border-5BA4A4 rounded-lg hover:bg-63BABA transition duration-300 ease-in-out">Login</button>
     <!-- <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>-->
      <!-- <error-modal :is-visible="isErrorModalVisible" :error-message="errorMessage" @close="closeErrorModal"></error-modal> -->
      <p class="text-center"><a href="/register">Register</a> | <a>Forgot your Password?</a></p>
    </form>
  </template>

<script>
export default {
  data() {
    return {
      password: '',
      showPassword: false
    };
  }
  // Your other component code
};
</script>
  
  <!-- <script>
  import { authStore } from '@/store/auth';
  //import ErrorModal from '@/components/ErrorModal.vue';
  
  export default {
    components: {
      ErrorModal
    },
    data() {
      return {
        email: '',
        password: '',
        isErrorModalVisible: false,
        errorMessage: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          const store = authStore(); 
          await store.login(this.email, this.password);
        if (store.isAuthenticated) {
            this.$router.push({ name: 'JobsList' });
            console.log('Login successful');
          } else  {
            this.errorMessage = 'Login failed. Please check your credentials.';
            this.isErrorModalVisible = true;
            console.error('Error occurred:', this.errorMessage);
          }
        } catch (error) {
          console.error('Error occurred:', error);
          this.errorMessage = 'An error occurred while processing your request.';
          this.isErrorModalVisible = true;
        }
      },
      closeErrorModal() {
        this.isErrorModalVisible = false;
      }
    }
  };
  </script> -->
  
  <style>
      body{
          background-color: #F4F6F8;
      }
   </style>
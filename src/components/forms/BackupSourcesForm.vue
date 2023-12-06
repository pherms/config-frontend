<template>
    <form action="#" method="post" id="sourcesConfig">
        <label for="sources" class="input-form-label">Sources om te backuppen</label>
        <textarea name="sources" id="sources" cols="30" rows="10" class="config-form-fields input-border config-form-input w-fit"></textarea>
    </form>
    <p>{{ authKey }}</p>
    <p>{{ loggedInStatus }}</p>
    <div class="buttons">
      <base-button @click="storeConfig">Opslaan</base-button>
      <router-link to="/config"><link-button>Terug</link-button></router-link>
    </div>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue'
import LinkButton from '../ui/LinkButton.vue';

import axios from "axios";
// import { ref, onMounted } from 'vue';
import { mapState } from 'vuex';

export default ({
    setup() {
      // const data = ref(null);
      // const store = useStore();

      // console.log('Initializing');
      // const getSources = () => {
        
      //   console.log('Getting sources');
        
      // };

      // onMounted(async () => {
      //   data.value = await store.dispatch('getUserDataAction');
      //   getSources();
      // });

      // return {
      //   data
      // }
    },
    components: {
        BaseButton,
        LinkButton
    },
    data() {
        return {
            authKey: '',
            loggedInStatus: false,
            error: ''
        }
    },
    computed: {
      ...mapState(['userData']),
      isLoggedIn() {
          return this.$store.getters.getLoggedInStatus;
      }
    },
    onMounted() {
      let userData = this.$store.getters.getUserData;
      console.log(userData);
      this.authKey = userData.accessToken;
      this.loggedInStatus = userData.loggedInStatus;
    },
    watch: {
        isLoggedIn(value) {
            if (value) {
                const userData = this.$store.getters.getUserAuthKey;
                this.authKey = userData.authKey;
                this.loggedInStatus = value
            }
        }
    },
    methods: {
        async storeConfig(authKey) {
          let fd = new FormData();
          fd.append('sources', this.sources);

            try {
              const response = await axios.put('http://127.0.0.1:8081/api/v1/sources', fd, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  authorization: 'Bearer ' + authKey
                }
              });

              console.log(response);
            } catch(err) {
              this.error = err.message;
            }
        },

    }
})
</script>

<style scoped>
.input-border {
  border-color: rgb(30 41 59/0,8);
  border: solid 1px;
  border-radius: 5px;
  padding: 0.25rem;
}

.config-form-input {
  position: relative;
  width: 20rem;
}

.config-form-fields {
  display: flex;
  justify-content: space-between;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
}

.config-form-label {
  position: relative;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.buttons {
  justify-content: space-between;
}
</style>
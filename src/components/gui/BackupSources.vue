<template>
    <backup-sourcesform v-if="isLoggedIn"></backup-sourcesform>
</template>
<script>
import BackupSourcesform from '../forms/BackupSourcesForm.vue'

export default ({
    setup() {
        
    },
    data() {
        return {
            authKey: ''
        }
    },
    components: {
        BackupSourcesform,
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.getLoggedInStatus;
        }
    },
    watch: {
        isLoggedIn(value) {
            if (value) {
                const userData = this.$store.getters.getUserAuthKey;
                this.authKey = userData.authKey;
            }
        }
    },
})
</script>

<style scoped>

</style>
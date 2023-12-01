<template>
    <h1>Backup COnfig</h1>
    <backup-configform v-if="isLoggedIn"></backup-configform>
</template>
<script>
import BackupConfigform from '../forms/BackupConfigForm'

export default ({
    setup() {
        
    },
    data() {
        return {
            authKey: ''
        }
    },
    components: {
        BackupConfigform,
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
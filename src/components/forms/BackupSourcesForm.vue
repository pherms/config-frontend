<template>
    <form action="#" method="post" id="sourcesConfig">
        <label for="sources" class="input-form-label">Sources om te backuppen</label>
        <textarea name="sources" id="sources" cols="30" rows="10" class="config-form-fields input-border config-form-input w-fit"></textarea>
    </form>
    <base-button>Opslaan</base-button>
    <router-link to="/config"><link-button>Terug</link-button></router-link>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue'
import LinkButton from '../ui/LinkButton.vue';

export default ({
    setup() {
        
    },
    components: {
        BaseButton,
        LinkButton
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
</style>
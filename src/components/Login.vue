<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group v-if="register"
        id="input-group-2"
        label="Email:"
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          aria-describedby="optional"
        ></b-form-input>
        <b-form-text id="optional">Needed for password recovery</b-form-text>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Password:"
        label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group v-if="register"
        id="input-group-4"
        label="Retype password:"
        label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.repass"
          type="password"
          placeholder="Confirm password"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Retyped password differ from password
        </b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary" v-b-tooltip.hover title="Submit"><b-icon-person-check></b-icon-person-check></b-button>
      <b-button type="reset" variant="danger" v-b-tooltip.hover title="Reset" ><b-icon-slash-circle></b-icon-slash-circle></b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    data() {
        return {
          form: {
            name: '',
            email: '',
            password: '',
            repass: ''
          },
          register: false
        }
    },
    created: function() {
      if (this.$route.params.reg == 'reg') this.register = true
      else this.register = false
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        await this.$store.dispatch('login', { form: this.form, reg: this.register })
        if (this.$store.getters.isLoggedIn) this.$router.push('/')
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.email = ''
        this.form.password = ''
        this.form.repass = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    computed: {
      validation: function() {
        return this.form.password == this.form.repass
      }
    },
    watch: {
      $route: function() {
        if (this.$route.params.reg == 'reg') this.register = true
        else this.register = false
      }
    }
  }
</script>
<script setup>
import { useFormStore } from '../stores/store'





</script>

<template>
  <div class="container">

    <form @submit.prevent="submitForm">

      <div class="flex">
        <h4>Client</h4>
        <div class="input-container">
          <input v-model="formData" id="entreprise" type="radio" name="clientType" value="entreprise" />
          <label for="entreprise">Entreprise</label>
          <input id="particulier" type="radio" name="clientType" value="particulier" />
          <label for="particulier">Particulier</label>
        </div>
        <div class="input-container">
          <input v-model="formData.clientMail" type="text" placeholder="Nom du client" />
        </div>
        <div class="input-container">
          <input v-model="formData.clientEmail" type="email" placeholder="Mail client">
        </div>
      </div>


      <div class="flex">
        <h4>Date d'intervention</h4>
        <div class="input-group">
          <input type="date">
        </div>
      </div>

      <div class="flex">
        <h4>Observations</h4>
        <div class="input-group">
          <textarea rows="5" />
        </div>
      </div>

      <div class="flex">
        <div class="input-group">
          <input type="submit" value="Envoyer" @click="useFormStore.updateFormData(this.formData)">
        </div>

      </div>

    </form>

  </div>
</template>

<style scoped>
body {
  padding: 1em;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
}

h4 {
  color: #3D3D33;
}

input,
input[type="radio"]+label,
input[type="date"],
textarea {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}

input[type="date"],
textarea {
  margin-bottom: 5em;
}

input:focus,
textarea:focus {
  outline: 0;
  border-color: #55AB41;
}

input[type="radio"] {
  display: none;
}


input[type="radio"]+label {
  display: inline-block;
  width: 50%;
  text-align: center;
  border-radius: 0;
}

input[type="radio"]+label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

input[type="radio"]+label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

input[type="radio"]:checked+label,
input:checked+label:before {
  background-color: #55AB41;
  color: #fff;
  border-color: #8db085;
}


.input-container {
  margin-bottom: 1em;
}

.input-container:before,
.input-container:after {
  content: "";
  display: table;
}



input[type="date"],
input[type=submit] {
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #55AB41;
  color: #fff;
  border-color: #8db085;
}

input[type="submit"]:active {
  color: #3d3d33
}

.container {
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}



.flex:before,
.flex:after {
  content: "";
  display: table;
}
</style>

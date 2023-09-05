<script setup>

import { ref } from 'vue'
import Header from '../components/Header.vue'



</script>




<template>

    <div v-if="clientType = particulier">
        <p>Mr/Mme {{ clientName }},</p>

        <p>Notre technicien est intervenu pour l'entretien de la vitrerie le {{ interventionDate }}</p>

    </div>

    <div v-else>
        <p>Madame Monsieur,</p>

        <p>Notre technicien est intervenu pour l'entretien de la vitrerie de l'entreprise <strong>{{ clientName }}</strong>
            le <strong>{{ interventionDate }}</strong></p>

    </div>
    <p v-if="observation != ''">Observations technicien : {{ observation }}</p>
</template>
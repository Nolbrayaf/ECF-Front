<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router';


const toggleForm = ref(true)



const clientType = ref("")
const clientName = ref("");
const interventionDate = ref("");
const observation = ref("");



</script>

<template>
    <form v-if="toggleForm" action="">

        <div class="container-label">
            <label class="labelName" for="clientType">Nom Entreprise / Client </label>



            <input v-model="clientType" type="radio" name="clientType" value="entreprise">
            <label for="clientType">Entreprise</label>


            <input v-model="clientType" type="radio" name="clientType" value="particulier"><label
                for="clientType">Particulier</label>


            <input v-model="clientName" type="text" placeholder="  Client" required>
        </div>

        <div class="container-label dateLabel">
            <label class="labelName" for="interventionDate">Date d'intervention
                <input v-model="interventionDate" type="date" required>
            </label>
        </div>


        <div class="labelName">
            <label for="observation">OBSERVATIONS:</label>
            <textarea v-model="observation" rows="4" />

        </div>


        <div class="signature-container">
            <p>Signature du Technicien</p>
            <p>Signature du client / Cachet d'entreprise</p>
        </div>

        <button @click="toggleForm = !toggleForm">
            Envoyer
            <img src="../assets/Images/mail.png" alt="Mail logo">
        </button>
    </form>




    <div v-else class="review">

        <div v-if="clientType == 'particulier'">
            <p>Mr/Mme <span>{{ clientName.toUpperCase() }}</span>,</p>

            <p>Notre technicien est intervenu pour l'entretien de la vitrerie le <span>{{ interventionDate }}</span></p>

        </div>

        <div v-else>
            <p>Madame Monsieur,</p>

            <p>Notre technicien est intervenu pour l'entretien de la vitrerie de l'entreprise <span>{{
                clientName.toUpperCase() }}</span>
                le <span>{{ interventionDate }}</span></p>

        </div>
        <div v-if="observation != ''">
            <p>Observations technicien : </p>
            <p><span>{{ observation }}</span></p>
        </div>

        <p>Merci de votre confiance !</p>

        <p class="wash_sign">Mr WASH de la société CLEAN3000</p>


    </div>
</template>



<style scoped>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0;
    margin: 0;
}





form {
    padding: 50px 40px;
    background-color: #55AB41;
    opacity: 0.8;
    color: #f1f1f1;
    font-size: calc(0.5rem + 1.5vh);
}

.container-label {
    padding-bottom: 1.5rem;
}

input,
textarea {
    color: #333;
}

input[type=radio] {
    margin: 15px 10px;
}

input[type=text],
input[type=button],
input[type=date],
textarea {
    display: block;
}






button {
    padding: 15px 10px;
    border-radius: 5px;
    background-color: #3D3D33;
    color: #f1f1f1;
    font-weight: 500;
    font-size: larger;
    display: flex;
    justify-content: center;
    gap: 15px;
}





.signature-container {
    display: flex;
    justify-content: space-between;
}


.review {
    width: 100%;
    padding: 50px 10px;
    border: solid black 1px;
    box-sizing: border-box;
}


.review span {
    font-weight: 600;
}

.review p {
    padding-top: 10px;
}

.review div{
    padding-bottom: 50px;
}

.wash_sign {
    font-weight: 600;
    text-align: end;
}

@media (width < 680px) {

    form {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .container-label {
        display: block;
    }

    .labelName {
        display: block;

    }

    input {
        margin-top: 0.5rem;
        color: #333;
        padding: 8px 0;
        border-radius: 5px;
    }

    input[type=text],
    button,
    textarea {
        width: 100%;
    }


    .signature-container {
        flex-direction: column;
        gap: 60px;
        margin-bottom: 50px;
    }
}
</style>
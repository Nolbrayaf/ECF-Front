<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router';


</script>

<template>
    


    <form action="" method="POST" :action="Review.vue">

        <div class="container-label">
            <label class="labelName" for="clientType">Nom de l'entreprise </label>
        

            
            <input v-model="clientType" type="radio" name="clientType" value="entreprise" required>
            <label for="clientType">Entreprise</label>


            <input v-model="clientType" type="radio" name="clientType" value="particulier"><label for="clientType">Particulier</label>


            <input v-model="clientName" type="text" name="clientName" placeholder="Nom Client" required><label for="clientName"></label>
        </div>

        <div class="container-label dateLabel">
            <label class="labelName" for="interventionDate">Notre techinicien est intervenu pour l'entretien de la vitrerie le
                <input v-model="interventionDate" type="date" required >
            </label>
        </div>
        

        <div class="labelName">
            <label  for="observation">OBSERVATIONS:</label>
            <textarea v-model="observation" rows="4" />

        </div>

        <p>Merci de votre confiance</p>

        <div class="signature-container">
            <p>Signature du Technicien</p>
            <p>Signature du client / Cachet d'entreprise</p>
        </div>

        <RouterLink to="/review">
        <input type="button" value="Valider">
        </RouterLink>
    </form>
</template>



<style scoped>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding:0;
    margin: 0;
    color: #f1f1f1;
}





form {
    padding: 50px 40px;
    background-color: #55AB41;
    opacity: 0.8;
}

.container-label {
    padding-bottom: 1.5rem;
}


input[type=radio]{
margin: 15px 10px;
}
input[type=text], input[type=button], textarea {
        display: block;
}

input[type=button]{
        padding: 15px 10px;
        border-radius: 5px;
        background-color: #3D3D33;
        color: #f1f1f1;
        font-weight: 500;
        font-size: larger;
    }



.signature-container {
    display: flex;
    justify-content: space-between;
}

@media (width < 680px) {

    form{
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .container-label {
        display: block;
    }
    .labelName{
        display:block;

    }

    input{
        margin-top: 0.5rem;
        color: #333;
    }

    input[type=text], input[type=button], textarea {
        width: 100%;
    }
 

    .signature-container{
        flex-direction: column;
        gap: 60px;
        margin-bottom: 50px;
    }
}
</style>
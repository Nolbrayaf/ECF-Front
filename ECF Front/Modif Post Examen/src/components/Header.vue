<script>


</script>

<template>
    <header>
    <img src="../assets/Images/clean3000-starter/logo-clean3000-mini.png" class="mb" alt="Logo">
    <img src="../assets/Images/clean3000-starter/logo-clean3000.png" class="lg" alt="Logo">
    <h3>AVIS DE PASSAGE</h3>
</header>
</template>

<style scoped>
header {
    background-color: #3D3D33;
    min-height: 50px;
    display: flex;
    align-items: center;
    color: #f1f1f1;
}

.mb {
    max-width: 50px;
    height: 100%;
}
.lg{
    max-height: 100px;
}

h3 {
    text-align: center;
    margin: auto;
}

@media (width > 680px){
    .mb{
        display:none
    }
}

@media (width < 680px){
    .lg{
        display:none
    }
}
</style>
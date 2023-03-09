<template>
    <div class="headerAbout">
        <div class="imageAbout">
            <img class="imageAboutFit" src="../public/image/moiPetit.png" alt="">
        </div>
        <div class="textAbout">
            <h1 class="textAboutTitre">Qui suis-je ?</h1>
            <p class="textAboutPara">Je suis un étudiant en développement web de {{ getAge('2002-12-07') }} 
                ans qui est passionné par l'informatique depuis le plus jeune âge. Je touche à tout, langages
                de programmation, dessin assissté par ordinateur, Hardware ... et le week end je monte et 
                débug des ordinateurs pour des copains.
            </p>
            <h2 class="textAboutTitre">Langues: </h2>
            <ul>
                <div>
                    <div class="dFlexSpaceB">
                        <li>Français</li>
                        <p>Couramment</p>
                    </div>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                </div>
                <div><div class="dFlexSpaceB">
                    <li>Anglais</li>
                    <p>Très bon</p>
                </div>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteNon"></span>
                </div>
                <div><div class="dFlexSpaceB">
                    <li>Albanais</li>
                    <p>Maternelle</p>
                </div>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                </div>
                <div><div class="dFlexSpaceB">
                    <li>Kosovar</li>
                    <p>Maternelle</p>
                </div>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                </div>
                <div><div class="dFlexSpaceB">
                    <li>Allemand</li>
                    <p>Débutant</p>
                </div>
                    <span class="noteOui"></span>
                    <span class="noteOui"></span>
                    <span class="noteNon"></span>
                    <span class="noteNon"></span>
                    <span class="noteNon"></span>
                </div>
            </ul>
        </div> 
    </div>
</template>

<script>
export default {
    methods: {
        getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
    }
}
</script>

<style>

</style>
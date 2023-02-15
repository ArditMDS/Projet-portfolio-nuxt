<template>
    <div>
        <div class="tousLesProjets">
            <li class="containerCategorie" v-for="categorie in categorieProjets">
                <h2 class="titreCategorie">{{ categorie.nomCategorie }}</h2>
                <div class="boxCategorie">
                    <div class="boxProjets">
                        <li class="listeProjets" v-for="projet in projets.filter(item => categorie.nomCategorie === item.categorieProjet)">
                            <h2 class="catNomProjet">{{ projet.nomProjet }}</h2>
                            <div class="containerImageDesc">
                                <div class="carousel">
                                    <div class="slide">
                                        <img class="imageProjets" :src="projet.urlImage" alt="">
                                    </div>
                                    <div class="slide">
                                        <img class="imageProjets" :src="projet.urlImage" alt="">
                                    </div>
                                    <div class="slide">
                                        <img class="imageProjets" :src="projet.urlImage" alt="">
                                    </div>
                                </div>
                                <p class="texteDescription">
                                    {{ projet.texte }}
                                </p>
                            </div>
                        </li>
                    </div>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tousLesProjets',
    data() {
        return {
            categorieProjets: [
                {id: 1, nomCategorie:"Site Web"},
                {id: 2, nomCategorie:"Jeux vidéo"},
                {id: 3, nomCategorie:"Hardware"},
            ],
            projets: [
                {id: 1, nomProjet:"S.W.O.A.T", urlImage:"/image/swoat.png",categorieProjet:"Site Web", texte: "Pendant les partiels de ma première année à MyDigitalSchool, j'ai décidé de faire un réseau social. L'application était codé entièrement en PHP et le challenge pour moi était que j'avais une  semaine pour mener le projet à bien en ne connaissant pas le PHP avant de commencer. En quelques jours je n'ai fais que du PHP et j'ai travaillé sérieusement. A la fin j'avais une application fonctionnelle avec un système de POST avec ou sans image et un système de commentaire fonctionnel. J'ai beaucoup appris grâce à ce projet."},
                {id: 2, nomProjet:"Revenge Way", urlImage:"/image/revengeway.png", categorieProjet:"Jeux vidéo"},
                {id: 3, nomProjet:"Ordinateur personnel", urlImage:"/image/ordis.jpg", categorieProjet:"Hardware"},
                {id: 4, nomProjet:"Mon portfolio", urlImage:"/image/portfolio.png", categorieProjet:"Site Web"},
                {id: 5, nomProjet:"Ordinateur pour des amis", urlImage:"/image/ordisami.png", categorieProjet:"Hardware"},
            ]
        }
    }
}
</script>

<style>

</style>
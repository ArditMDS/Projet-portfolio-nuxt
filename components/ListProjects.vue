<template>
    <div>
        <div class="containerPageProjets">
            <div v-for="categorie in categorieProjets" :key="categorie.id">
                <h2 class="titreCategorie">{{ categorie.nomCategorie }}</h2>
                <div class="containerProjet" data-aos="zoom-in-down"  data-aos-duration="1000">
                    <div v-for="projet in projets.filter(item => item.categorieProjet === categorie.nomCategorie)" :key="projet.id">
                        <div class="projet">
                            <h3 class="titreProjets">{{ projet.nomProjet }}</h3>
                            <div class="displayProjet">
                                <v-carousel>
                                    <v-carousel-item v-if="projet.showVideo">
                                        <video :src="projet.urlVideo" controls></video>
                                    </v-carousel-item>
                                    <v-carousel-item :src="projet.urlImage" contain></v-carousel-item>
                                    <v-carousel-item :src="projet.urlImage2" contain></v-carousel-item>
                                    <v-carousel-item :src="projet.urlImage3" contain></v-carousel-item>
                                    </v-carousel>
                                <p class="description">{{ projet.texte }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="containerPageProjetsMobile">
            <div v-for="categorie in categorieProjets" :key="categorie.id">
                <h2 class="titreCategorie">{{ categorie.nomCategorie }}</h2>
                <div class="containerProjet" data-aos="zoom-in-down">
                    <div v-for="projet in projets.filter(item => item.categorieProjet === categorie.nomCategorie)" :key="projet.id">
                        <div class="projet">
                            <h3 class="titreProjets">{{ projet.nomProjet }}</h3>
                            <div class="displayProjet">
                                <v-carousel>
                                    <v-carousel-item v-if="projet.showVideo">
                                        <video :src="projet.urlVideo" controls></video>
                                    </v-carousel-item>
                                    <v-carousel-item :src="projet.urlImage" contain></v-carousel-item>
                                    <v-carousel-item :src="projet.urlImage2" contain></v-carousel-item>
                                    <v-carousel-item :src="projet.urlImage3" contain></v-carousel-item>
                                    </v-carousel>
                                <p class="description">{{ projet.texte }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                {id: 2, nomCategorie:"Jeux vid??o"},
                {id: 3, nomCategorie:"Hardware"},
            ],
            projets: [
                {id: 1, nomProjet:"S.W.O.A.T", urlImage:"/image/swoatConnexion.png",urlImage2:"/image/swoat.png", urlImage3:"/image/swoatPhoto.png",categorieProjet:"Site Web", texte: "Pendant les partiels de ma premi??re ann??e ?? MyDigitalSchool, j'ai d??cid?? de faire un r??seau social. L'application ??tait cod?? enti??rement en PHP et le challenge pour moi ??tait que j'avais une  semaine pour mener le projet ?? bien en ne connaissant pas le PHP avant de commencer. En quelques jours je n'ai fais que du PHP et j'ai travaill?? s??rieusement. A la fin j'avais une application fonctionnelle avec un syst??me de POST avec ou sans image et un syst??me de commentaire fonctionnel. J'ai beaucoup appris gr??ce ?? ce projet."},
                {id: 2, nomProjet:"Revenge Way", urlImage:"/image/revengeway.png",urlImage2:"/image/comingsoon.jpg", urlImage3:"/image/comingsoon.jpg", categorieProjet:"Jeux vid??o",showVideo: true,urlVideo: '/image/revengeWayTrailer.mp4', texte: "Dans le cadre de la Game Jam 2023, ?? laquelle nous avons particip??, nous avons du cr??er un jeu vid??o avec le th??me: ??volution. Pendant une semaine, moi et mon ??quipe, nous sommes organis??s pour trouver une id??e originale et faire de notre mieux pour gagner la Game Jam. J'ai cod?? le jeu enti??rement tout seul sur Stencyl. L'histoire du jeu ??tait que notre personnage se faisait trahir pour le m??chant, ensuite il va remuer ciel et Terre pour le retrouver et se venger. Les graphismes du jeu ??tait ??volutif et plus on avan??ait dans l'histoire plus le jeu ??tait beau."},
                {id: 3, nomProjet:"Ordinateur personnel", urlImage:"/image/ordis.jpg",urlImage2:"/image/ordis3.jpg", urlImage3:"/image/ordis2.jpg", categorieProjet:"Hardware", texte: "Je suis passion?? par le hardware ! En fin 2019, j'ai re??u 500??? pour mon anniversaire, j'ai d??cid?? de m'acheter un ordinateur pour enfin pouvoir jouer ?? mes jeux pr??f??r??s sans lag ou bug. J'en avais marre de me faire arnaquer en achetant des ordianteurs pr??mont??s qui ??tait tr??s mauvais et surtout tr??s ch??re. Alors pendant deux semaines j'ai scrut?? tous les forums, tous les tutos, toutes les documentations que je pouvais trouver sur le fonctionnement des composants d'un ordinateur, comment le monter, connaitre par coeur la compatibilit?? des composants. Apr??s ??a, j'ai command?? les pi??ces petit ?? petit en attendant des bons plans pour chaque produit. C'est comme ??a que au bout de 2 mois et avec 900??? j'ai pu me construire ce setup (photo 1). Aujourd'hui, plusieurs ann??es plus-tard, j'ai beaucoup fais ??volu?? le setup et je dois ??tre autour des 1300??? - 1400??? de mat??riel. Ce projet ?? ??t?? pour moi une r??v??lation et c'est aujourd'hui un hobby que j'affectionne tout particuli??rement."},
                {id: 4, nomProjet:"Mon portfolio", urlImage:"/image/portfolio2.png",urlImage2:"/image/portfolio3.png", urlImage3:"/image/portfolio4.png", categorieProjet:"Site Web", texte: "En tant qu'??tudiant en d??veloppement web, j'ai d??cid?? de cr??er mon portfolio pour plusieurs raisons. Tout d'abord, cela m'a permis de rassembler en un seul endroit tous mes projets et r??alisations, ce qui est tr??s utile pour pr??senter mes comp??tences aux employeurs potentiels. De plus, en construisant mon portfolio, j'ai pu mettre en pratique les comp??tences que j'ai acquises au cours de ma formation en d??veloppement web, telles que la cr??ation de sites web responsives, l'utilisation de diff??rents langages de programmation et la conception de l'interface utilisateur."},
                {id: 5, nomProjet:"Ordinateur pour des amis", urlImage:"/image/ordisHugo.JPG",urlImage2:"/image/pcErmir.jpg", urlImage3:"/image/comingsoon.jpg", categorieProjet:"Hardware", texte: "En dehors de mes ??tudes ou de mon travail, j'aime consacrer mon temps libre ?? proposer mes services pour monter des ordinateurs ?? mes amis. Au fil des ans, j'ai appris beaucoup de choses en autodidacte sur la mani??re de construire des ordinateurs, de choisir les composants les plus adapt??s ?? leurs besoins et de les assembler de mani??re efficace et professionnelle."},
            ],
            dialog: false,
        }
    }
}
</script>
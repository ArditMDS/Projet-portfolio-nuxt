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
                  <v-carousel>
                    <div v-if="projet.showVideo">
                      <v-carousel-item>
                        <video :src="projet.urlVideo" controls></video>
                      </v-carousel-item>
                    </div>
                    <v-carousel-item :src="projet.urlImage" contain></v-carousel-item>
                    <v-carousel-item :src="projet.urlImage2" contain></v-carousel-item>
                    <v-carousel-item :src="projet.urlImage3" contain></v-carousel-item>
                  </v-carousel>
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
                {id: 1, nomProjet:"S.W.O.A.T", urlImage:"/image/swoatConnexion.png",urlImage2:"/image/swoat.png", urlImage3:"/image/swoatPhoto.png",categorieProjet:"Site Web", texte: "Pendant les partiels de ma première année à MyDigitalSchool, j'ai décidé de faire un réseau social. L'application était codé entièrement en PHP et le challenge pour moi était que j'avais une  semaine pour mener le projet à bien en ne connaissant pas le PHP avant de commencer. En quelques jours je n'ai fais que du PHP et j'ai travaillé sérieusement. A la fin j'avais une application fonctionnelle avec un système de POST avec ou sans image et un système de commentaire fonctionnel. J'ai beaucoup appris grâce à ce projet."},
                {id: 2, nomProjet:"Revenge Way", urlImage:"/image/revengeway.png",urlImage2:"/image/swoat.png", urlImage3:"/image/swoat.png", categorieProjet:"Jeux vidéo",showVideo: true,urlVideo: '/image/revengeWayTrailer.mp4', texte: "Dans le cadre de la Game Jam 2023, à laquelle nous avons participé, nous avons du créer un jeu vidéo avec le thème: évolution. Pendant une semaine, moi et mon équipe, nous sommes organisés pour trouver une idée originale et faire de notre mieux pour gagner la Game Jam. J'ai codé le jeu entièrement tout seul sur Stencyl. L'histoire du jeu était que notre personnage se faisait trahir pour le méchant, ensuite il va remuer ciel et Terre pour le retrouver et se venger. Les graphismes du jeu était évolutif et plus on avançait dans l'histoire plus le jeu était beau."},
                {id: 3, nomProjet:"Ordinateur personnel", urlImage:"/image/ordis.jpg",urlImage2:"/image/swoat.png", urlImage3:"/image/swoat.png", categorieProjet:"Hardware"},
                {id: 4, nomProjet:"Mon portfolio", urlImage:"/image/portfolio2.png",urlImage2:"/image/portfolio3.png", urlImage3:"/image/portfolio4.png", categorieProjet:"Site Web"},
                {id: 5, nomProjet:"Ordinateur pour des amis", urlImage:"/image/ordisami.png",urlImage2:"/image/swoat.png", urlImage3:"/image/swoat.png", categorieProjet:"Hardware"},
            ],
            dialog: false,
        }
    }
}
</script>
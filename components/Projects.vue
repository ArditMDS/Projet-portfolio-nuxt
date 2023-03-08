<template>
    <div class="containerProjets">
        <div class="containerTitre">
            <h2 class="titreProjet">Mes derniers <strong>projets</strong></h2>
            <a class="lienTous" href="/projects/">Tous mes projets</a>
        </div>
        <div class="containerCarreProjet">
            <div class="alignementVertical containerCarre1">
                <div class="carreProjet">
                    <NuxtLink NuxtLink to="/projects/">
                        <img class="imageProjet" src="../assets/image/swoat.png" alt="">
                    </NuxtLink> 
                    <span class="petitCarreNumero">1</span>
                    <p class="titreCarre">Réseau social: S.W.O.A.T</p>
                </div>
            </div>
            <div class="alignementVertical containerCarre2">
                <div class="carreProjet">
                    <NuxtLink NuxtLink to="/projects/">
                        <img class="imageProjet" src="../assets/image/revengeway.png" alt="">
                    </NuxtLink>
                    <span class="petitCarreNumero">2</span>
                    <p class="titreCarre">Jeu vidéo: Revenge Way</p>
                </div>
            </div>
            <div class="alignementVertical containerCarre3">
                <div class="carreProjet">
                    <NuxtLink NuxtLink to="/projects/">
                        <img class="imageProjet" src="../assets/image/ordis.jpg" alt="">
                    </NuxtLink>
                    <span class="petitCarreNumero">3</span>
                    <p class="titreCarre">Hardware: montage de ce setup</p>
                </div>
            </div>
        </div>
    </div>
</template>
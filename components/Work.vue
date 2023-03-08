<template>
    <div class="containerTable">
        <h2 class="textAboutTitre">Experiences professionelles</h2>
        <table>
            <tr>
                <th>Date début</th>
                <th>Domaine et entreprise</th>
                <th>Lieu</th>
                <th>Durée</th>
                <th>Détails</th>
            </tr>
            <tr>
                <td>Décembre 2022</td>
                <td>Intérim à Action</td>
                <td>Thonon-les-bains</td>
                <td>1 semaine</td>
                <td>
                    <div class="text-center">
                        <v-dialog
                        v-model="dialog"
                        width="auto"
                        >
                            <template v-slot:activator="{ props }">
                                <v-btn
                                color="primary"
                                v-bind="props"
                                >
                                Voir détails
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-text>
                                Pendant les vacances de deux semaines, j'aime bien travailler en intérim pour me faire un peu d'argent
                                et pouvoir me faire plaisir pendant les cours. Et surtout je trouve ça important de rester dans un
                                rythme de travail même pendant les vacances pour ne pas perdre ma motivation à la rentrée des cours.
                                Pendant cette mission je faisais de la mise en rayon, de la gestion de caisse et je rangeais les rayons
                                qui étaient trop mal rangé.
                                </v-card-text>
                                <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Juillet 2022</td>
                <td>Mission intérim Adecco</td>
                <td>Thonon-les-bains</td>
                <td>3 mois</td>
                <td>
                    <div class="text-center">
                        <v-dialog
                        v-model="dialog3"
                        width="auto"
                        >
                            <template v-slot:activator="{ props }">
                                <v-btn
                                color="primary"
                                v-bind="props"
                                >
                                Voir détails
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-text>
                                Pendant l'été j'ai travaillé quasiment non-stop. Je voulais aller en vacance dans le sud avec
                                mes amis sans demander d'argent à mes parents. J'ai travaillé dans plusieurs endroits différents: <br>
                                - Carrefour: rayon multimédia, puis rayon découpe fromagerie / charcuterie <br>
                                - Kiabi: Déballage et pliage des nouvelles collections qui arrivaient. <br>
                                - Action: Quelques semaines de mises en rayon et de gestion de caisse. <br>
                                - Cora: Ma mission à durée quelques jours de mise en rayon le matin à 5h du matin jusqu'à midi. <br>

                                </v-card-text>
                                <v-card-actions>
                                <v-btn color="primary" block @click="dialog3 = false">Close Dialog</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Février 2022</td>
                <td>Stage Darty</td>
                <td>Thonon-les-bains</td>
                <td>6 semaines</td>
                <td>
                    <div class="text-center">
                        <v-dialog
                        v-model="dialog2"
                        width="auto"
                        >
                            <template v-slot:activator="{ props }">
                                <v-btn
                                color="primary"
                                v-bind="props"
                                >
                                Voir détails
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-text>
                                    Dans le cadre de mon BTS, j'ai fais un stage à Darty en tant que vendeur apprentis.
                                    Je conseillais les gens sur des produits tech et multimédia. J'ai adoré ce stage,
                                    J'allais tous les jours au travail avec le sourire car c'était ma première expérience 
                                    professionelle et que les gens avec qui je travaillais était vraiment bienveillant.
                                </v-card-text>
                                <v-card-actions>
                                <v-btn color="primary" block @click="dialog2 = false">Close Dialog</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'tousLesProjets',
    data() {
        return {
            dialog: false,
            dialog2: false,
            dialog3: false,
        }
    }
}
</script>

<style>
.bg-primary {
    background: red!important;
}
</style>
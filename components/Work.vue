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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <td>Février 2022</td>
                <td>Stage Darty</td>
                <td>Thonon-les-bains</td>
                <td>6 semaines</td>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </v-card-text>
                                <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
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
        }
    }
}
</script>
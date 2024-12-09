import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-2 space-y-12">
            <h1 className="text-4xl font-bold mb-4">HTML - 08 - Formulaires</h1>
            <section className="mb-6">
                <h4 className="text-lg font-semibold mb-4">
                    Les formulaires permettent à l'internaute d'effectuer une saisie et d'envoyer les informations saisies vers le serveur web afin d'y être traitées par un langage côté serveur.
                </h4>
                <p className="text-lg leading-relaxed mb-4">
                    Les saisies dans un formulaire peuvent s'effectuer par :
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Des champs de saisie de texte</li>
                    <li>Des zones de texte multilignes</li>
                    <li>Des listes de choix (listes déroulantes)</li>
                    <li>Des cases à cocher (checkbox) pour des choix multiples de réponses</li>
                    <li>Des boutons radio pour un choix unique de réponse</li>
                    <li>Il est aussi possible de télécharger un fichier</li>
                </ul>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Structure d'un formulaire</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Un formulaire commence par la balise <code>&lt;form&gt;</code> et se termine par la balise <code>&lt;/form&gt;</code> :
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form>
</form>`}</code>
                </pre>

                <h3 className="text-2xl font-semibold mb-4">Déclaration d'un formulaire</h3>
                <p className="text-lg leading-relaxed mb-4">
                    La balise <code>&lt;form&gt;</code> nécessite obligatoirement l'attribut <code>action</code>, tandis que d'autres attributs sont facultatifs.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form action="destination.php" method="post" id="formulaire_contact"> 
</form>`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">Voici l'explication des principaux attributs :</p>
                <table className="min-w-full bg-black text-blue-50 p-4 mb-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Attribut</th>
                            <th className="px-4 py-2 text-left">Utilité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2"><code>action</code></td>
                            <td className="px-4 py-2">
                                Spécifie l'URL du fichier qui traitera les données envoyées par le formulaire (par exemple, pour l'enregistrement en base de données).
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"><code>method</code></td>
                            <td className="px-4 py-2">
                                Cet attribut peut prendre deux valeurs :
                                <ul className="list-disc ml-6">
                                    <li><code>GET</code> : les données saisies sont ajoutées à l'URL (moins sécurisé).</li>
                                    <li><code>POST</code> : les données sont envoyées dans le corps de la requête, ce qui est plus sécurisé.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"><code>accept</code></td>
                            <td className="px-4 py-2">
                                Permet de restreindre le type de fichiers pouvant être téléchargés. Cependant, cela ne constitue pas une sécurité.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Champs de saisie</h2>
                <p className="text-lg leading-relaxed mb-4">
                    À l'intérieur de la balise <code>&lt;form&gt;</code>, on place tout le code permettant la saisie des données : champs de texte (<code>&lt;input&gt;</code>), listes déroulantes, et autres éléments de formulaire.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Exemple de formulaire avec champs de saisie</h3>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form action="destination.php" method="post"> 
   <input type="text" name="nom"> 
   <input type="text" name="prenom"> 
</form>`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    Les balises <code>&lt;input&gt;</code> permettent d'afficher des zones où l'internaute peut saisir du texte ou effectuer des choix. Plusieurs types de champs existent, que nous détaillerons plus loin dans ce cours.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Soumission du formulaire</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Pour envoyer un formulaire, il est nécessaire d'ajouter un champ de type <code>submit</code> avant la balise de fermeture <code>&lt;/form&gt;</code>.
                </p>

                <h4 className="text-lg font-semibold mb-4">Exemple de soumission d'un formulaire</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form action="destination.php" method="post"> 
   <input type="text" name="nom"> 
   <input type="text" name="prenom"> 
   <input type="submit" value="Envoyer"> 
</form>`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    Le champ <code>&lt;input type="submit"&gt;</code> crée un bouton permettant de soumettre le formulaire. Il peut aussi être remplacé par un bouton <code>&lt;button type="submit"&gt;</code> :
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<button type="submit">Envoyer</button>`}</code>
                </pre>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Les types de champs</h3>

                <h4 className="text-lg font-semibold mb-4">Champs de saisie de texte</h4>
                <p className="text-lg leading-relaxed mb-4">
                    L'internaute peut saisir une information dans un champ de saisie par l'intermédiaire de la balise <code>&lt;input type="text"&gt;</code>.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<label for="nom">Nom:</label><input type="text" name="nom" id="nom">`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    En HTML 5, la balise <code>&lt;input&gt;</code> ne nécessite pas de slash de fermeture : <code>&lt;input type="text"&gt;</code> et non <code>&lt;input type="text" /&gt;</code>.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    La balise <code>&lt;input&gt;</code> possède les attributs principaux suivants : seuls les attributs <code>type</code> et <code>name</code> sont obligatoires.
                </p>

                <h4 className="text-lg font-semibold mb-4">Exemple avec différents attributs :</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<label for="nom">Nom:</label><input type="text" name="nom" id="nom" size="50" maxlength="50" value="Dave LOPER">`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    Dans l'exemple ci-dessus, <code>Dave LOPER</code> est prérempli dans le champ en raison de l'attribut <code>value</code>.
                </p>

                <h4 className="text-lg font-semibold mb-4">Liste des attributs possibles :</h4>
                <ul className="list-disc ml-6">
                    <li><code>type</code>: Obligatoire - Le type de champ (par exemple, <code>text</code>, <code>radio</code>, etc.)</li>
                    <li><code>name</code>: Obligatoire - Le nom du champ, utilisé pour transmettre la donnée.</li>
                    <li><code>value</code>: Facultatif - Valeur par défaut du champ.</li>
                    <li><code>size</code>: Facultatif - Définit la largeur visible du champ en nombre de caractères.</li>
                    <li><code>maxlength</code>: Facultatif - Définit le nombre maximal de caractères que l'utilisateur peut saisir.</li>
                    <li><code>autocomplete</code>: Facultatif - Active l'autocomplétion pour le champ.</li>
                    <li><code>autofocus</code>: Facultatif - Donne le focus au champ dès le chargement de la page.</li>
                    <li><code>readonly</code>: Facultatif - Rend le champ en lecture seule, sans possibilité de modification.</li>
                    <li><code>disabled</code>: Facultatif - Désactive le champ, empêchant toute interaction.</li>
                    <li><code>placeholder</code>: Facultatif - Affiche un texte d'indication qui disparaît dès que l'utilisateur commence à saisir.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Exemple de formulaire avec champs de saisie</h3>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form action="destination.php" method="post">
   <input type="text" name="nom">
   <input type="text" name="prenom">
</form>`}</code>
                </pre>
            </section>
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Zones de saisie multi-ligness</h3>

                <p className="text-lg leading-relaxed mb-4">
                    Lorsque l'on veut saisir du texte sur plusieurs lignes ou un texte long, on passe par des zones de saisie multilignes à l'aide de la balise <code>&lt;textarea&gt;...&lt;/textarea&gt;</code>.
                </p>

                <h4 className="text-lg font-semibold mb-4">Exemple d'une zone de saisie multi-lignes :</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<textarea name="commentaire" rows="10" cols="50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec sagittis quis metus ornare semper. In vitae lacus ex. In elementum iaculis malesuada. 
                    Maecenas vulputate, erat id molestie dictum, diam dolor faucibus nisl, in pharetra sapien libero eget risus. 
                    Morbi vehicula aliquam placerat. Suspendisse mollis tempus dictum. Nullam suscipit nec massa eget viverra. 
                    Etiam feugiat facilisis est nec euismod. Quisque convallis, tortor sed placerat lacinia,
                     elit nunc volutpat arcu, vel consequat velit libero at tortor. 
                    Suspendisse interdum lacus non felis bibendum facilisis. In sit amet enim mauris.</textarea>`} {/*TODO Fix This !*/}
                    </code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    Cette zone de saisie peut contenir un texte long comme celui-ci et permettra à l'utilisateur de le modifier. Les ascenseurs verticaux et horizontaux peuvent apparaître si la taille de la zone de saisie est insuffisante pour afficher tout le texte.
                </p>

                <h4 className="text-lg font-semibold mb-4">Attributs de la balise <code>&lt;textarea&gt;</code> :</h4>
                <ul className="list-disc ml-6">
                    <li><code>name</code>: Obligatoire - Le nom du champ, utilisé pour transmettre la donnée.</li>
                    <li><code>rows</code>: Facultatif - Le nombre de lignes de texte visibles dans la zone de saisie.</li>
                    <li><code>cols</code>: Facultatif - Le nombre de caractères visibles par ligne dans la zone de saisie.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Exemple de formulaire avec zone de saisie multi-lignes</h3>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form action="destination.php" method="post">
   <textarea name="commentaire" rows="10" cols="50"></textarea>
</form>`}</code>
                </pre>
            </section>
            <section className="mb-6">

                <h3 className="text-lg font-semibold mb-4">Cases à cocher et boutons radio</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Les données peuvent être sélectionnées par l'internaute dans des cases à cocher (plusieurs choix), ou dans des boutons radio (choix unique). Pour cela, on utilise les balises suivantes :
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><code>&lt;input type="checkbox"&gt;</code>, pour les cases à cocher</li>
                    <li><code>&lt;input type="radio"&gt;</code>, pour les boutons radio</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">
                    Ces balises possèdent les attributs suivants :
                </p>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribut</th>
                            <th className="border px-4 py-2">Caractère</th>
                            <th className="border px-4 py-2">Utilité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">Obligatoire</td>
                            <td className="border px-4 py-2">Nom de la donnée, utilisé pour récupérer la donnée côté serveur</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">Obligatoire</td>
                            <td className="border px-4 py-2">Libellé correspondant à l'option choisie</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>checked</code></td>
                            <td className="border px-4 py-2">Facultatif</td>
                            <td className="border px-4 py-2">Indique que l'option sera sélectionnée par défaut</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-4">Exemple de cases à cocher</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<input type="checkbox" name="couleur1" value="Bleu" checked> Bleu
<input type="checkbox" name="couleur2" value="Rouge"> Rouge
<input type="checkbox" name="couleur3" value="Vert"> Vert`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Affiche :</p>
                <div className="ml-6">
                    <input type="checkbox" name="couleur1" value="Bleu" defaultChecked /> Bleu
                    <input type="checkbox" name="couleur2" value="Rouge" /> Rouge
                    <input type="checkbox" name="couleur3" value="Vert" /> Vert
                </div>

                <h4 className="text-lg font-semibold mb-4">Exemple de boutons radio</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<input type="radio" name="couleur" value="Bleu"> Bleu
<input type="radio" name="couleur" value="Rouge"> Rouge
<input type="radio" name="couleur" value="Vert" checked> Vert`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Affiche :</p>
                <div className="ml-6">
                    <input type="radio" name="couleur" value="Bleu" /> Bleu
                    <input type="radio" name="couleur" value="Rouge" /> Rouge
                    <input type="radio" name="couleur" value="Vert" defaultChecked /> Vert
                </div>

                <h4 className="text-lg font-semibold mb-4">Liste de choix (déroulantes)</h4>
                <p className="text-lg leading-relaxed mb-4">
                    L'internaute peut sélectionner les informations qu'il désire dans une liste pré-renseignée. La balise <code>&lt;select&gt;</code> permet de définir la liste des choix possibles.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<select name="couleur">
    <option>Bleu</option>
    <option>Rouge</option>
    <option>Vert</option>
</select>`}</code>
                </pre>

                <h4 className="text-lg font-semibold mb-4">Exemple avec attribut <code>selected</code></h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<label for="couleur">Choisissez votre couleur</label>
<select id="couleur">
    <option value="" selected>-</option>
    <option value="Bleu">Bleu</option>
    <option value="Rouge">Rouge</option>
    <option value="Vert">Vert</option>
</select>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Affiche :</p>
                <div className="ml-6">
                    <label htmlFor="couleur">Choisissez votre couleur</label>
                    <select id="couleur">
                        <option value="" selected>-</option>
                        <option value="Bleu">Bleu</option>
                        <option value="Rouge">Rouge</option>
                        <option value="Vert">Vert</option>
                    </select>
                </div>

                <h4 className="text-lg font-semibold mb-4">Exemple avec attribut <code>size</code> (valeur = 3)</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<label for="couleur">Choisissez votre couleur</label>
<select id="couleur" size="3">
    <option value="">-</option>
    <option value="Bleu">Bleu</option>
    <option value="Rouge">Rouge</option>
    <option value="Vert">Vert</option>
    <option value="Jaune">Jaune</option>
    <option value="Blanc">Blanc</option>
</select>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Affiche :</p>
                <div className="ml-6">
                    <label htmlFor="couleur">Choisissez votre couleur</label>
                    <select id="couleur" size={3}>
                        <option value="">-</option>
                        <option value="Bleu">Bleu</option>
                        <option value="Rouge">Rouge</option>
                        <option value="Vert">Vert</option>
                        <option value="Jaune">Jaune</option>
                        <option value="Blanc">Blanc</option>
                    </select>
                </div>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Chargement de fichiers</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Le type <code>file</code> sur une balise <code>&lt;input&gt;</code> permet le téléchargement d'un fichier du PC de l'utilisateur sur le serveur où est hébergée la page web.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Exemple de formulaire pour le téléchargement d'un fichier :
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<form action="destination.php" method="post" enctype="multipart/form-data">
    <input type="file" name="fichier">
</form>`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    Exemple pour n'autoriser que les fichiers <code>.png</code> :
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<input type="file" name="fichier" accept="image/png">`}</code>
                </pre>

                <h4 className="text-lg font-semibold mb-4">Attributs additionnels pour le type <code>file</code></h4>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribut</th>
                            <th className="border px-4 py-2">Utilité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>multiple</code></td>
                            <td className="border px-4 py-2">Permet la sélection multiple de fichiers</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>required</code></td>
                            <td className="border px-4 py-2">Indique que le champ est requis</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>accept</code></td>
                            <td className="border px-4 py-2">Permet de restreindre les types de fichiers acceptés (par exemple, <code>image/png</code>)</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-4">Champs cachés</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Il est possible d'envoyer des données cachées au serveur en utilisant la balise <code>&lt;input type="hidden"&gt;</code>.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<input type="hidden" name="user_id" value="12345">`}</code>
                </pre>

                <h4 className="text-lg font-semibold mb-4">Étiquette de champs</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Pour indiquer à l'internaute quelle est l'information à saisir, on utilise la balise <code>&lt;label&gt;</code> avec l'attribut <code>for</code> qui doit correspondre à l'id du champ de formulaire.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<label for="nom">Nom :</label><input type="text" name="nom" id="nom">`}</code>
                </pre>

                <h4 className="text-lg font-semibold mb-4">Groupes de champs</h4>
                <p className="text-lg leading-relaxed mb-4">
                    La balise <code>&lt;fieldset&gt;</code> permet de regrouper des champs dans un formulaire, et la balise <code>&lt;legend&gt;</code> attribue un nom au groupe.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<fieldset>
    <legend>Coordonnées</legend>
    <label for="nom">Nom:</label><input type="text" name="nom" id="nom"><br>
    <label for="email">Email:</label><input type="email" name="email" id="email"><br>
    <label for="date">Date de naissance:</label><input type="date" name="ddn" id="date">
</fieldset>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Affiche :</p>
                <fieldset className="border p-4">
                    <legend className="text-xl font-semibold">Coordonnées</legend>
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" name="nom" id="nom" className="border p-2 mb-2" />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="border p-2 mb-2" />
                    <br />
                    <label htmlFor="date">Date de naissance:</label>
                    <input type="date" name="ddn" id="date" className="border p-2 mb-2" />
                </fieldset>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Datalist</h3>
                <p className="text-lg leading-relaxed mb-4">
                    HTML5 a introduit l'élément <code>&lt;datalist&gt;</code> qui permet de proposer une liste d'éléments en suggestion/autocomplétion lorsqu'un utilisateur saisit du texte dans un champ <code>&lt;input&gt;</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Exemple d'utilisation de la balise <code>&lt;datalist&gt;</code> :
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<label for="metiers2">Sélectionnez votre métier</label>
<input type="text" name="metiers1" id="metiers2" list="metiers3">
<datalist id="metiers3">
    <option value="webmaster">
    <option value="développeur">
    <option value="administrateur B.D.D.">
    <option value="webdesigner">
</datalist>`}</code>
                </pre>

                <h4 className="text-lg font-semibold mb-4">Validation des formulaires</h4>
                <p className="text-lg leading-relaxed mb-4">
                    HTML5 propose des attributs pour aider à la validation des formulaires côté client. Ces attributs n'assurent pas une validation sécurisée, mais améliorent l'expérience utilisateur.
                </p>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribut</th>
                            <th className="border px-4 py-2">Utilité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>required</code></td>
                            <td className="border px-4 py-2">Indique qu'un champ est obligatoire</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>pattern</code></td>
                            <td className="border px-4 py-2">Spécifie un motif d'expression régulière pour valider la saisie</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>title</code></td>
                            <td className="border px-4 py-2">Personnalisation du message d'erreur de validation</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-lg leading-relaxed mb-4">
                    Exemple d'un champ avec <code>pattern</code> et <code>required</code> :
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<input type="text" placeholder="Entrez votre nom" pattern="^[a-z]+$" required title="Entrez votre nom (que des caractères entre a et z)">`}</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">Affiche un champ de texte avec validation :</p>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="metiers2" className="block">Sélectionnez votre métier :</label>
                        <input type="text" name="metiers1" id="metiers2" list="metiers3" className="border p-2 w-full" />
                        <datalist id="metiers3">
                            <option value="webmaster" />
                            <option value="développeur" />
                            <option value="administrateur B.D.D." />
                            <option value="webdesigner" />
                        </datalist>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="nom" className="block">Nom :</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Entrez votre nom"
                            pattern="^[a-z]+$"
                            required
                            title="Entrez votre nom (que des caractères entre a et z)"
                            className="border p-2 w-full"
                        />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Page;

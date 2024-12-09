import Link from "next/link";

export default function CssSolutions() {
    return (
        <div className="px-6 py-8 space-y-12">
            <h1 className="text-4xl font-bold text-center mb-10">Solutions : Exercices CSS</h1>

            {/* Présentation du CSS */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">1. Présentation du CSS</h2>
                <p className="text-lg leading-relaxed">
                    Voici comment ajouter une feuille de style CSS et styliser une page simple.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* HTML */
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercice CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>

/* style.css */
body {
  color: blue;
  font-family: Arial, sans-serif;
}`}
                    </pre>
                </div>
            </section>

            {/* Sélecteurs */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">2. Sélecteurs</h2>
                <p className="text-lg leading-relaxed">
                    Exemple d'utilisation de sélecteurs simples et avancés.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* CSS */
h1 {
  border: 2px solid red;
}

.highlight {
  background-color: yellow;
}`}
                    </pre>
                </div>
            </section>

            {/* Couleurs et polices de caractères */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">3. Couleurs et Polices de caractères</h2>
                <p className="text-lg leading-relaxed">
                    Utilisation de couleurs et de polices personnalisées.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* CSS */
body {
  background-color: rgba(255, 99, 71, 0.5); /* Transparent tomato */
  font-family: 'Roboto', sans-serif; /* Import depuis Google Fonts */
}

/* Ajouter dans le <head> du HTML */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
`}
                    </pre>
                </div>
            </section>

            {/* Modèles de boîtes */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">4. Modèles de Boîtes</h2>
                <p className="text-lg leading-relaxed">
                    Gestion des dimensions, marges et débordements.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* CSS */
.box {
  border: 2px solid black;
  padding: 10px;
  margin: 20px;
  width: 200px;
  height: 100px;
  overflow: hidden; /* Gère le débordement */
}
`}
                    </pre>
                </div>
            </section>

            {/* Positionnement */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">5. Positionnement</h2>
                <p className="text-lg leading-relaxed">
                    Exemple d'utilisation des propriétés de positionnement.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* CSS */

/* Position absolute */
.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Position sticky */
.sticky-nav {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}`}
                    </pre>
                </div>
            </section>

            {/* Responsive */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">6. Responsive Design</h2>
                <p className="text-lg leading-relaxed">
                    Exemple d'utilisation des media queries.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* CSS */

/* Mise en page en trois colonnes */
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 200px;
}

/* Media query pour mobile */
@media (max-width: 600px) {
  .column {
    flex: 100%; /* Une seule colonne */
  }

  body {
    background-color: lightblue; /* Change la couleur selon la largeur */
  }
}`}
                    </pre>
                </div>
            </section>

            <div className="text-center mt-8">
                <Link href="css07_exercices" className="text-blue-600 underline text-lg">
                    Retour aux exercices
                </Link>
            </div>
        </div>
    );
}

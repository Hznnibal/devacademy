import Link from "next/link";

export default function CssExercises() {
    return (
        <div className="px-6 py-8 space-y-12">
            <h1 className="text-4xl font-bold text-center mb-10">Exercices CSS</h1>

            {/* Présentation du CSS */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">1. Présentation du CSS</h2>
                <p className="text-lg leading-relaxed">
                    Le CSS (Cascading Style Sheets) est utilisé pour styliser le HTML et gérer l'apparence des éléments.
                    Il permet de définir des couleurs, des tailles, des polices, et bien plus encore.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg font-medium">Exercice :</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Ajoutez une feuille de style CSS à un document HTML donné.</li>
                        <li>Changez la couleur du texte en bleu et le style de police en *Arial*.</li>
                    </ul>
                </div>
            </section>

            {/* Sélecteurs */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">2. Sélecteurs</h2>
                <p className="text-lg leading-relaxed">
                    Les sélecteurs CSS permettent de cibler des éléments HTML spécifiques pour appliquer des styles.
                    Vous pouvez utiliser des sélecteurs simples comme <code className="bg-gray-100 px-1 rounded">.classe</code> ou
                    <code className="bg-gray-100 px-1 rounded">#id</code>, ou des sélecteurs avancés comme
                    <code className="bg-gray-100 px-1 rounded">:hover</code>.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg font-medium">Exercice :</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Ciblez tous les titres <code>h1</code> et donnez-leur une bordure rouge.</li>
                        <li>Appliquez une couleur de fond jaune aux paragraphes contenant la classe <code>.highlight</code>.</li>
                    </ul>
                </div>
            </section>

            {/* Couleurs et polices de caractères */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">3. Couleurs et Polices de caractères</h2>
                <p className="text-lg leading-relaxed">
                    Les couleurs peuvent être définies avec des mots-clés, des codes hexadécimaux, ou des fonctions comme
                    <code className="bg-gray-100 px-1 rounded">rgb()</code>. Les polices de caractères peuvent être importées depuis Google Fonts.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg font-medium">Exercice :</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Changez la couleur d'arrière-plan d'une page en utilisant une couleur <code>rgba()</code>.</li>
                        <li>Utilisez une police de caractères personnalisée pour le texte principal.</li>
                    </ul>
                </div>
            </section>

            {/* Modèles de boîtes */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">4. Modèles de Boîtes</h2>
                <p className="text-lg leading-relaxed">
                    En CSS, chaque élément est une boîte. Les dimensions sont définies par les propriétés
                    <code className="bg-gray-100 px-1 rounded">width</code>, <code className="bg-gray-100 px-1 rounded">height</code>,
                    <code className="bg-gray-100 px-1 rounded">padding</code>, <code className="bg-gray-100 px-1 rounded">margin</code>, et
                    <code className="bg-gray-100 px-1 rounded">border</code>.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg font-medium">Exercice :</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Créez une boîte avec une bordure noire, un espace intérieur de 10px, et un espace extérieur de 20px.</li>
                        <li>Expérimentez avec la propriété <code>overflow</code> pour gérer les contenus trop longs.</li>
                    </ul>
                </div>
            </section>

            {/* Positionnement */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">5. Positionnement</h2>
                <p className="text-lg leading-relaxed">
                    Les éléments peuvent être positionnés avec la propriété <code className="bg-gray-100 px-1 rounded">position</code> :
                    <code className="bg-gray-100 px-1 rounded">static</code>, <code className="bg-gray-100 px-1 rounded">relative</code>,
                    <code className="bg-gray-100 px-1 rounded">absolute</code>, <code className="bg-gray-100 px-1 rounded">fixed</code>, ou
                    <code className="bg-gray-100 px-1 rounded">sticky</code>.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg font-medium">Exercice :</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Positionnez une boîte en haut à droite de la page en utilisant <code>absolute</code>.</li>
                        <li>Utilisez <code>sticky</code> pour créer une navigation qui reste visible au défilement.</li>
                    </ul>
                </div>
            </section>

            {/* Responsive */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">6. Responsive Design</h2>
                <p className="text-lg leading-relaxed">
                    Le design responsive permet aux pages web de s'adapter aux différentes tailles d'écran. Utilisez les
                    <code className="bg-gray-100 px-1 rounded">media queries</code> pour appliquer des styles spécifiques aux appareils.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg font-medium">Exercice :</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Créez une mise en page avec trois colonnes qui devient une seule colonne sur mobile.</li>
                        <li>Changez la couleur de fond en fonction de la largeur de l'écran.</li>
                    </ul>
                </div>
            </section>

            <div className="text-center mt-8">
                <Link href="solutions" className="text-blue-600 underline text-lg">
                    Voir les solutions
                </Link>
            </div>
        </div>
    );
}

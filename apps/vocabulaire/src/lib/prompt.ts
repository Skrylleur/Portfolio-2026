export const CSV_PHOTO_PROMPT = `À partir de la ou des photos que je t’envoie, extraits uniquement le vocabulaire et génère un CSV prêt à importer dans mon application de révision.

Format obligatoire :
- Une seule ligne par mot ou expression.
- Colonne 1 : français.
- Colonnes suivantes : un équivalent anglais par colonne (jamais plusieurs traductions dans la même cellule).
- Première ligne d’en-tête exactement : français,anglais
- Séparateur : virgule (pas de point-virgule).
- UTF-8, sans BOM.
- Si un terme contient une virgule, entoure toute la cellule de guillemets doubles.
- Pas de numérotation, pas de commentaires, pas de markdown, pas de bloc de code : uniquement le CSV brut.
- Ignore titres, consignes, numéros de page et phrases d’exemple trop longues. Garde les termes et expressions à apprendre.
- Si tu hésites entre plusieurs traductions, ajoute une colonne par équivalent.

Exemple de sortie :
français,anglais
bilan,balance sheet,statement of financial position
chiffre d'affaires,turnover,revenue
actif,asset`

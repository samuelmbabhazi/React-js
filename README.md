# React-js

## Context

Le contexte est conçu pour partager des données qui peuvent être considérées comme “ global ” pour un arbre de composants React

useContext() hook appartient à l'API Context qui est utilisée pour la gestion de l'état dans React.

### Qu'est-ce que l'API React Context?

React Context met facilement les données à la disposition des composants sans les transmettre manuellement dans l'arborescence des composants. L'API contextuelle est une alternative simple à la bibliothèque Redux. Les deux sont utilisés pour la gestion de l'État central.

### Comment utiliser l'API React Context.

L'utilisation de l'API contextuelle dans React est un processus en 3 étapes.

Créer le contexte
Fournir le contexte
Consumer le contexte

#### Créer le contexte:

Dans la première étape, nous créons un contexte à l'aide du createContext(default) fonction. Cette fonction prend un paramètre facultatif qui est la valeur par défaut.

import React from 'react';
const ApplicationContext = React.createContext()

Le ApplicationContext objet contient deux propriétés, fournisseur et consommateur. Fournisseur pour fournir le contexte ( données ) et consommateur pour consommer le contexte ( données ).

#### Fournissez le contexte:

Une fois que nous avons créé le contexte, nous enveloppons les composants enfants à l'intérieur du fournisseur. Pendant l'emballage, nous dépassons nos valeurs d'état central que nous souhaitons consommer dans nos composants enfants. Cette valeur peut être une chaîne, un nombre ou même un tableau ou un objet. Ici, nous passons “ Anurag ” comme valeur. Ici Main est le composant qui contient un autre arbre de composant.

<ApplicationContext.Provider value="Anurag">

<Main/>
</ApplicationContext.Provider>

Voici comment mon App.js le fichier ressemble aux deux premières étapes.

import React, { useContext } from "react";

const ApplicationContext = React.createContext();

export default function App() {
return (
<ApplicationContext.Provider value="Anurag">

<Main />
</ApplicationContext.Provider>
);
}

#### Consommez le contexte

Utilisez maintenant le composant Consumer in the Child de l'arborescence des composants pour extraire la copie des données d'état. Vous pouvez extraire les données de deux manières, en utilisant Consumer Composant ou en utilisant le useContext() crochet.

Utilisation <ApplicationContext.Consumer/> :

<ApplicationContext.Consumer>
{user =><h1>{user}</h1>}
</ApplicationContext.Consumer>

Utilisation useContext() :

function Profile(){

const user = useContext(ApplicationContext);

return (

<div>
<p>Username : {user}</p>
<UserCard />
</div>
)
}

Voici un exemple complet. Créer un nouveau projet de réaction ajouter le code suivant dans App.js. J'ai implémenté les composants enfants dans le même fichier pour plus de simplicité.

import React, { useContext } from "react";

//Creating Context
const ApplicationContext = React.createContext();

export default function App() {

return (
<ApplicationContext.Provider value="Anurag">

<Main />
</ApplicationContext.Provider>
);
}

function Main(){
return(

<div>
<Profile/>
</div>
)
}

function Profile(){

//Using useContext()
const user = useContext(ApplicationContext);

return (

<div>
<p>Username : {user}</p>
<UserCard />
</div>
)
}

function UserCard() {

//Using Context
return(

<div>
<ApplicationContext.Consumer>
{user =><h1>{user}</h1>}
</ApplicationContext.Consumer>
</div>
)
}

# Chat App /  Structure principale du backend


## Description

Ce projet est une application de chat construite avec React. Elle utilise Firebase pour l'authentification 
des utilisateurs et Firestore comme base de données pour stocker les détails des utilisateurs, les discussions, 
et les messages. Le stockage Firestore est également utilisé pour télécharger des avatars et des images de chat.

## Fonctionnalités Principales

- **Authentification Firebase :** Permet aux utilisateurs de s'identifier et de s'enregistrer dans l'application.
- **Firestore DataBase :** Utilisée pour stocker les informations des utilisateurs, ainsi que les discussions et messages.
- **FireStor Stockage :** Permet le téléchargement et le stockage des avatars des utilisateurs et des images envoyées dans les chats.

## Architecture

L'application est divisée en plusieurs composants principaux :

- **Composant Utilisateur :** Gère l'inscription et l'authentification des utilisateurs.
- **Composant Chat :** Permet aux utilisateurs de créer des discussions, d'envoyer et de recevoir des messages.
- **Composant Stockage :** Gère le téléchargement et le stockage des images.

## Démarrage Rapide

1. Clonez le dépôt :
 git clone url_du_dépôt
2. Installez les dépendances :
   npm install
3. Lancez l'application :
   npm run dev

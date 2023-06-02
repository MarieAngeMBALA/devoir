import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Inscription</title>
  <style>
    
    
    .header {
      width: 100%;
      background-color: blue;
      color: white;
    }
    
    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      background-color: white;
      color: black;
    }
    
    .menu .bouton {
      background-color: white;
      color: black;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      margin-right: 10px;
      cursor: pointer;
    }
    
    .menu .bouton-connexion {
      background-color: blue;
      color: white;
    }
    
    
      
      .barre-recherche {
        margin: 0 10px;
        padding: 5px;
      }
      
      nav ul {
        list-style: none;
        display: flex;
      }
      
      nav ul li {
        margin-right: 10px;
      }
      
      nav ul li a {
        text-decoration: none;
        color: black;
      }
      
      .bouton-connexion {
        background-color: #0000FF;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        margin-right: 10px;
      }
    
      .contenu {
        background-image: url(./assets/fondgamer.png);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;color: white;
      }
      
     
      .utilisation-principale h3 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      .utilisation-principale .cases label {
        font-size: 18px; 
        margin-right: 10px;
      }
      
      .bouton {
        font-size: 20px; 
        background-color: #0000FF;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
      }
      
      
  
    p {
      font-size: 16px;
      margin-bottom: 20px;
    }
    
    .pied-de-page {
      background-color: white;
      padding: 10px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
   
    }
  
    .pied-de-page img {
      margin-right: 10px; 
    }
    
    
    .texte-centre {
    text-align: center;
  }
    
  </style>
  </head>
  <body>
  
    <main class="contenu">
    <div class="rectangle">
      <div class="utilisation-principale">
        <h3>1-Utilisation principale du PC</h3>
        <div class="cases">
          <label>
            <input type="checkbox" name="utilisation-1">
            Navigation sur internet
          </label>
          <label>
            <input type="checkbox" name="utilisation-2">
            Jeu
          </label>
          <label>
            <input type="checkbox" name="utilisation-3">
          creaction de contenu
          </label>
        </div>
      </div>
      <div class="utilisation-principale">
          <h3>2-Votre Budget</h3>
          <div class="cases">
            <label>
              <input type="checkbox" name="utilisation-1">
             peu chere
            </label>
            <label>
              <input type="checkbox" name="utilisation-2">
              prix abordable
            </label>
            <label>
              <input type="checkbox" name="utilisation-3">
             peu importe
            </label>
          </div><br>
          <label>
              <input type="checkbox" name="utilisation-3">
             Ordinateur bureau
            </label>
            <label>
              <br><input type="checkbox" name="utilisation-3">
             Ordinateur portable
            </label>
        </div>
        <div class="utilisation-principale">
          <h3>3-Taille du PC</h3>
          <div class="cases">
            <label>
              <input type="checkbox" name="utilisation-1">
              Grand
            </label>
            <label>
              <input type="checkbox" name="utilisation-2">
              Moyen
            </label>
            <label>
              <input type="checkbox" name="utilisation-3">
              Petit
            </label>
            <label>
              <input type="checkbox" name="utilisation-3">
              Peu importe
            </label>
          </div>
        </div>
        <div class="utilisation-principale">
          <h3>4-Niveau De Performance</h3>
          <div class="cases">
            <label>
              <input type="checkbox" name="utilisation-1">
              Tres performant 
            </label>
            <label>
              <input type="checkbox" name="utilisation-2">
              Performance moyenne
            </label>
            <label>
              <input type="checkbox" name="utilisation-3">
              Peu importe
            </label>
          </div>
        </div>
        <div class="utilisation-principale">
          <h3>5- Des Fonctionnalitées specifiques</h3>
          <div class="cases">
            <label>
              <input type="checkbox" name="utilisation-1">
              Oui 
            </label>
            <label>
              <input type="checkbox" name="utilisation-2">
              Nom
            </label>
            <label>
              <input type="checkbox" name="utilisation-3">
              Peu importe
            </label><br>
            <label for="notification">Si oui, veuillez notifier:</label><br>
    <textarea id="notification" name="notification"></textarea>
          </div>
        </div>
        <div class="utilisation-principale">
          <h3>6-Avez vous une Marque Particulieres ?</h3>
          <div class="cases">
            <label>
              <input type="checkbox" name="utilisation-1">
              Oui 
            </label>
            <label>
              <input type="checkbox" name="utilisation-2">
              Nom
            </label><br>
            
            <label for="notification">Si oui, veuillez notifier:</label><br>
    <textarea id="notification" name="notification"></textarea>
          </div>
        </div>
        <button class="bouton"  routerLink="/gamer">Voir les PC correspondants</button>
    </div>
    </main>
    
    </body>
    </html>
    
  
  `,
})
export class DialogComponent {}

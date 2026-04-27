import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  constructor(private rourer: Router) {
  
  }
   ngOnInit() {
   this.loadGoogleMapsApi();  
  }

  loadGoogleMapsApi() {
    // בדיקה כדי לוודא שלא טענו את הסקריפט כבר (מונע שגיאות בניווט בין עמודים)
    if (document.getElementById('google-maps-script')) {
      return;
    }
    // יצירת תגית ה-script דרך קוד
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    
    // כאן אנחנו מכניסים את המפתח מתוך ה-environment!
    // שימי לב שהשתמשתי בגרשיים אלכסוניים (Backticks) כדי לאפשר שילוב משתנים
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
    
    script.async = true;
    script.defer = true;
    
    // הוספת הסקריפט לראש העמוד (head)
    document.head.appendChild(script);
  }
}


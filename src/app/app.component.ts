import { Component } from '@angular/core';
import { AnimateExampleComponent } from './components/animate.example.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <animate-example></animate-example>
  `,  
})
export class AppComponent  { name = 'Angular'; }

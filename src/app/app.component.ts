import {Component} from '@angular/core';
import {Entreprise} from "./Entreprise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-03';

  entreprise = new Entreprise("Cosling");

  enleverPersonne(id: number) {
    this.entreprise.deletePersonne(id);
  }

}

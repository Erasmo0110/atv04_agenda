import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController,
              private rota: ActivatedRoute  ) {}

  enviar(){
    console.log("cheguei aqui");

    this.nav.navigateForward("form-tarefa");
    console.log("Continuo aqui.");
  }

  contato(){
    console.log("cheguei aqui");

    this.nav.navigateForward("form-contato");
    console.log("continuo aqui.");
  }
}

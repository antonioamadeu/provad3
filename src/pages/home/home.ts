import { Component, ɵConsole } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nome = "";

  constructor(public navCtrl: NavController) {

  }

public onAddClick(nome){
  console.log("teste"+ nome);
  this.navCtrl.push('ChatPage', {nome});
};

}

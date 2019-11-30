import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mensagemService } from '../../mensagemServise';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  mensagems;
  mensagem ="";
  nome ="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public msgService: mensagemService) {
    this.mensagems = msgService.fechContatos();
    this.nome = this.navParams.get("nome");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  public addMensagem(){
      mensagemService.addMensagem(this.mensagem);
  }

}

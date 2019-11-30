import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class mensagemService{
  static addMensagem: any;

  constructor(public db: AngularFireDatabase){

  }
        public fechContatos(){
          return this.db.list("/mensagem");
        }

        public addMensagem(mensagem){
          this.db.list('/mensagem').push({
            nome: mensagem.nome,
            mensagem: mensagem.mensagem,
          });
         }    
       
}


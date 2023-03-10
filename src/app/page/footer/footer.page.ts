import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/DataBase/database.service';
import { UtilityService } from 'src/app/DataBase/Utility.sevice';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(

    //Nosso serviço de banco de dados(CRUD)

    private DataBase: DatabaseService,

    //método alertConroller, ferramenta que cria
    //os alerts

    private alertCtrl: AlertController,

    //Serviços de interação com o usuário

    private utilidades: UtilityService

  ) { }

  ngOnInit() {}

//Método do alertando

async alertando(){

  const alert = this.alertCtrl.create({

    mode:"ios",
    header: "Cadastro de Produtos",
    inputs: [
      {
        name:"produto",
        type: "text",
        placeholder: "Informe o produto"
      },

      {
        name: "qtd",
        type: "number",
        placeholder: "Informe a quantidade"

      }
    ]
  })
}


}

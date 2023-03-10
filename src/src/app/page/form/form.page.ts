import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { DatabaseService } from 'src/app/DataBase/database.service';
import { UtilityService } from 'src/app/DataBase/Utility.sevice';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

//Essa ferramenta serve para capturar a rota(caminho),
//que será ativada quando botão for clicado.

  constructor(

    private activateRoute: ActivatedRoute,
    private router: Router,
    private banco: DatabaseService,
    private util: UtilityService

  ) { }

  routeId = null; //Variável que guarda a rota.

  produto: any = {};

  ngOnInit() {

    this.routeId = this.activateRoute.snapshot.params['id'];


    if(this.routeId){

      //Se o id do produto for encontrado 
      //Ativa o banco de dados

      this.banco.getOneItem(this.routeId).
      subscribe(caixa => {this.produto = caixa});
      
    }
  }

  //Método que chama o serviço de atualização

  update(form: any){

   this.banco.updateItem(this.routeId, form);
   this.router.navigate['']

  this.util.tostando("item Atualizado com sucesso",
   "middle", 2000, "medium");
     }

   //declations: [FormPage]
     
}





import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http'
import { Produto } from '../model/produto';
import { IonItem } from '@ionic/angular';
import { identity } from 'rxjs';



@Injectable({
  providedIn: 'root'
})





export class DatabaseService {

    constructor(private http: HttpClient) { }

    //informa ao Http que a estrutura passada é do tipo Json.
  HttpOptions = { 

    headers: new HttpHeaders({'Content-Type' : 'applications/json'})

  }

  //API é o nome da variável que será só de leitura(READONLY)
  readonly API = "http://localhost:3000/lista";



  getItem(){

    return this.http.get<Produto[]>(this.API);

  }


  //Métdo trazer um único item
getOneItem(id: number){

 return this.http.get<Produto>(this.API + id);

}

//Método para apagar um item

delItem(id:number){

return this.http.delete(this.API + id).subscribe()

}

//Método de alteração de status


statusItem(item: Produto){

return this.http.put(this.API + item.id, 
  JSON.stringify(item),
  this.HttpOptions).subscribe();

 }

 //Métodos para atualizar os dados

 updateItem(id: any, item: Produto){

  return this.http.put(this.API + id, 
  JSON.stringify(item),
  this.HttpOptions).subscribe()

 }

//Método para cadastrar um item

posItem(dados: any){

  return this.http.post(
    this.API, JSON.stringify(dados),
    this.HttpOptions).subscribe()

}



} 



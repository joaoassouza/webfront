import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.component.html',
  styleUrl: './validacao.component.css'
})
export class ValidacaoComponent {
  //é para setar algo logo quando o compoonente carregar
  onSubmit(myForm: NgForm){
    if(myForm.valid){
      alert("bagua enviado");
    }
  } 
}

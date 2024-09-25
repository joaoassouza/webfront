import { Component } from '@angular/core';

interface Pessoa {
  nome: String;
  idade: number;
  ativo: boolean;
}

interface Tarefa {
  nome: String;
  concluida: boolean;
}

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {
  exibir: boolean = true;

  nomes: string[] = ['ana', 'maria', 'pedro', 'gabril'];

  tipoAutomovel: string = 'carro';

  isActive: boolean = true;

    listaTarefas: Tarefa[] = [
      { nome: 'Lavar o carro', concluida: true },
      { nome: 'Passear com o cachorro', concluida: false },
      { nome: 'Arrumar a cama', concluida: true },
      { nome: 'Codar o MACOS em python', concluida: false },
      { nome: 'Subir o sistema', concluida: true },
    ];

    concluir(tarefa: Tarefa){
      tarefa.concluida = !tarefa.concluida;
    }


}

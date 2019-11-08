import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamilia)
    console.log("Objeto familia recebido do componente pai via input: ", this.recebeFamilia)
  }

  feedback(){
    console.log("Resposta para o component pai",
          this.respostaFamilia.emit({"nome": "Raimundo", "sobrenome" : "nonato"})
      )
  }

}

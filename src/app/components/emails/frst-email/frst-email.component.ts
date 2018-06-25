import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-frst-email',
  templateUrl: './frst-email.component.html',
  styleUrls: ['./frst-email.component.scss']
})

export class FrstEmailComponent implements OnInit {

  clientName: string;
  agentName: string;
  accountManager: string;
  typeImp: string;
  dateImp: string;
  timeImp: string;
  phoneCliente: string;
  timeZone: string;
  cidCod: string;
  hangRoom: string;
  urlWeb: string = "Consultoria de Implementação de Tags do Google - ";

  @Input() formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.logChange();
  }

  logChange() {
    const nameControl = this.formulario.get('nomeCliente');
    nameControl.valueChanges.forEach(
      (value: string) => this.clientName = value
    );

    const agentControl = this.formulario.get('nomeAgente');
    agentControl.valueChanges.forEach(
      (value: string) => this.agentName = value
    );

    const accManControl = this.formulario.get('gerenteConta');
    accManControl.valueChanges.forEach(
      (value: string) => this.accountManager = value
    );

    const typeImpControl = this.formulario.get('tipoImp');
    typeImpControl.valueChanges.forEach(
      (value: string) => this.typeImp = value
    );

    const phoneControl = this.formulario.get('telefone');
    phoneControl.valueChanges.forEach(
      (value: string) => this.phoneCliente = value
    );

    const dateControl = this.formulario.get('dataImp');
    dateControl.valueChanges.forEach(
      (value: string) => this.dateImp = value
    );

    const timeControl = this.formulario.get('horarioImp');
    timeControl.valueChanges.forEach(
      (value: string) => this.timeImp = value
    );

    const zoneControl = this.formulario.get('fusoHorario');
    zoneControl.valueChanges.forEach(
      (value: string) => this.timeZone = value
    );

    const cidControl = this.formulario.get('cidCode');
    cidControl.valueChanges.forEach(
      (value: string) => this.cidCod = value
    );

    const urlControl = this.formulario.get('urlSite');
    urlControl.valueChanges.forEach(
      (value: string) => this.urlWeb = "Consultoria de Implementação de Tags do Google - " + value
    );

    const salaControl = this.formulario.get('salaHangouts');
    salaControl.valueChanges.forEach(
      (value: string) => this.hangRoom = value
    );
  }

  selecionaTexto($event) {
    $event.target.select();
  }

  copiaEmail(divEl,emptDiv){
    window.getSelection().selectAllChildren(divEl);
		document.execCommand('copy');	
		window.getSelection().selectAllChildren(emptDiv);
  }

}

import { Times } from './../models/times.model';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { DropdownService } from './../../emails/services/dropdown.service';

@Component({
  selector: 'app-input-cases',
  templateUrl: './input-cases.component.html',
  styleUrls: ['./input-cases.component.scss']
})
export class InputCasesComponent implements OnInit {

  @Output() formulario: FormGroup;
  timesDrop: Times;
  timesZoneDrop: Times;

  constructor(
    private formBuilder: FormBuilder,
    private dropDonwService: DropdownService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nomeCliente: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      nomeAgente: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      gerenteConta: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      tipoImp: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      telefone: [null, Validators.required],
      dataImp: [null, Validators.required],
      horarioImp: [null, Validators.required],
      fusoHorario: [null, Validators.required],
      cidCode: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])],
      urlSite: [null, Validators.required],
      salaHangouts: [null, Validators.required]
    });

    this.dropDonwService.getTimes().subscribe(dados => this.timesDrop = dados);

    this.dropDonwService.getTimeszone().subscribe(dadoZone => this.timesZoneDrop = dadoZone);
  }
}

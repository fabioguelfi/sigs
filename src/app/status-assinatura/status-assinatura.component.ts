import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-status-assinatura',
  templateUrl: './status-assinatura.component.html',
  styleUrls: ['./status-assinatura.component.css'],
  providers: [DataService]
})
export class StatusAssinaturaComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.getUrlTeste())
  }

}

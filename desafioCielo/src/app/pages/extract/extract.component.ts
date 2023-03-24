import { Component, OnInit } from '@angular/core';
import { ServiceMockService } from 'src/app/service/service-mock.service';
import { ExtractModel } from './../../models/extract';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  public extract: any;

  constructor( private serviceMock: ServiceMockService ) {}
  ngOnInit(): void {


    this.serviceMock.getExtract().subscribe(
      {
        next: (value) => {
          this.extract = value.items;
          console.log('retorno', this.extract);
        },
        error: (erro) => {
                console.log(erro)
        }
    }
    )

  }

}

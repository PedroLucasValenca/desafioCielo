import { Component, OnInit } from '@angular/core';
import { ServiceMockService } from 'src/app/service/service-mock.service';

@Component({
  selector: 'app-summary-period',
  templateUrl: './summary-period.component.html',
  styleUrls: ['./summary-period.component.scss']
})
export class SummaryPeriodComponent implements OnInit {


  public summary: any;

  constructor( private serviceMock: ServiceMockService ) {}
  ngOnInit(): void {


    this.serviceMock.getExtract().subscribe(
      {
        next: (value) => {
          this.summary = value.summary;
          console.log('retorno summary', this.summary);
        },
        error: (erro) => {
                console.log(erro)
        }
    }
    )

  }

}

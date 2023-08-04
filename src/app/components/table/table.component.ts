import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableRequestService } from 'src/app/services/table-request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data = [];
  errorMessage = '';

  constructor(
    private tableService: TableRequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tableService.getTableData().subscribe((response: any) => {
      const mappedData = this.parseData(response);
      this.data = mappedData;
    });
  }

  parseData(rawData: any) {
    return rawData.data.map((element: any) => {
      return {
        date: element.informed_date,
        description: element.description,
        origin: element.payer_name,
        channel: element.channel,
        amount: element.amount_paid,
      };
    });
  }

  columnsToDisplay = ['date', 'description', 'origin', 'channel', 'amount'];

  applyFilter(filterValue: any) {
    const newDate =
      filterValue.target.value.getDate() +
      '-' +
      (filterValue.target.value.getMonth() + 1) +
      '-' +
      filterValue.target.value.getFullYear();

    this.tableService.getTableData(newDate).subscribe(
      (response: any) => {
        this.data = this.parseData(response);
        if (this.data.length == 0) {
          this.errorMessage = 'Esta fecha no tiene datos para mostrar';
          return;
        }
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Esta fecha no tiene datos para mostrar';
      }
    );
  }

  salir() {
    localStorage.removeItem('token360');
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableRequestService {
  private apiKey =
    'NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA';

  constructor(private http: HttpClient) {}

  getTableData(date = '17-10-2022') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    return this.http.get(
      'https://api.sandbox.pagos360.com/report/collection/' + date,
      {
        headers,
      }
    );
  }
}

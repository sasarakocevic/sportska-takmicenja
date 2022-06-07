import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tim } from 'src/app/modeli/tim.model';
import { TimService } from 'src/app/servisi/tim.service';

@Component({
  selector: 'app-timovi',
  templateUrl: './timovi.component.html',
  styleUrls: ['./timovi.component.css']
})
export class TimoviComponent implements OnInit {


  public timovi: Tim[] = [];
  displayedColumns: string[] = ['id', 'naziv', 'adresa', 'slika'];
  dataSource!: MatTableDataSource<Tim>;
  public isLoading = false;

  constructor(private timServis: TimService, private router: Router) { }

  ngOnInit(): void {
    this.timServis.getAll().subscribe(
      response => {

        this.timovi = response;

        this.dataSource = new MatTableDataSource(this.timovi);
        this.isLoading = true;
      }
    )
  }

  onClick(row: any) {

    this.router.navigate(['/timItem', row['id']]);
  }

}

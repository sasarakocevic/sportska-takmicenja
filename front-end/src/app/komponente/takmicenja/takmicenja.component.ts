import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Takmicenje } from 'src/app/modeli/takmicenje.model';
import { TakmicenjeService } from 'src/app/servisi/takmicenje.service';

@Component({
  selector: 'app-takmicenja',
  templateUrl: './takmicenja.component.html',
  styleUrls: ['./takmicenja.component.css']
})
export class TakmicenjaComponent implements OnInit {
  public takmicenja!: Takmicenje[];
  public isLoading = false;


  displayedColumns: string[] = ['id', 'naziv', 'mjestoOdrzavanja', 'datumOd', 'datumDo'];
  dataSource!: MatTableDataSource<Takmicenje>;

  constructor(private takmicenjeServis: TakmicenjeService, private router: Router) { }

  ngOnInit(): void {

    this.takmicenjeServis.getAll().subscribe(
      response => {
        this.takmicenja = response;

        this.dataSource = new MatTableDataSource(this.takmicenja);

        this.isLoading = true;
      }
    )
  }


  onClick(row: any) {
    this.router.navigate(['/takmicenjeItem', row['id']])
  }

}

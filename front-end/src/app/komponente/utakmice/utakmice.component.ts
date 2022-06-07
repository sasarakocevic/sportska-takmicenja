import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Utakmica } from 'src/app/modeli/utakmica.model';
import { UtakmicaService } from 'src/app/servisi/utakmica.service';

@Component({
  selector: 'app-utakmice',
  templateUrl: './utakmice.component.html',
  styleUrls: ['./utakmice.component.css']
})
export class UtakmiceComponent implements OnInit {

  utakmice!: Utakmica[];
  displayedColumns: string[] = ['id', 'tim1', 'tim1_golovi', 'tim2_golovi', 'tim2', 'takmicenje', 'datum'];
  dataSource!: MatTableDataSource<Utakmica>;

  public isLoading = false;



  constructor(private utakmiceService: UtakmicaService) { }

  ngOnInit(): void {
    this.utakmiceService.getAll().subscribe(
      response => {
        // console.log(response);
        this.utakmice = response;
        this.dataSource = new MatTableDataSource(this.utakmice);
        this.dataSource.filterPredicate = function (record, filter) {
          // console.log(record.takmicenje['naziv']);
      
          return record.takmicenje['naziv'].toLocaleLowerCase() == filter.toLocaleLowerCase();
        }
        this.isLoading = true;
      }
     
      )

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(this.dataSource)
  }


}

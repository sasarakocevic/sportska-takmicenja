import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Takmicenje } from 'src/app/modeli/takmicenje.model';
import { Tim } from 'src/app/modeli/tim.model';
import { Utakmica } from 'src/app/modeli/utakmica.model';
import { BodoviService } from 'src/app/servisi/bodovi.service';
import { TakmicenjeService } from 'src/app/servisi/takmicenje.service';
import { TimService } from 'src/app/servisi/tim.service';
import { UtakmicaService } from 'src/app/servisi/utakmica.service';

@Component({
  selector: 'app-tim-item',
  templateUrl: './tim-item.component.html',
  styleUrls: ['./tim-item.component.css']
})
export class TimItemComponent implements OnInit {

  public tim!: Tim;
  public utakmice!: Utakmica[];
  public takmicenja: Takmicenje[] = [];
  public bodovi: any[] = [];


  public subscription1!: Subscription;
  public subscription2!: Subscription;
  public subscription3!: Subscription;
  public subscription4!: Subscription;

  constructor(private timServis: TimService,
    private utakmicaS: UtakmicaService,
    private takmicenjaS: TakmicenjeService,
    private bodoviS: BodoviService,
    public route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  ngOnInit(): void {


    const id = this.route.snapshot.params['id'];
    this.subscription1 = this.timServis.get(id).subscribe(
      response => {
        this.tim = response

      }
    );

    this.subscription2 = this.utakmicaS.getAll().subscribe(
      response => {
        this.utakmice = this.filterResponse(response, id);

        var dodanjaTakmicenjaId: any[] = [];
        this.utakmice.forEach(element => {
          if (!dodanjaTakmicenjaId.includes(element.takmicenje.id)) {
            this.takmicenja.push(element.takmicenje);
            dodanjaTakmicenjaId.push(element.takmicenje.id);
          }
        });
        dodanjaTakmicenjaId.forEach(element => {

          this.subscription3 = this.bodoviS.getBodovi(id, element).subscribe(
            response => { this.bodovi.push(response); }
          )


        });

      }
    )

    // this.subscription3 = this.takmicenjaS.getAll().subscribe(
    //   response => { this.takmicenja = response; }
    // )

  }

  filterResponse(arr: any[], id: any) {


    return arr.filter(function (element: any) {
      if (element.tim1_id == id || element.tim2_id == id) {
        return true
      } return false;
    });
  }


  statsFromGames(timName: any, takmicenjeName: string) {


    var sumaGolova = 0;
    var goloviZa: any = 0;
    var goloviProtiv: any = 0;

    this.utakmice.forEach(element => {
      if (element.tim1.naziv == timName) {
        if (element.takmicenje.naziv == takmicenjeName) {

          goloviZa += element.tim1_rezultat;

          goloviProtiv += element.tim2_rezultat;
        }
      } else if (element.tim2.naziv == timName) {
        if (element.takmicenje.naziv == takmicenjeName) {
          goloviZa += element.tim2_rezultat!;
          goloviProtiv += element.tim1_rezultat!;
        }

      }
    });



    return { goloviZa: goloviZa, goloviProtiv: goloviProtiv };
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { Takmicenje } from 'src/app/modeli/takmicenje.model';
import { Tim } from 'src/app/modeli/tim.model';
import { Utakmica } from 'src/app/modeli/utakmica.model';
import { BodoviService } from 'src/app/servisi/bodovi.service';
import { UtakmicaService } from 'src/app/servisi/utakmica.service';

@Component({
  selector: 'app-generacija-utakmica',
  templateUrl: './generacija-utakmica.component.html',
  styleUrls: ['./generacija-utakmica.component.css']
})
export class GeneracijaUtakmicaComponent implements OnInit {

  
  @Input() takmicenje!: Takmicenje;

  public grupe: Utakmica[] = [];
  public lonelyTeam!: Tim;

  constructor(private utakmicaServis: UtakmicaService,
    private bodoviServis: BodoviService) { }

  ngOnInit(): void {

    var timovi = this.takmicenje.timovi;
    var izabraniTimovi: Tim[] = [];
    for (let i = 1; i <= timovi!.length / 2; i++) {
      var tim1 = timovi![Math.floor(Math.random() * timovi!.length)];

      var tim2 = timovi![Math.floor(Math.random() * timovi!.length)];

      if (izabraniTimovi.includes(tim1) || izabraniTimovi.includes(tim2)) {
        i--;

      } else if (tim1.id == tim2.id) {
        i--;
      }
      else {
        var par = {
          tim1, tim2
        };
        izabraniTimovi.push(tim1);
        izabraniTimovi.push(tim2);
        this.grupe.push({ tim1: tim1, tim2: tim2, takmicenje: this.takmicenje });
        var rezultat1 = Math.floor(Math.random() * 5);
        var rezultat2 = Math.floor(Math.random() * 5);
        this.utakmicaServis.save({ tim1_id: tim1.id, tim2_id: tim2.id, takmicenje_id: this.takmicenje.id, tim1_rezultat: rezultat1, tim2_rezultat: rezultat2, datum: new Date });

        if (rezultat1 > rezultat2) {

          this.bodoviServis.save(tim1.id, 3, this.takmicenje.id);
          this.bodoviServis.save(tim2.id, 0, this.takmicenje.id);
        } else if (rezultat1 < rezultat2) {
          this.bodoviServis.save(tim2.id, 3, this.takmicenje.id);
          this.bodoviServis.save(tim1.id, 0, this.takmicenje.id);
        } else {
          this.bodoviServis.save(tim1.id, 1, this.takmicenje.id);
          this.bodoviServis.save(tim2.id, 1, this.takmicenje.id);
        }

      }
    }
    if (timovi!.length !== izabraniTimovi.length) {
      timovi!.forEach(tim => {
        if (!izabraniTimovi.includes(tim)) {
          this.lonelyTeam = tim;
        }
      });
    }
  }

}

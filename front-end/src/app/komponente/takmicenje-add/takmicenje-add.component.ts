import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Takmicenje } from 'src/app/modeli/takmicenje.model';
import { Tim } from 'src/app/modeli/tim.model';
import { TakmicenjeService } from 'src/app/servisi/takmicenje.service';
import { TimService } from 'src/app/servisi/tim.service';

@Component({
  selector: 'app-takmicenje-add',
  templateUrl: './takmicenje-add.component.html',
  styleUrls: ['./takmicenje-add.component.css']
})
export class TakmicenjeAddComponent implements OnInit {
  public takmicenjeForm!: FormGroup;
  public timovi!: Tim[];

  constructor(private timServis: TimService,
    private takmicenjeServis: TakmicenjeService,
    private router: Router) { }

  ngOnInit(): void {

    this.takmicenjeForm = new FormGroup({
      // 'timovi': new FormControl(null, Validators.minLength(4)),
      'naziv': new FormControl(null, Validators.required),
      'datumOd': new FormControl(null, Validators.required),
      'datumDo': new FormControl(null, Validators.required),
      'mjestoOdrzavanja': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {

    if (this.takmicenjeForm.status === "VALID") {
      const naziv = this.takmicenjeForm.value['naziv'];
      const datumOd = this.takmicenjeForm.value['datumOd'];
      const datumDo = this.takmicenjeForm.value['datumDo'];
      const mjestoOdrzavanja = this.takmicenjeForm.value['mjestoOdrzavanja'];



      const takmicenje: Takmicenje = {
        naziv: naziv, datum_od: datumOd, datum_do: datumDo, mjesto_odrzavanja: mjestoOdrzavanja,

      };
      console.log(takmicenje);
      this.takmicenjeServis.save(takmicenje).subscribe(
        response => { console.log(response) }
      );
      alert('Uspjesno ste dodali takmicenje');
      this.router.navigate(['/takmicenja']);
    }
  }


}

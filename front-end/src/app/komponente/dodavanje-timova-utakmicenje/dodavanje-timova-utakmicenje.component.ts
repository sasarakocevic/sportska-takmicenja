import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tim } from 'src/app/modeli/tim.model';
import { TakmicenjeService } from 'src/app/servisi/takmicenje.service';
import { TimService } from 'src/app/servisi/tim.service';

@Component({
  selector: 'app-dodavanje-timova-utakmicenje',
  templateUrl: './dodavanje-timova-utakmicenje.component.html',
  styleUrls: ['./dodavanje-timova-utakmicenje.component.css']
})
export class DodavanjeTimovaUTakmicenjeComponent implements OnInit {
  dodavanjeTimovaForm!: FormGroup;
  timovi!: Tim[];
  @Output() dodaniTimovi = new EventEmitter<boolean>();
  constructor(private timServis: TimService, private takmicenjeServis: TakmicenjeService
    , private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.dodavanjeTimovaForm = new FormGroup({
      'timovi': new FormControl(null, [Validators.minLength(4), Validators.required]),
    });
    this.timServis.getAll().subscribe(
      response => {
        this.timovi = response
      }
    )
  }

  onSubmit() {

    if (this.dodavanjeTimovaForm.status === "VALID") {
      const id = this.route.snapshot.params['id'];
      var tempArr = this.dodavanjeTimovaForm.value.timovi;
      console.log(tempArr)

      for (const index of tempArr) {
        this.takmicenjeServis.insertTimIntoTakmicenje(id, index);
      }

      this.dodaniTimovi.emit(true);
      alert('Uspjesno dodati timovi');
      this.router.navigate(['/takmicenjeItem', id])
    }

  }

}

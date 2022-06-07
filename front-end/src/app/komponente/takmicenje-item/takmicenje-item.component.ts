import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Takmicenje } from 'src/app/modeli/takmicenje.model';
import { Tim } from 'src/app/modeli/tim.model';
import { TakmicenjeService } from 'src/app/servisi/takmicenje.service';

@Component({
  selector: 'app-takmicenje-item',
  templateUrl: './takmicenje-item.component.html',
  styleUrls: ['./takmicenje-item.component.css']
})
export class TakmicenjeItemComponent implements OnInit {

  public takmicenje!: Takmicenje;
  public timovi?: Tim[];
  public groupsGenerated: boolean = false;
  public timAdded: boolean = false;

  constructor(private takmicenjeSer: TakmicenjeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.takmicenjeSer.getTakmicenjeWithTimovi(this.route.snapshot.params['id']).subscribe(
      response => {
        this.takmicenje = response;
        this.timovi = response.timovi;
        console.log(this.takmicenje);
        console.log(this.timovi)
      }
    )
  }

  generateGroups() {
    this.groupsGenerated = true;
  }

  react(data: boolean) {
    this.timAdded = data;
  }
}

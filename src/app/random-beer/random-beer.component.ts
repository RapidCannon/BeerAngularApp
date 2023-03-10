import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit{
  beer: any;
  constructor(private route: ActivatedRoute, private beerService: BeerService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.beerService.getBeer(id).subscribe(beer => {
      this.beer = beer;
    });
  }
    }

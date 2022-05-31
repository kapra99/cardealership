import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
	carsCatalog: any = [
		{
			carId:1,
			carImage: 'assets/images/audi.jpg',
			carName: 'Audi A8',
			carDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
		},
		{
			carId:2,
			carImage: 'assets/images/mercedes.jpg',
			carName: 'Mercedes S 500 L',
			carDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
		},
		{
			carId:3,
			carImage: 'assets/images/rr.jpg',
			carName: 'Rolls-Royce Phantom',
			carDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
		}
	]

	constructor() {
	}

	ngOnInit(): void {
	}

}

import {Component, OnInit} from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {CarService} from 'src/app/services/car.service';

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
	cars?: Car[];
	currentCar: Car = {};
	currentIndex = -1;
	brand = '';

	constructor(private carService: CarService) {
	}

	ngOnInit(): void {
		this.retrieveCars();
	}

	retrieveCars(): void {
		this.carService.getAll()
			.subscribe(
				data => {
					this.cars = data;
					console.log(data);
				},
				error => {
					console.log(error);
				});
	}

	refreshList(): void {
		this.retrieveCars();
		this.currentCar = {};
		this.currentIndex = -1;
	}
}

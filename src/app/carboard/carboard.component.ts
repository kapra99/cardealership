import {Component, OnInit} from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {CarService} from 'src/app/services/car.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
	selector: 'app-carboard',
	templateUrl: './carboard.component.html',
	styleUrls: ['./carboard.component.css']
})
export class CarboardComponent implements OnInit {
	message?: any
	cars?: Car[];
	currentCar: Car = {};
	currentIndex = -1;
	brand = '';

	constructor(private carService: CarService, private sanitizer: DomSanitizer) {

	}
	sanitizeImageUrl(imageUrl:string): SafeUrl {
		// console.log(imageUrl.split(',')[0]);
		return this.sanitizer.bypassSecurityTrustUrl(imageUrl.split(',')[0].replace('"',''));
	}
	ngOnInit(): void {
		this.message = '';
		this.retrieveCars();
	}

	retrieveCars(): void {
		this.carService.getAll()
			.subscribe(
				data => {
					this.cars = data;

				},
				error => {
					console.log(error);
				});
	}


	setActiveCar(car: Car, index: number): void {
		this.currentCar = car;
		this.currentIndex = index;
	}


}

import {Component, OnInit} from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {CarService} from 'src/app/services/car.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

	constructor(private carService: CarService, private sanitizer: DomSanitizer) {
	}
	sanitizeImageUrl(imageUrl:string): SafeUrl {
		console.log(imageUrl.split(',')[0]);
		return this.sanitizer.bypassSecurityTrustUrl(imageUrl.split(',')[0].replace('"',''));
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

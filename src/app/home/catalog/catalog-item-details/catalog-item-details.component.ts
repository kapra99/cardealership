import {Component, OnInit} from '@angular/core';
import {CarService} from 'src/app/services/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from 'src/app/models/car.model';

@Component({
	selector: 'app-catalog-item-details',
	templateUrl: './catalog-item-details.component.html',
	styleUrls: ['./catalog-item-details.component.css']
})
export class CatalogItemDetailsComponent implements OnInit {
	currentCar: Car = {
		brand: '',
		model: '',
		dateOfManifactory: '',
		engineCapacity: '',
		fuelType: '',
		gearboxType: '',
		bodyType: '',
		horsePower: '',
		additionalInformation: '',
		comfortExtras: [],
		securityExtras: '',
		otherExtras: '',
		price: '',
		carThumbnail: '',
		carImages: ''
	};
	message = '';
	carouselArray: any = [];
	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router) {
	}

	ngOnInit(): void {
		this.message = '';
		this.getCar(this.route.snapshot.params.id);
	}

	getCar(id: string): void {
		this.carService.get(id)
			.subscribe(
				data => {
					this.currentCar = data;
					if(this.currentCar.carImages){
						this.carouselArray = this.currentCar.carImages.split(',');
						console.log(this.carouselArray);
					}
					console.log(data);
				},
				error => {
					console.log(error);
				});
	}
}

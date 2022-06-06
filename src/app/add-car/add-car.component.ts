import {Component, OnInit} from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {CarService} from 'src/app/services/car.service';


@Component({
	selector: 'app-add-car',
	templateUrl: './add-car.component.html',
	styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
	car: Car = {
		brand: '',
		model: '',
		dateOfManifactory: '',
		engineCapacity: '',
		fuelType: null,
		gearboxType: '',
		horsePower: '',
		bodyType: '',
		additionalInformation: '',
		comfortExtras: '',
		securityExtras: '',
		otherExtras: '',
		price: '',
		carThumbnail: '',
		carImages: ''

	};
	submitted = false;
	fuelTypes: any = [
		'Diesel',
		'Gasoline',
		'Electrical'
	];
	gearboxTypes: any = [
		'Manual',
		'Automatic'
	];
	bodyTypes: any = [
		'Ван',
		'Джип',
		'Кабрио',
		'Комби',
		'Купе',
		'Миниван',
		'Пикап',
		'Седан',
		'Стреч лимузина',
		'Хечбек'
	];

	constructor(private carService: CarService) {
	}

	ngOnInit(): void {
	}


	saveCar(): void {
		const data = {
			brand: this.car.brand,
			model: this.car.model,
			dateOfManifactory: this.car.dateOfManifactory,
			engineCapacity: this.car.engineCapacity,
			fuelType: this.car.fuelType,
			gearboxType: this.car.gearboxType,
			horsePower: this.car.horsePower,
			bodyType: this.car.bodyType,
			additionalInformation: this.car.additionalInformation,
			comfortExtras: this.car.comfortExtras,
			securityExtras: this.car.securityExtras,
			otherExtras: this.car.otherExtras,
			price: this.car.price,
		};
		this.carService.create(data)
			.subscribe(
				response => {
					console.log(response);
					this.submitted = true;
				},
				error => {
					console.log(error);
				});
	}

	newCar(): void {
		this.submitted = false;
		this.car = {
			brand: '',
			model: '',
			dateOfManifactory: '',
			engineCapacity: '',
			fuelType: '',
			gearboxType: '',
			horsePower: '',
			bodyType: '',
			additionalInformation: '',
			comfortExtras: '',
			securityExtras: '',
			otherExtras: '',
			price: '',
			carThumbnail: '',
			carImages: ''
		};
	}
}

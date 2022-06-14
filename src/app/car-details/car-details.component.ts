import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';

interface Fuel {
	value: string;
	viewValue: string;
}

interface Gearbox {
	value: string;
	viewValue: string;
}

interface BodyType {
	value: string;
	viewValue: string;
}

interface ComfortExtra {
	value: string;
	viewValue: string;
}

interface SecurityExtra {
	value: string;
	viewValue: string;
}
interface OtherExtras {
	value: string;
	viewValue: string;
}

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
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
		securityExtras: [],
		otherExtras: [],
		price: '',
		carThumbnail: '',
		carImages: '',
		published: false

	};
	fuels: Fuel[] = [
		{value: 'Дизелов', viewValue: 'Дизелов'},
		{value: 'Бензинов', viewValue: 'Бензинов'},
		{value: 'Газ/Бензин', viewValue: 'Газ/Бензинов'},
		{value: 'Хибрид-Бензин', viewValue: 'Хибрид-Бензин'},
		{value: 'Хибрид-Дизел', viewValue: 'Хибрид-Дизел'},
		{value: 'Електрически', viewValue: 'Електрически'},
	];

	gearboxes: Gearbox[] = [
		{value: 'Ръчна', viewValue: 'Ръчна'},
		{value: 'Автоматична', viewValue: 'Автоматична'},
	];
	bodyTypes: BodyType[] = [
		{value: 'Ван', viewValue: 'Ван'},
		{value: 'Джип', viewValue: 'Джип'},
		{value: 'Кабрио', viewValue: 'Кабрио'},
		{value: 'Комби', viewValue: 'Комби'},
		{value: 'Купе', viewValue: 'Купе'},
		{value: 'Миниван', viewValue: 'Миниван'},
		{value: 'Пикап', viewValue: 'Пикап'},
		{value: 'Седан', viewValue: 'Седан'},
		{value: 'Стреч лимузина', viewValue: 'Стреч лимузина'},
		{value: 'Хечбек', viewValue: 'Хечбек'}
	];
	comfortextras: ComfortExtra[] = [
		{value: ' Кожен салон', viewValue: 'Кожен салон'},
		{value: ' Климатик', viewValue: 'Климатик'},
		{value: ' Климатроник', viewValue: 'Климатроник'},
		{value: ' Ел.стъкла', viewValue: 'Ел.стъкла'},
		{value: ' Ел.огледала', viewValue: 'Ел.огледала'},
		{value: ' Ел.седалки', viewValue: 'Ел.седалки'},
		{value: ' Подгряване на седалки', viewValue: 'Подгряване на седалки'},
		{value: ' Шибедах', viewValue: 'Шибедах'},
		{value: ' Стерео уредба', viewValue: 'Стерео уредба'},
		{value: ' Алуминиеви джанти', viewValue: 'Алуминиеви джанти'},
		{value: ' DVD/TV', viewValue: 'DVD/TV'},
		{value: ' Мултифункционален волан', viewValue: 'Мултифункционален волан'},
		{value: ' Старт-Стоп система', viewValue: 'Старт-Стоп система'},
		{value: ' Безключово палене', viewValue: 'Безключово палене'},
	];
	securityextras: SecurityExtra[] = [
		{value: ' 4x4', viewValue: '4x4'},
		{value: ' ABS', viewValue: 'ABS'},
		{value: ' ESP', viewValue: 'ESP'},
		{value: ' Airbag', viewValue: 'Airbag'},
		{value: ' Ксенонови фарове', viewValue: 'Ксенонови фарове'},
		{value: ' Халогенни фарове', viewValue: 'Халогенни фарове'},
		{value: ' ASR/Тракшън контрол', viewValue: 'ASR/Тракшън контрол'},
		{value: ' Парктроник', viewValue: 'Парктроник'},
		{value: ' Аларма', viewValue: 'Аларма'},
		{value: ' Имобилайзер', viewValue: 'Имобилайзер'},
		{value: ' Центр. заключване', viewValue: 'Центр. заключване'},
		{value: ' Брониран', viewValue: 'Брониран'},
	];
	otherextras: OtherExtras[] = [
		{value: ' Автопилот', viewValue: 'Автопилот'},
		{value: ' Серво управление', viewValue: 'Серво управление'},
		{value: ' Бордови компютър', viewValue: 'Бордови компютър'},
		{value: ' Сервизна книжка', viewValue: 'Сервизна книжка'},
		{value: ' Навигационна система', viewValue: 'Навигационна система'},
		{value: ' Панорамен покрив', viewValue: 'Панорамен покрив'},
		{value: ' Теглич', viewValue: 'Теглич'},
		{value: ' 7 места (6+1)', viewValue: '7 места (6+1)'}
	];
	message = '';
	isSuccessful = false;
	carouselArray: any = [];
	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router) { }
	ngOnInit(): void {
		this.message = '';
		this.getCar(this.route.snapshot.params.id);
	}
	selectedComfortExtras(value: any) {
		this.currentCar.comfortExtras.push(value);
	}
	selectedSecurityExtras(value: any) {
		this.currentCar.securityExtras.push(value);
		// console.log(value);
		// console.log(this.car.comfortExtras);
	}
	selectedOtherExtras(value: any) {
		this.currentCar.otherExtras.push(value);
		// console.log(value);
		// console.log(this.car.comfortExtras);
	}
	getCar(id: string): void {
		this.carService.get(id)
			.subscribe(
				data => {
					this.currentCar = data;
					if (this.currentCar.carImages) {
						this.carouselArray = this.currentCar.carImages.split(',');
						console.log(this.carouselArray);
					}
					console.log(data);
				},
				error => {
					console.log(error);
				});
	}
	updatePublished(status: boolean): void {
		const data = {
			brand: this.currentCar.brand,
			model: this.currentCar.model,
			published: status
		};
		this.message = '';
		this.carService.update(this.currentCar.id, data)
			.subscribe(
				response => {
					this.currentCar.published = status;
					console.log(response);
					this.message = response.message ? response.message : 'The status was updated successfully!';
				},
				error => {
					console.log(error);
				});
	}
	updateCar(): void {
		this.message = '';
		this.carService.update(this.currentCar.id, this.currentCar)
			.subscribe(
				response => {
					console.log(response);
					this.isSuccessful = true;
					this.message = response.message ? response.message : 'This tutorial was updated successfully!';
					alert("Успешно редактирахте избрания от вас автомобил!");
					this.router.navigate(['/carboard/']);
				},
				error => {
					console.log(error);
				});
	}
	deleteCar(): void {
		this.carService.delete(this.currentCar.id, this.currentCar)
			.subscribe(
				response => {
					console.log(response);
					alert("Успешно премахнахте избрания от вас автомобил!");
					this.router.navigate(['/carboard/']);
				},
				error => {
					console.log(error);
				});
	}
}

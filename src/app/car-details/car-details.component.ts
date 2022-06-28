import {Component, OnInit} from '@angular/core';
import {CarService} from 'src/app/services/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from 'src/app/models/car.model';

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
	checked?: boolean;
}

interface SecurityExtra {
	value: string;
	viewValue: string;
	checked?: boolean;
}
interface OtherExtras {
	value: string;
	viewValue: string;
	checked?: boolean;
}

@Component({
	selector: 'app-car-details',
	templateUrl: './car-details.component.html',
	styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
	tempCar: any = {
		comfortExtras:[],
		securityExtras:[],
		otherExtras:[]
	};
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
		// carThumbnail: '',
		// carImages: '',

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
	comfExtrs: any;
	secExtrs: any;
	othExtras: any;
	message = '';
	isSuccessful = false;

	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router) {
	}

	ngOnInit(): void {
		this.message = '';
		this.getCar(this.route.snapshot.params.id);
	}

	selectedComfortExtras(value: any) {
		this.tempCar.comfortExtras.push(value);
		console.log(this.tempCar.comfortExtras);

	}

	selectedSecurityExtras(value: any) {
		this.tempCar.securityExtras.push(value);

	}

	selectedOtherExtras(value: any) {
		this.tempCar.otherExtras.push(value);
	}

	getCar(id: string): void {
		this.carService.get(id)
			.subscribe(
				data => {
					this.currentCar = data;
					this.comfExtrs = data.comfortExtras;
					this.comfExtrs.replaceAll('"', '');
					this.comfExtrs.split(',');
					this.comfortextras.forEach((extra: any) => {
						extra.checked = this.comfExtrs.includes(extra.value);
						if (extra.checked) {
							this.tempCar.comfortExtras.push(extra.value);
						}

					})

					this.secExtrs = data.securityExtras;
					this.secExtrs.replaceAll('"', '');
					this.secExtrs.split(',');
					this.securityextras.forEach((extra: any) => {
						extra.checked = this.secExtrs.includes(extra.value);
						if (extra.checked) {
							this.tempCar.securityExtras.push(extra.value);
						}
					})

					this.othExtras = data.otherExtras;
					this.othExtras.replaceAll('"', '');
					this.othExtras.split(',');
					this.otherextras.forEach((extra: any) => {
						extra.checked = this.othExtras.includes(extra.value);
						if (extra.checked) {
							this.tempCar.otherExtras.push(extra.value);
						}
					})
				},
				error => {
					console.log(error);
				});
	}

	saveUpdatedCar(): void {
		const data = {
			brand: this.currentCar.brand,
			model: this.currentCar.model,
			dateOfManifactory: this.currentCar.dateOfManifactory,
			engineCapacity: this.currentCar.engineCapacity,
			fuelType: this.currentCar.fuelType,
			gearboxType: this.currentCar.gearboxType,
			horsePower: this.currentCar.horsePower,
			bodyType: this.currentCar.bodyType,
			additionalInformation: this.currentCar.additionalInformation,
			comfortExtras: this.tempCar.comfortExtras.toString(),
			securityExtras: this.tempCar.securityExtras.toString(),
			otherExtras: this.tempCar.otherExtras.toString(),
			price: this.currentCar.price,
			// currentCarImages:this.currentCar.carImages.toString()
		};

		this.carService.update(this.currentCar.id, data)
			.subscribe(
				response => {
					console.log(response);
					// this.submitted = true;
				},
				error => {
					console.log(error);
				});
		alert("Успешно редактирахте избрания от вас автомобил!");
		this.router.navigate(['/carboard/']);
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

import {Component, OnInit} from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {CarService} from 'src/app/services/car.service';

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
		fuelType: 'Дизелов',
		gearboxType: 'Ръчна',
		horsePower: '',
		bodyType: 'Комби',
		additionalInformation: '',
		comfortExtras: [],
		securityExtras: [],
		otherExtras: [],
		price: '',
		carThumbnail: '',
		carImages: ''

	};
	submitted = false;
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
		{value: 'Климатик', viewValue: 'Климатик'},
		{value: 'Климатроник', viewValue: 'Климатроник'},
		{value: 'Ел.стъкла', viewValue: 'Ел.стъкла'},
		{value: 'Ел.огледала', viewValue: 'Ел.огледала'},
		{value: 'Ел.седалки', viewValue: 'Ел.седалки'},
		{value: 'Подгряване на седалки', viewValue: 'Подгряване на седалки'},
		{value: 'Шибедах', viewValue: 'Шибедах'},
		{value: 'Стерео уредба', viewValue: 'Стерео уредба'},
		{value: 'Алуминиеви джанти', viewValue: 'Алуминиеви джанти'},
		{value: 'DVD/TV', viewValue: 'DVD/TV'},
		{value: 'Мултифункционален волан', viewValue: 'Мултифункционален волан'},
		{value: 'Старт-Стоп система', viewValue: 'Старт-Стоп система'},
		{value: 'Безключово палене', viewValue: 'Безключово палене'},
	];
	securityextras: SecurityExtra[] = [
		{value: '4x4', viewValue: '4x4'},
		{value: 'ABS', viewValue: 'ABS'},
		{value: 'ESP', viewValue: 'ESP'},
		{value: 'Airbag', viewValue: 'Airbag'},
		{value: 'Ксенонови фарове', viewValue: 'Ксенонови фарове'},
		{value: 'Халогенни фарове', viewValue: 'Халогенни фарове'},
		{value: 'ASR/Тракшън контрол', viewValue: 'ASR/Тракшън контрол'},
		{value: 'Парктроник', viewValue: 'Парктроник'},
		{value: 'Аларма', viewValue: 'Аларма'},
		{value: 'Имобилайзер', viewValue: 'Имобилайзер'},
		{value: 'Центр. заключване', viewValue: 'Центр. заключване'},
		{value: 'Брониран', viewValue: 'Брониран'},
	];
	otherextras: OtherExtras[] = [
		{value: 'Автопилот', viewValue: 'Автопилот'},
		{value: 'Серво управление', viewValue: 'Серво управление'},
		{value: 'Бордови компютър', viewValue: 'Бордови компютър'},
		{value: 'Сервизна книжка', viewValue: 'Сервизна книжка'},
		{value: 'Навигационна система', viewValue: 'Навигационна система'},
		{value: 'Панорамен покрив', viewValue: 'Панорамен покрив'},
		{value: 'Теглич', viewValue: 'Теглич'},
		{value: '7 места (6+1)', viewValue: '7 места (6+1)'}
	]

	constructor(private carService: CarService) {
	}

	ngOnInit(): void {

	}

	selectedComfortExtras(value: any) {
		this.car.comfortExtras.push(value);
		console.log(value);
		console.log(this.car.comfortExtras);
	}
	selectedSecurityExtras(value: any) {
		this.car.securityExtras.push(value);
		console.log(value);
		console.log(this.car.comfortExtras);
	}
	selectedOtherExtras(value: any) {
		this.car.otherExtras.push(value);
		console.log(value);
		console.log(this.car.comfortExtras);
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

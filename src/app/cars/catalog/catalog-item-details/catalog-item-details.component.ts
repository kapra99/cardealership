import {Component, OnInit} from '@angular/core';
import {CarService} from 'src/app/services/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from 'src/app/models/car.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
		carImages: '',
		published: false
	};
	message = '';
	carouselArray: any = [];
	comfortextras: any;
	securityextras: any;
	otherextras: any;
	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private sanitizer: DomSanitizer,
		private router: Router) {
	}
	sanitizeImageUrl(imageUrl:string): SafeUrl {
		// console.log(imageUrl.split(',')[0]);
		return this.sanitizer.bypassSecurityTrustUrl(imageUrl.split(',')[0].replace('"',''));
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
					if(this.currentCar.comfortExtras){
						this.comfortextras = this.currentCar.comfortExtras.replaceAll('"','');
					}
					if(this.currentCar.securityExtras){
						this.securityextras = this.currentCar.securityExtras.replaceAll('"','');
					}
					if(this.currentCar.otherExtras){
						this.otherextras = this.currentCar.otherExtras.replaceAll('"','');
					}
					if (this.currentCar.carImages) {
						this.carouselArray = this.currentCar.carImages.split(',');
					}
				},
				error => {
					console.log(error);
				});
	}
}

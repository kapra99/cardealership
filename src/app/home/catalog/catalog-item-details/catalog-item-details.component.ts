// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
// 	selector: 'app-catalog-item-details',
// 	templateUrl: './catalog-item-details.component.html',
// 	styleUrls: ['./catalog-item-details.component.css']
// })
// export class CatalogItemDetailsComponent implements OnInit {
//
// 	constructor(private route: ActivatedRoute, private router: Router) {
//
// 	}
//
// 	ngOnInit(): void {
// 		this.route.snapshot.paramMap.get('id');
// 		console.log(this.route.snapshot.paramMap.get('id'));
// 	}
//
// }

import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
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
		comfortExtras: '',
		securityExtras: '',
		otherExtras: '',
		price: '',
		carThumbnail:'',
		carImages: ''
	};
	message = '';
	carouselArray: any = [];
	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router) { }
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
	// updatePublished(status: boolean): void {
	// 	const data = {
	// 		title: this.currentTutorial.title,
	// 		description: this.currentTutorial.description,
	// 		published: status
	// 	};
	// 	this.message = '';
	// 	this.tutorialService.update(this.currentTutorial.id, data)
	// 		.subscribe(
	// 			response => {
	// 				this.currentTutorial.published = status;
	// 				console.log(response);
	// 				this.message = response.message ? response.message : 'The status was updated successfully!';
	// 			},
	// 			error => {
	// 				console.log(error);
	// 			});
	// }
	// updateTutorial(): void {
	// 	this.message = '';
	// 	this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
	// 		.subscribe(
	// 			response => {
	// 				console.log(response);
	// 				this.message = response.message ? response.message : 'This tutorial was updated successfully!';
	// 			},
	// 			error => {
	// 				console.log(error);
	// 			});
	// }
	// deleteTutorial(): void {
	// 	this.tutorialService.delete(this.currentTutorial.id)
	// 		.subscribe(
	// 			response => {
	// 				console.log(response);
	// 				this.router.navigate(['/tutorials']);
	// 			},
	// 			error => {
	// 				console.log(error);
	// 			});
	// }
}

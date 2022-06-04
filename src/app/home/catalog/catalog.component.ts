// import {Component, OnInit} from '@angular/core';
//
//
// @Component({
// 	selector: 'app-catalog',
// 	templateUrl: './catalog.component.html',
// 	styleUrls: ['./catalog.component.css']
// })
// export class CatalogComponent implements OnInit {
// 	carsCatalog: any = [
// 		{
// 			carId:1,
// 			carImage: 'assets/images/audi.jpg',
// 			carName: 'Audi A8',
// 			carDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
// 		},
// 		{
// 			carId:2,
// 			carImage: 'assets/images/mercedes.jpg',
// 			carName: 'Mercedes S 500 L',
// 			carDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
// 		},
// 		{
// 			carId:3,
// 			carImage: 'assets/images/rr.jpg',
// 			carName: 'Rolls-Royce Phantom',
// 			carDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
// 		}
// 	]
// 	constructor() {
// 	}
//
// 	ngOnInit(): void {
// 	}
//
// }


import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
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
	constructor(private carService: CarService) { }
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
	// setActiveTutorial(tutorial: Tutorial, index: number): void {
	// 	this.currentTutorial = tutorial;
	// 	this.currentIndex = index;
	// }
	// removeAllTutorials(): void {
	// 	this.tutorialService.deleteAll()
	// 		.subscribe(
	// 			response => {
	// 				console.log(response);
	// 				this.refreshList();
	// 			},
	// 			error => {
	// 				console.log(error);
	// 			});
	// }
	// searchTitle(): void {
	// 	this.currentTutorial = {};
	// 	this.currentIndex = -1;
	// 	this.tutorialService.findByTitle(this.title)
	// 		.subscribe(
	// 			data => {
	// 				this.tutorials = data;
	// 				console.log(data);
	// 			},
	// 			error => {
	// 				console.log(error);
	// 			});
	// }
}

import {Component} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private roles: string[] = [];
	isLoggedIn = false;
	showAdminBoard = false;
	showAddCar = false
	showCarBoard = false
	showFavouriteCarsBoard = false
	showListOfCars = false;
	username?: string;

	constructor(private tokenStorageService: TokenStorageService) {
	}

	ngOnInit(): void {
		this.isLoggedIn = !!this.tokenStorageService.getToken();

		if (this.isLoggedIn) {
			const user = this.tokenStorageService.getUser();
			this.roles = user.roles;

			this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
			this.showAddCar = this.roles.includes('ROLE_ADMIN');
			this.showCarBoard = this.roles.includes('ROLE_ADMIN');

			this.showListOfCars = this.roles.includes('ROLE_USER');
			this.showFavouriteCarsBoard = this.roles.includes('ROLE_USER');


			this.username = user.username;
		}
	}

	logout(): void {
		this.tokenStorageService.signOut();
		window.location.reload();
	}
}

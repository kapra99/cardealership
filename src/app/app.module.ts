import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {UploadFilesComponent} from "./upload-files/upload-files.component";
import {AddCarComponent} from "./add-car/add-car.component";
import {CatalogComponent} from "./cars/catalog/catalog.component";
import {CatalogItemDetailsComponent} from "./cars/catalog/catalog-item-details/catalog-item-details.component";
import {CarsComponent} from "./cars/cars.component";
import {CarboardComponent} from './carboard/carboard.component';
import {CarDetailsComponent} from './car-details/car-details.component';




@NgModule({
	declarations: [
		CarsComponent,
		UploadFilesComponent,
		AppComponent,
		LoginComponent,
		RegisterComponent,
		ProfileComponent,
		BoardAdminComponent,
		BoardModeratorComponent,
		BoardUserComponent,
		CatalogComponent,
		CatalogItemDetailsComponent,
		AddCarComponent,
		CarboardComponent,
		CarDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [authInterceptorProviders],
	bootstrap: [AppComponent]
})
export class AppModule {
}

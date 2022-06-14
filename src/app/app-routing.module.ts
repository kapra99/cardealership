import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {CatalogItemDetailsComponent} from "./cars/catalog/catalog-item-details/catalog-item-details.component";
import {AddCarComponent} from "./add-car/add-car.component";
import {UploadFilesComponent} from "./upload-files/upload-files.component";
import {CarsComponent} from "./cars/cars.component";
import {CarboardComponent} from "./carboard/carboard.component";
import {CarDetailsComponent} from "./car-details/car-details.component";


const routes: Routes = [
	{path:'upload-files', component:UploadFilesComponent},
	{path: 'cars', component: CarsComponent},
	{path: 'add-car', component: AddCarComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'user', component: BoardUserComponent},
	{path: 'mod', component: BoardModeratorComponent},
	{path: 'admin', component: BoardAdminComponent},
	{path: '', redirectTo: 'cars', pathMatch: 'full'},
	{path: 'cardetails/:id', component: CatalogItemDetailsComponent},
	{path: 'carboard', component: CarboardComponent},
	{path: 'car-details/:id', component: CarDetailsComponent},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

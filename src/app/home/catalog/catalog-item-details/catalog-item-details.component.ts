import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-catalog-item-details',
	templateUrl: './catalog-item-details.component.html',
	styleUrls: ['./catalog-item-details.component.css']
})
export class CatalogItemDetailsComponent implements OnInit {

	constructor(private route: ActivatedRoute, private router: Router) {

	}

	ngOnInit(): void {
		this.route.snapshot.paramMap.get('id');
		console.log(this.route.snapshot.paramMap.get('id'));
	}

}

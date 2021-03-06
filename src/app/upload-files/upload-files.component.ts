import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileUploadService} from 'src/app/services/file-upload.service';

@Component({
	selector: 'app-upload-files',
	templateUrl: './upload-files.component.html',
	styleUrls: ['./upload-files.component.css']
})

export class UploadFilesComponent implements OnInit {
	@Output() newCarPicturesArray = new EventEmitter<any>();
	selectedFiles?: FileList;
	selectedPhotos?:any;
	progressInfos: any[] = [];
	message: string[] = [];
	responseData: any;
	fileInfos?: Observable<any>;

	constructor(private uploadService: FileUploadService) {
	}

	ngOnInit(): void {
		this.fileInfos = this.uploadService.getFiles();
		this.uploadService.getFiles().subscribe(
			data => {
				this.responseData = data;
				this.responseData.splice(0);
				console.log(this.responseData);
			},
			err => {
				this.responseData = JSON.parse(err.error).message;
			})
	}

	selectFiles(event: any): void {
		this.message = [];
		this.progressInfos = [];
		this.selectedFiles = event.target.files;
	}

	upload(idx: number, file: File): void {
		this.progressInfos[idx] = {value: 0, fileName: file.name};

		if (file) {
			this.uploadService.upload(file).subscribe(
				(event: any) => {
					if (event.type === HttpEventType.UploadProgress) {
						this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
					} else if (event instanceof HttpResponse) {
						const msg = 'Uploaded the file successfully: ' + file.name;
						this.message.push(msg);
						this.fileInfos = this.uploadService.getFiles();
						this.fileInfos.subscribe(
							data => {

								let counter = this.selectedFiles?.length;
								// @ts-ignore
								// console.log(data);
								// @ts-ignore
								this.selectedPhotos = data.slice(-counter);

								this.newCarPicturesArray.emit(this.selectedPhotos);
							},
							err => {

							})
					}
				},
				(err: any) => {
					this.progressInfos[idx].value = 0;
					const msg = 'Could not upload the file: ' + file.name;
					this.message.push(msg);
					this.fileInfos = this.uploadService.getFiles();
				});
		}
	}

	uploadFiles(): void {
		this.message = [];
		if (this.selectedFiles) {
			for (let i = 0; i < this.selectedFiles.length; i++) {
				this.upload(i, this.selectedFiles[i]);
			}
		}
	}
}

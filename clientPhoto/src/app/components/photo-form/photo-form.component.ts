import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file!: File;
  photoSelected!: string | ArrayBuffer;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event:any){
   if(event.target.files && event.target.files[0]){
      this.file = <File> event.target.files[0];
      const reader = new FileReader();
      reader.onload = (() =>{
        this.photoSelected = reader.result as string;
      }) 
      reader.readAsDataURL(this.file);
   }
  }

  uploadPhoto(title: any, description: any){
    this.photoService.createPhoto(title.value,description.value,this.file).subscribe((response)=>{
      this.router.navigate(['/']);
    });
  }

}

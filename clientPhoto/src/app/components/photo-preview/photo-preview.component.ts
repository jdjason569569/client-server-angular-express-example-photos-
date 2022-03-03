import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id! : any;
  photo!: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.photoService.getPhoto(this.id).subscribe((response:any)=>{
      this.photo = response.foto;
    });  
  }

  deletePhoto(id:string){
    this.photoService.deletePhoto(id).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

  updatePhoto(id:string, title:any, description:any){
    this.photoService.updatePhoto(id,title.value,description.value).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}

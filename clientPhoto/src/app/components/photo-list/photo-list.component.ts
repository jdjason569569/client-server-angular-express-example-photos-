import { Component, OnInit } from '@angular/core';
import { Photo } from '../../interfaces/Photo';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((photos:any)=>{
         this.photos = photos; 
    });
  }

  selectedCard(id: any){
     this.router.navigate(['/photos', id]);
     
  }

  

}

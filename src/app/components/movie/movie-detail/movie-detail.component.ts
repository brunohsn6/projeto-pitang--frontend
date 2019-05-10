import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  closeResult : string;
  showNew : boolean = false;
  submitType = 'Edit';
  movie : Movie;
  editForm : FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder){}
    
  


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this.editForm = this.formBuilder.group({
        title: [''],
        description: [''],
        duration:[''],
      });
      this.movieService.getById(id)
        .subscribe(response => {
          console.log(response);
          this.movie = response;
          this.setControls();
        });
    });
    
   
  }

  popGenero(indice : number){
    this.movie.genres.splice(indice, 1);
    
  }

  popActor(indice : number){
    this.movie.actors.splice(indice, 1);
  }

  popAuthor(indice : number){
    this.movie.authors.splice(indice, 1);
  }

  popDirector(indice : number){
    this.movie.directors.splice(indice, 1);
  }

  onSave(){
    this.movieService.update(this.movie);
    this.modalService.dismissAll("saved");
  }

  onCancel(){
    console.log("aaaa");
    window.location.reload();
  }

  setControls(){
    this.editForm.controls["title"].setValue[this.movie.title];
    this.editForm.controls["description"].setValue[this.movie.description];
    this.editForm.controls["duration"].setValue[this.movie.duration];
    
  }
  onDelete(){
    if(window.confirm("você tem certeza que deseja excluir "+this.movie.title+"?")){
      this.movieService.delete(this.movie.id);
    }
    
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

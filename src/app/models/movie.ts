import { Genre } from './genre';
import { Author } from './author';
import { Actor } from './actor';
import { Director } from './director';

export class Movie{
    id : number;
    title : string;
    description : string;
    duration : string;
    backdropPath : string;
    genres : Array<Genre>; 
    authors : Array<Author>;
    actors : Array<Actor>;
    directors : Array<Director>;
  

}
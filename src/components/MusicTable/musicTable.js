import React, { Component } from 'react'

export default class MusicTable extends Component {
   constructor() {
      super()
      this.filterByAlbum = this.filterByAlbum.bind(this);
      this.filterByArtist = this.filterByArtist.bind(this);
      this.filterByGenre = this.filterByGenre.bind(this);
   }


   // TODO: Filter by album
   filterByAlbum(){
      
   }


   // TODO: Filter by genre
   filterByGenre(){

      
   }

   // TODO. Filter by artist
   filterByArtist(){
      
   }


   render() {
      return (
         <div>
            <h1>Music Table Component...</h1>
         </div>
      )
   }
}

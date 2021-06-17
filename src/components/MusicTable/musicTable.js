import React, { Component } from 'react'
import './musicTable.css';

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
         <div className='music-table'>
            <h3>Library Listing</h3>
            <table>
            <tr>
               <th>Title</th><th>Album</th><th>Artist</th><th>Genre</th><th>Release Date</th>
               </tr>
               <tr>
                  <td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
               </tr>
               <tr>
                  <td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
               </tr>
               <tr>
                  <td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
               </tr>
               <tr>
                  <td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
               </tr>
            
         </table>

         </div>
      )
   }
}

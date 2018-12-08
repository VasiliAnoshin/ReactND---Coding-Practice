import React , { Component } from 'react';

class ListOfUsers extends Component {
 render(){
			return(
            <ol className = 'user-wishes-list'>{
                this.props.profiles.map(prof =>  
                <li key ={prof.id} >
                   <p>{this.props.users[prof.userID].name  + '\'s favorite movie is <' +  this.props.movies[prof.favoriteMovieID].name + '>'} </p>
                  </li>)
              }
   			</ol>)
  }
}

export default ListOfUsers
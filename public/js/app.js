"use strict";

class App{
	constructor(){
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
	}

	deleteMovie(key){		
	}

	updateMovie(key){
	}
}

class Component extends App{
	constructor(){
		super();
	}
	brandList(){
		this.render(`
				  <nav>
				  
    		<div class="nav-wrapper">
      <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>Gadgets</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Naghimo</a></li>
        <li><a href="badges.html">Brand List</a></li>

   <form>
        <div class="input-field">
          <input id="search" type="search" required>
          <label for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
      </ul>
    </div>
  </nav>

  		<div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="img/iphone.jpg">
              <span class="card-title">Iphone 7 256gb</span>
            </div>
            <div class="card-content">
              <p>iPhone 7 now has the best performance and battery life ever, as well as new finishes, water resistance, and stereo speakers.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

      		<div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="img/samsung.jpg">
              <span class="card-title">Samsung S7 and S7 Edge</span>
            </div>
            <div class="card-content">
              <p>Experience the newest Samsung phone! The Galaxy S7 & Galaxy S7 edge feature water-resistance, enhanced cameras and ability to add a microSD Card.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>	

           <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Gadgets Content</h5>
                <p class="grey-text text-lighten-4">This is Gadget Buy and Sell</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a href="http://www.apple.com/ph/iphone-7/">Link 1</a></li>
                  <li><a href="http://www.samsung.com/us/explore/galaxy-s7-features-and-specs/">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2016 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
             	

			`,document.getElementById("app"));
	}
}

let component = new Component();
component.brandList();
// component.movieCreate();
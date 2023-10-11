import React from 'react'

function Navbar(props) {
  
  return (
<>
<nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">text-tuls</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       { /*<li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>*/}
      </ul>
    </div>
    <div class={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.modecheak}</label>
    </div>


  </div>
</nav>
</>
  );
}

export default Navbar

import React from 'react'
import styled from "styled-components";
export default function Locations() {
  return (
    <div>

    <h2 style={{color: 'black', fontSize: '32px;', textAlign:'center'}}>Locations</h2>
<LocationsWrapper>
<div>Birkenhead</div>
<div>Bootle</div>
<div>Huyton</div>
<div>Kirkby</div>
<div>St Helens</div>
<div>Southport</div>
<div>Wallasey</div>
<div>Widnes</div>
<div>Prescot</div>
<div>Formby</div>
<div>Maghull</div>
<div>Halewood</div>
<div>Newton-le-Willows</div>
<div>Crosby</div>
<div>Litherland</div>
<div>West Kirby</div>
<div>Hoylake</div>
<div>Garston</div>
<div>Bebington</div>
<div>Rainhill</div>



    </LocationsWrapper>
    </div>
  )
}


const LocationsWrapper = styled.div`

display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
padding: 1.25rem;
height:auto;
font-size: 21px;
font-weight:bold;
color:white;
background-color:#0B093B;

@media (max-width: 768px) {
  
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */

}

`
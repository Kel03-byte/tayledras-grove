// Foals For Sale Page

import React, { Fragment } from "react";

function Sales() {
    return (
        <Fragment>
            <div id='page'>
                <div id='title'>For Sale</div>
                <div className='background' >Here you can find information about our Tayledras Ponies who are looking for their
                    companions.
                </div><br />
                <div className='background' >Prices and more detailed information are available on enquiry.</div>
                <div className='background' >
                    <p className='background' >- Tayldras Dawnfire -</p>
                    <div className='background'  id='info'>
                        <p className='background' ><b><i className='background' >Stable Name:</i></b> Dawn</p>
                        <p className='background' ><b><i className='background' >Year:</i></b> 2018</p>
                        <p className='background' ><b><i className='background' >Gender:</i></b> Mare</p>
                        <p className='background' ><b><i className='background' >Breed:</i></b> Connemara x Thoroughbred</p>
                        <p className='background' ><b><i className='background' >Colour:</i></b> Bay</p>
                        <p className='background' ><b><i className='background' >Sire:</i></b> Itsa Shamrock Forget Me Not (AUS)</p>
                        <p className='background' ><b><i className='background' >Dam:</i></b> My Divine (AUS)</p>
                    </div>
                </div>
                <div className='background' >
                    <p className='background' >- Tayldras Raindance -</p>
                    <div className='background' id='info'>
                        <p className='background' ><b><i className='background' >Stable Name:</i></b> Rain</p>
                        <p className='background' ><b><i className='background' >Year:</i></b> 2021</p>
                        <p className='background' ><b><i className='background' >Gender:</i></b> Colt (to be gelded)</p>
                        <p className='background' ><b><i className='background' >Breed:</i></b> Connemara x Thoroughbred</p>
                        <p className='background' ><b><i className='background' >Colour:</i></b> Bay</p>
                        <p className='background' ><b><i className='background' >Sire:</i></b> Itsa Shamrock Forget Me Not (AUS)</p>
                        <p className='background' ><b><i className='background' >Dam:</i></b> My Divine (AUS)</p>
                    </div>
                </div>
                <div className='background' >
                    <p className='background' >- Tayldras Bon Kethry -</p>
                    <div className='background' id='info'>
                        <p className='background' ><b><i className='background' >Stable Name:</i></b> Kethry</p>
                        <p className='background' ><b><i className='background' >Year:</i></b> 2020</p>
                        <p className='background' ><b><i className='background' >Gender:</i></b> Filly</p>
                        <p className='background' ><b><i className='background' >Breed:</i></b> Connemara x Warmblood</p>
                        <p className='background' ><b><i className='background' >Colour:</i></b> Chestnut</p>
                        <p className='background' ><b><i className='background' >Sire:</i></b> Itsa Shamrock Forget Me Not (AUS)</p>
                        <p className='background' ><b><i className='background' >Dam:</i></b> Silversocks (AUS)</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Sales;
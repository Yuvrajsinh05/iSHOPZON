import React,{Component} from "react";
import {Link} from 'react-router-dom'
 
const Display = (props) => {

    const listhome = ({homeData}) => {
        console.log(">>>mealData111",homeData)
        if(homeData){
            console.log(">>>mealData",homeData)
            return homeData.map((item) => {
                return(
                 <>
                   <div id="main-content m-auto">
        {/* <!-- slider  --> */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/slide1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="./images/slide2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="./images/slide3.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="grid">
            <div className="row">
                <h2 className="proHead text-center">Clothing <i className="fa-solid fa-shirt"></i></h2>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src="./images/c-1.jpg" alt=""/>
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> Men's Fashion</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src="./images/c-1.jpg" alt=""/>
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> girls's Fashion</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src="./images/c-1.jpg" alt=""/>
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> boys's Fashion</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <a href="">
                    <div className="col-12 p-1 colmm">
                        <div className="gridboox ">
                            <div className="h-75">
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                            </div>
                            <div className="h-25">
                                <h3 className="text-center pt-3">Women's Fashion</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <hr/><br/>
            <div className="row">
                <h2 className="proHead text-center">Electronics <i className="fa-solid fa-headphones"></i></h2>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src="./images/c-1.jpg" alt=""/>
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> Men's Fashion</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src="./images/c-1.jpg" alt=""/>
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> girls's Fashion</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src="./images/c-1.jpg" alt=""/>
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> boys's Fashion</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr/><br/>


            <div className="row">
                <a href="">
                    <div className="col-12 p-1 colmm p-3">
                        <div className="gridboox ">
                            <div className="h-75">
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                                <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                                        </center>
                                    </a></div>
                            </div>
                            <div className="h-25">
                                <h3 className="text-center pt-4 ">Books <i className="fa-solid fa-book"></i>
                                </h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

                 </>
                )
            })
        }
    }

    return(
        <div id="mainContainer">
            {listhome(props)}
        </div> 
    )
}

export default Display


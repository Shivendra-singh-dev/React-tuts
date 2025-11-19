import React from 'react'

export default function BootstrapExample() {
    var data = [
        { id: 1, name: "Product1", originaprice: 7890, finalprice: 789, pic: 'p1.jpg' },
        { id: 2, name: "Product2", originaprice: 5000, finalprice: 50, pic: 'p2.jpg' },
        { id: 3, name: "Product3", originaprice: 4500, finalprice: 650, pic: 'p3.jpg' },
        { id: 4, name: "Product4", originaprice: 7840, finalprice: 2480, pic: 'p4.jpg' },
        { id: 5, name: "Product5", originaprice: 7890, finalprice: 789, pic: 'p5.jpg' },
        { id: 6, name: "Product6", originaprice: 7890, finalprice: 789, pic: 'p6.jpg' },
        { id: 7, name: "Product7", originaprice: 7890, finalprice: 789, pic: 'p7.jpg' },
        { id: 8, name: "Product8", originaprice: 7890, finalprice: 789, pic: 'p8.jpg' },
        { id: 9, name: "Product9", originaprice: 7890, finalprice: 789, pic: 'p9.jpg' },
        { id: 10, name: "Product10", originaprice: 7890, finalprice: 789, pic: 'p10.jpg' },
        { id: 11, name: "Product11", originaprice: 7890, finalprice: 789, pic: 'p11.jpg' },
        { id: 12, name: "Product12", originaprice: 7890, finalprice: 789, pic: 'p12.jpg' },
        { id: 13, name: "Product13", originaprice: 7890, finalprice: 789, pic: 'p13.jpg' },
        { id: 14, name: "Product14", originaprice: 7890, finalprice: 789, pic: 'p14.jpg' },
        { id: 15, name: "Product15", originaprice: 7890, finalprice: 789, pic: 'p15.jpg' },
        { id: 16, name: "Product16", originaprice: 7890, finalprice: 789, pic: 'p16.jpg' },
        { id: 17, name: "Product17", originaprice: 7890, finalprice: 789, pic: 'p17.jpg' },
        { id: 18, name: "Product18", originaprice: 7890, finalprice: 789, pic: 'p18.jpg' },
        { id: 19, name: "Product19", originaprice: 7890, finalprice: 789, pic: 'p19.jpg' },
        { id: 20, name: "Product20", originaprice: 7890, finalprice: 789, pic: 'p20.jpg' }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Ducat</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/banner1.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner2.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner3.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner4.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner5.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner6.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner7.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner8.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner9.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner10.jpg" height="550px" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <button className='btn btn-success btn-sm'>Test</button> */}
            {/* <button className='btn btn-success'>Test</button> */}
            {/* <button className='btn btn-success btn-lg'>Test</button> */}
            {/* <button className='btn btn-success m-1 d-block'>Test</button> */}
            {/* <button className='btn btn-success m-1 d-block w-25'>Test</button> */}
            {/* <button className='btn btn-success m-1 d-block w-50'>Test</button> */}
            {/* <button className='btn btn-success m-1 d-block w-75'>Test</button> */}
            {/* <button className='btn btn-success m-1 d-block w-100'>Test</button> */}
            {/* <button className='btn btn-success p-5'>Test</button> */}

            <div className="container-fluid">
                <h5 className='background text-light text-center p-2'>Latest Products</h5>
                <div className="row">
                    {
                        data.map((item, index) => {
                            return <div key={index} className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                                <div className="card">
                                    <img src={`/images/${item.pic}`} height="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text"><del className='text-danger'>&#8377;{item.originaprice}</del> <span className='text-success'>&#8377;{item.finalprice}</span></p>
                                        <a href="#" className="btn btn-success w-100 btn-sm">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/banner8.jpg" height="440px" width="100%" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h5 className='background text-light text-center p-2'>Contact Us</h5>
                        <form>
                            <div className="mb-3">
                                {/* <label>Name</label> */}
                                <input type="text" name='name' placeholder='Full Name' className='form-control'/>
                            </div>
                            <div className="mb-3">
                                {/* <label>Email</label> */}
                                <input type="email" name='email' placeholder='Email Address' className='form-control'/>
                            </div>
                            <div className="mb-3">
                                {/* <label>Phone</label> */}
                                <input type="text" name='phone' placeholder='Phone Number' className='form-control'/>
                            </div>
                            <div className="mb-3">
                                {/* <label>Subject</label> */}
                                <input type="text" name='subject' placeholder='Subject' className='form-control'/>
                            </div>
                            <div className="mb-3">
                                {/* <label>Message</label> */}
                                <textarea name="message" rows="5" className='form-control' placeholder='Message...'></textarea>
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-success btn-sm w-100'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <section className='background p-5'>
                <h5 className='text-light text-center mb-3'>Newslatter Subscription</h5>
                    <form>
                        <div className='w-100 btn-group'>
                            <input type="email" name="email" className='form-control' placeholder='Enter Email Id to Subscribe Newslatter Service' />
                            <button className='btn btn-primary'>Subscribe</button>
                        </div>
                    </form>
            </section>
            <footer className='background text-light my-1 p-3'>
                    <p className='text-center'>copyright@ducatindia.com</p>
            </footer>
        </>
    )
}


// css property                            Bootstrap class
// background-color:blue                   bg-primary
// color:white                             text-light

// text-align:center                       text-center
// text-align:left                         text-left
// text-align:right                        text-right
// text-align:justify                      text-justify

// display:none                            d-none
// display:inline                          d-inline
// display:block                           d-block
// display:inline-block                    d-inline-block

// display:flex                            d-flex
// flex-direction:row                      flex-row
// flex-direction:row-reverse              flex-row-reverse
// flex-direction:column                   flex-column
// flex-direction:column-reverse           flex-column-reverse
// justify-content:space-around            justify-content-around
// justify-content:space-evenly            justify-content-evenly
// justify-content:space-between           justify-content-between


// padding:10px                            p-1 ... p-5
// padding-top:10px                        pt-1 ... pt-5
// padding-bottom:10px                     pb-1 ... pb-5
// padding-left:10px                       ps-1 ... ps-5
// padding-right:10px                      pe-1 ... pe-5
// padding:10px 0                          py-1 ... py-5
// padding:0 10px                          px-1 ... px-5

// margin:10px                            m-1 ... m-5
// margin-top:10px                        mt-1 ... mt-5
// margin-bottom:10px                     mb-1 ... mb-5
// margin-left:10px                       ms-1 ... ms-5
// margin-right:10px                      me-1 ... me-5
// margin:10px 0                          my-1 ... my-5
// margin:0 10px                          mx-1 ... mx-5


// Grid System : 1 row can contains 12 column max
// breakponts :
// col-xxl-columnCount     eg col-xxl-1 i.e 12 items in a row
// col-xl-columnCount      eg col-xl-2 i.e 6 items in a row
// col-lg-columnCount      eg col-lg-3 i.e 4 items in a row
// col-md-columnCount      eg col-md-4 i.e 3 items in a row
// col-sm-columnCount      eg col-sm-6 i.e 2 items in a row
// col-columnCount         eg col-12 i.e 1 item in a row

// <div className="row">
//     <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
//         ...item1
//     </div>
//     <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
//         ...item2
//     </div>
//     <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
//         ...item2
//     </div>
// </div>

// <div className="row">
//     <div className="col-md-6">
//         item1
//     </div>
//     <div className="col-md-6">
//         item2
//     </div>
// </div>

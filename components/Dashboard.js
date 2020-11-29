import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'

class Dashboard extends Component {
  render() {
    let dataSales = {
      labels: [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308]
      ]
    } ;
    
    let dataSales2 = {
      labels: [
        "27",
        "28",
        "1",
        "2",
        "3",
        "4"
      ],
      series: [
        [0, 100, 200, 300, 400, 500 ]
      ]
    } ;
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

        <div className="col-md-8">
              <div className="card">  
                <div className="flex-box">
                <div className="card-header">
                  <h4 className="card-title">Sales Report September 2020</h4>
                <div className="card-body">
                  <ChartistGraph   data={dataSales} type="Line" id='myChart' style={{ width:'550px', height:'300px' , fontSize:'5px'}} />
                </div>
                </div>
                <div className="card-body-2">
                <div className="card-header-2">
                  <h4 className="card-title-2">17 Sep</h4>
                </div>
                <div className='box1'>
                  <h5>$1,204.33</h5>
                  <p>Revenue</p>
                </div>
                <div className='box2'>
                  <h5>33</h5>
                  <p>Quotations</p>
                </div>
                </div>
                </div>
              </div>

          <div  style={{display:'flex' , marginRight: '15px'}}>
                <div className="card-new">
                  <div className="flex-box-2">
                      <div className="card-new-header">
                        <h4 className="card-new-title">Notepad</h4>
                          <div className="card-new-body">
                            <ul style={{listStyle:'none'}}>
                            
                            <li style={{display:'flex'}}>
                            <div style={{marginRight : '10px'}}><h5>Title</h5></div>
                            <div><p style={{fontSize:'11px'}}>Lorem ipsum dolor sit am...</p></div>
                            </li>
                            
                            <li style={{display:'flex'}}>
                            <div style={{marginRight : '10px'}}><h5>Title</h5></div>
                            <div><p style={{fontSize:'11px'}}>Lorem ipsum dolor sit am...</p></div>
                            </li>
                            
                            <li style={{display:'flex'}}>
                            <div style={{marginRight : '10px'}}><h5>Title</h5></div>
                            <div><p style={{fontSize:'11px'}}>Lorem ipsum dolor sit am...</p></div>
                            </li>
                            <li style={{display:'flex'}}>
                            <div style={{marginRight : '10px'}}><h5>Title</h5></div>
                            <div><p style={{fontSize:'11px'}}>Lorem ipsum dolor sit am...</p></div>
                            </li>
                            </ul>
                          </div>
                      </div>
                      <div className="dots-plus">
                        <span className='dot'>+</span>
                      </div>
                  </div>
                </div>

                <div style={{marginTop : '45px'}}>
                  <div className="card-body-chart-1">
                    <ChartistGraph  data={dataSales2} type="Line"  style={{ width:'200px', height:'150px'}} />
                  </div>
                  <div className="card-body-chart-2" style={{display:'flex' , padding:'5px' , marginTop : '21px'}}>
                    <h6 style={{marginLeft : '20px' ,marginTop:'30px' , fontSize : '20px' , 
                    textTransform : 'capitalize' , fontFamily: "SF Pro Display , sans-serif" , fontStyle:' normal',
                    fontWeight: 'normal'}}>Inbox</h6>
                    <h5 style={{marginLeft : '80px' , marginTop:'20px', fontSize : '30px' }}>23</h5>
                  </div>
                </div>
                <div style={{ marginRight: '15px' }}>

              <div style={{marginTop:'50px'}}>
                <div className='graph-box-2'>
                    <div className="card-body-chart-3" style={{display:'flex'}}>
                      <div style={{marginRight : '30px'}}>
                      <h3 className='head-graph-3'>+7.8%</h3>
                      </div>
                      <ChartistGraph  data={dataSales} type="Line"  style={{ width:'150px', height:'100px'}} />
                    </div>  
                </div>  

                <div className='graph-box-2' style={{marginTop : '50px'}}>
                    <div className="card-body-chart-3" style={{display:'flex'}}>
                      <div style={{marginRight : '30px'}}>
                      <h3 className='head-graph-3'>+67.4%</h3>
                      </div>
                      <ChartistGraph  data={dataSales} type="Line"  style={{ width:'150px', height:'100px'}} />
                    </div>  
                </div>   
              </div>             
          </div>  
        </div>          
      </div>

            <div className="col-md-4">
              <div style= {{width:'330px', height : '680px'}} className="card ">
                        <div className="card-header-tabs flex-container ">
                          <div className='w3-bar'>
                            <button style={{outline : 'none', marginRight : '15px' , backgroundColor: '#FFFFFF'}} className="bar-item">Notifications</button>
                            <button style={{outline : 'none',  marginRight : '5px' , backgroundColor: '#FFFFFF'}} className="bar-item">Events</button>
                          </div>
                        </div>
                        <div className="card-list">
                          <ul style={{listStyle : 'none'}}>
                            <li>
                              <div style={{display:'flex'}}>
                                <div style={{width: '46px' , height: '54px' ,
                                  backgroundColor: '#FFD9D9', marginTop : '15px' , marginRight :'1px',
                                  boxShadow:' 2px 2px 10px rgba(0, 0, 0, 0.1)'}}></div>
                                <div style={{marginTop : '15px' , marginLeft :'20px' }}>
                                <h6>Admin</h6>
                                <p style={{fontFamily: 'SF Pro Display,sans-serif',
                                    fontStyle: 'normal' ,
                                    fontWeight: 'normal',
                                    fontSize: '12px' ,
                                    lineHeight: '14px' ,
                                    color: '#756F6F',
                                    marginTop:'5px'}}>Your faculty uploaded the syllabus.
                                <p style={{fontSize: '7px' , lineHeight: '8px' , marginTop:'5px' }}>3 minutes ago</p>
                                </p>
                                </div>
                              </div>                              
                            </li>  
                            <hr></hr>                         
                            <li>
                              <div style={{display:'flex'}}>
                                <div style={{width: '46px' , height: '54px' ,
                                  backgroundColor: '#D9FFE1', marginTop : '5px' , marginRight :'1px',
                                  boxShadow:' 2px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                                </div>
                                <div style={{marginTop : '5px' , marginLeft :'20px'}}>
                                <h6>Student</h6>
                                <p style={{fontFamily: 'SF Pro Display,sans-serif',
                                    fontStyle: 'normal' ,
                                    fontWeight: 'normal',
                                    fontSize: '12px' ,
                                    lineHeight: '14px' ,
                                    color: '#756F6F',
                                    marginTop:'5px'}}>Your faculty uploaded the syllabus.
                                <p style={{fontSize: '7px' , lineHeight: '8px' ,marginTop:'5px'}}>3 minutes ago</p>    
                                </p>
                                </div>
                              </div>
                            </li>
                            <hr></hr>  
                            <li>
                              <div style={{display:'flex'}}>
                                <div style={{width: '46px' , height: '54px' ,
                                  backgroundColor: '#BA99FF',
                                  marginTop : '5px' , marginRight :'1px',
                                  boxShadow:' 2px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                                </div>
                                <div style={{marginTop : '5px' , marginLeft :'20px'}}>
                                <h6>Teacher</h6>
                                <p style={{fontFamily: 'SF Pro Display,sans-serif',
                                    fontStyle: 'normal' ,
                                    fontWeight: 'normal',
                                    fontSize: '12px' ,
                                    lineHeight: '14px' ,
                                    color: '#756F6F',
                                    marginTop:'5px'}}>Your faculty uploaded the syllabus.
                                <p style={{fontSize: '7px' , lineHeight: '8px' ,marginTop:'5px'}}>3 minutes ago</p>
                                </p>
                                </div>
                              </div>
                            </li>
                            <hr></hr>  
                            <li>
                              <div style={{display:'flex'}}>
                                <div style={{width: '46px' , height: '54px' ,
                                  backgroundColor: '#F5E764', marginTop : '5px' , marginRight :'1px',
                                  boxShadow:' 2px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                                </div>
                                <div style={{marginTop : '5px' , marginLeft :'20px'}}>
                                <h6>Admin</h6>
                                <p style={{fontFamily: 'SF Pro Display,sans-serif',
                                    fontStyle: 'normal' ,
                                    fontWeight: 'normal',
                                    fontSize: '12px' ,
                                    lineHeight: '14px' ,
                                    color: '#756F6F' ,
                                    marginTop:'5px'}}>Your faculty uploaded the syllabus.
                                <p style={{fontSize: '7px' , lineHeight: '8px',marginTop:'5px'}}>3 minutes ago</p>
                                </p>
                                </div>
                              </div>
                            </li>
                            <hr></hr>  
                            <li>
                              <div style={{display:'flex'}}>
                                <div style={{width: '46px' , height: '54px' ,
                                  backgroundColor: '#F5E764', marginTop : '5px' , marginRight :'1px',
                                  boxShadow:' 2px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                                </div>
                                <div style={{marginTop : '5px' , marginLeft :'20px'}}>
                                <h6>Admin</h6>
                                <p style={{fontFamily: 'SF Pro Display,sans-serif',
                                    fontStyle: 'normal' ,
                                    fontWeight: 'normal',
                                    fontSize: '12px' ,
                                    lineHeight: '14px' ,
                                    color: '#756F6F' ,
                                    marginTop:'5px'}}>Your faculty uploaded the syllabus.
                                <p style={{fontSize: '7px' , lineHeight: '8px' ,marginTop:'5px'}}>3 minutes ago</p>
                                </p>
                                </div>
                              </div>
                            </li>
                            <hr></hr>  
                            <li>
                              <div style={{display:'flex'}}>
                                <div style={{width: '46px' , height: '54px' ,
                                  backgroundColor: '#F5E764', marginTop : '5px' , marginRight :'1px',
                                  boxShadow:' 2px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                                </div>
                                <div style={{marginTop : '5px', marginLeft :'20px'}}>
                                <h6 style={{ textTransform : 'captialize'}}>Admin</h6>
                                  <p style={{fontFamily: 'SF Pro Display,sans-serif',
                                    fontStyle: 'normal' ,
                                    fontWeight: 'normal',
                                    fontSize: '12px' ,
                                    lineHeight: '14px' ,
                                    color: '#756F6F' ,
                                    marginTop:'5px'}}>Your faculty uploaded the syllabus.
                                  <p style={{fontSize: '7px' , lineHeight: '8px' ,marginTop:'5px'}}>3 minutes ago</p>
                                  </p>
                                </div>
                              </div>
                            </li> 
                          </ul>
                          <button style={{marginLeft:'100px'  , width:'71px' , height:'21px', border : 'none' , fontSize:'7px', borderRadius :'15px 15px 0px 0px' ,backgroundColor : '#F8F8F8'}}>view all</button>
                        </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
     
      
    );
  }
}

export default Dashboard;

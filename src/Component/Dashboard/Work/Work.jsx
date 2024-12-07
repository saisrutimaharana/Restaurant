import React from 'react'
import { Grid, Card } from "@mui/material";

const Work = () => {
    const data =[
        {src:"https://static.vecteezy.com/system/resources/thumbnails/011/384/459/small_2x/travel-map-pin-sign-location-icon-vector.jpg",title:"Select Location",details:"Choose the location where your food will be delivered."},
        {src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRC-uciAtoaVdk5jfwmala0ZanNuSHiHkobwgK9dU3hyBQqGhXQ",title:"Choose order",details:"Choose the location where your food will be delivered."},
        {src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfg1YfcY375FuwjZBa9GfI9K0LiM_dSpsLojOSV1L9Ozxi05ga",title:"Pay advanced",details:"Choose the location where your food will be delivered."},
        {src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyk693ddooPTPbYh6B9CS9AHuRccNgzM5TCt7JzKuufJOGDxKY",title:"Enjoy meals",details:"Choose the location where your food will be delivered."},
    ]
    
    return (

        <Grid container direction="column" justifyContent="center" textAlign="center" alignItems="center" p={20}>

            <Grid item>
                <h3 style={{ color:"orangered", fontSize: "3.5vw" }}>How does it work</h3>

            </Grid>

            <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} textAlign="center" p={10}>
                {data.map((item, index) => (
                    <Grid item lg={3} sm={6} textAlign="center" key={index}>
                        <Card style={{ height: "250px", width: "200px", textAlign: "center" ,padding:"10px"}}>
                            <img src={item.src} alt=""  style={{ justifyContent: "center", width: "60%", height:"50%" }} />
                            <h2 style={{marginTop:"10px"}}>{item.title}</h2>
                            <p style={{  fontSize: "16px", textAlign: "center", fontStyle:"normal",marginTop:"10px", color: "grey" }}>{item.details}</p>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            
        </Grid>


    )
}

export default Work
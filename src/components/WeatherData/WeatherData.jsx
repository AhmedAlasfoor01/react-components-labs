const WeatherData=(props)=>{
    return( //props.day to display which day as we said props only read 
        <>
        <h2>{props.day}</h2> 
        <p><span>conditions:</span>{props.conditions}</p>
        <p><span>Time:</span>{props.time}</p>
        </>
    ); // we have used them <>(react fragement) because we are gonna use multiple element

};

export  default WeatherData;
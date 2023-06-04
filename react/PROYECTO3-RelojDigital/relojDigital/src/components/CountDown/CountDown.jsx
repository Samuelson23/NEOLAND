import "./CountDown.css"
import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [time, setTime] = useState("")
    const fecha="Jun 25, 2024 00:00:00"  
    useEffect(()=>{
        let countDownDate = new Date(fecha).getTime()
        let x= setInterval(()=>{
            let now= new Date().getTime()
            let diference = countDownDate - now
            let days= Math.floor(diference/(1000*60*60*24))
            let hours= Math.floor((diference%(1000*60*60*24))/(1000*60*60))
            let minutes= Math.floor((diference%(1000*60*60))/(1000*60))
            let seconds= Math.floor((diference%(1000*60))/(1000))
        
            setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`)

            if(diference<=0){
                clearInterval(x)
                setTime("----> COUNTDOWN FINISHED!!! <----")
            }
        },1000)
    },[])


  return (
    <div className="divCountdown">
      <h3>{fecha}</h3>
      <h2>{time}</h2>
      </div>
  )
}

export default CountDown
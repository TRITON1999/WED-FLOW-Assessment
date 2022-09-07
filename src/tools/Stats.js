import React, {useState, useEffect} from "react"
import "./Stats.css"

const Stats = ()=>{
    const [triggered, setTrigger] = useState(false)
    const [stats, setStats] = useState([0, 0, 0, 0, 100, 100])
    const start = [0, 0, 0, 0, 100, 100]
    const final = [21, 27, 100, 17, 56, 60]

    const triggerEvent = () => {
        var t0 = new Date().getTime()
        var intv = setInterval(() => {
            var t1 = new Date().getTime()
            var t = (t1 - t0) / 3000

            var _stats = []
            for(var i = 0; i< 6; i++){
                _stats.push(Math.round(final[i]*t + start[i]*(1-t)))
            }

            setStats(_stats)
            if(t > 1) clearInterval(intv)
        }, 100)
    }

    const checkIfInView = (e) => {
        if(window.pageYOffset > 1500 && !triggered){
            setTrigger(true)
        }
    }

    useEffect(() => {
        window.onscroll = checkIfInView;
    }, [])

    useEffect(() => {
        if(triggered){
            console.log("Triggered");
            triggerEvent()
        }
    }, [triggered])

    return <div className="stats">
        <div className="stitle">Analyse conversation<br />for excellence</div>
        <div className="sgrid" id="sgrid">
            <div className="c"><div className="rangeen"><span id="stat1">{stats[0]}</span> %</div>
            <p>Increase in Sales</p>
            </div>
            <div className="c"><div className="rangeen"><span id="stat2">{stats[1]}</span> %</div>
            <p>Increase in CSAT</p>
            </div>
            <div className="c"><div className="rangeen"><span id="stat3">{stats[2]}</span>%</div>
            <p>Compliance monitoring</p>
            </div>
            <div className="c"><div className="rangeen"><span id="stat4">{stats[3]}</span> %</div>
            <p>Increase in Collection Rate</p>
            </div>
            <div className="c"><div className="rangeen"><span id="stat5">{stats[4]}</span>Sec</div>
            <p>Lower AHT</p>
            </div>
            <div className="c"><div className="rangeen"><span id="stat6">{stats[5]}</span>%</div>
            <p>Decrease in Ramp up time</p>
            </div>
        </div>
    </div>
}

export default Stats

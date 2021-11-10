import React from 'react'
import {Line} from 'react-chartjs-2';


function LineGraph() {


    const data = 
    [{
        x:10,
        y:20
    }, {
        x:15,
        y:10
    }, {
        x:12,
        y:4
    }]
    return (
        <div className="linegraph">
            <Line 
                data= {{
                    labels: ["Nausea", "Fever", "Muscle Pain"],
                    datasets: [
                        { 
                            type: "line",
                            label: 'First dataset',
                            // axis: 'y',
                            // fill: false,
                            // tension: 0.1,
                            backgroundColor: "black",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0, 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                            pointHoverBackgroundColor: '#5AC53B',
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                            data: data,
                        }
                    ]
    
                }}
                options={{
                    legend: {
                        display: false               
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: false,

                                // beginAtZero: true
                            // },
                            // y: {
                            //     suggestedMin: 50,
                            //     suggestedMax: 100
                            }
                        }],
                    },
                }}
            />
        </div>
    )
}

export default LineGraph

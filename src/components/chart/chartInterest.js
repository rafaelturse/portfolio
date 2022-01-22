import React from 'react';
import Chart from "react-apexcharts";

class ChartInterest extends React.Component {
    constructor(props) {
        super(props)

        var colors = ['#111', '#50345B', '#28A745', '#FFC107', '#DC3545', '#17A2b8', '#999', '#D86E0A']

        this.state = {
            series: [{ data: [10, 10, 10, 9.3, 8.2, 7.2, 5.5, 4.6] }],
            
            options: {
                colors: colors,
                dataLabels: { enabled: false },
                fill: { opacity: .85 },
                tooltip: { enabled: false },
                legend: { show: false },
                plotOptions: {
                    bar: {
                        columnWidth: '80%',
                        distributed: true
                    }
                },
                chart: {
                    type: 'bar',
                    height: 350
                },
                stroke: {
                    show: false,
                    width: 2,
                },
                xaxis: {
                    categories: [
                          "Java"
                        , "Design Patters"
                        , "Clean Code"
                        , "Javascript"
                        , "DevOps"
                        , "Frontend"
                        , "DotNet"
                        , "Database"
                    ],
                    labels: {
                        style: {
                            colors: colors,
                        }
                    }
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 11
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        )
    }
}

export default ChartInterest
import React from 'react';
import Chart from "react-apexcharts";

class ChartFocous extends React.Component {
    constructor(props) {
        super(props)

        var colors = ['#28A745', '#FFC107', '#DC3545', '#50345B', '#111']

        this.state = {

            series: [5, 15, 15, 15, 50],
            options: {
                chart: { type: 'pie' },
                colors: colors,
                dataLabels: { enabled: false },
                fill: { opacity: .9 },
                labels: ['Database', 'DevOps', 'Frontend', 'Design Patterns', 'Backend'],
                legend: {
                    position: 'bottom',
                },
                pie: { expandOnClick: true },
                stroke: {
                    show: true,
                    width: 5,
                    colors:['#F9F9F9']
                },
            }
        };
    }

    render() {
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type="pie" width="500" />
            </div>
        );
    }
}

export default ChartFocous
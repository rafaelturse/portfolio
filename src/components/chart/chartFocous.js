import React from 'react';
import Chart from "react-apexcharts";

class ChartFocous extends React.Component {
    constructor(props) {
        super(props)

        var colors = ['#28A745', '#FFC107', '#DC3545', '#50345B', '#111']

        this.state = {

            series: [10, 10, 10, 20, 50],
            options: {
                chart: { type: 'pie' },
                colors: colors,
                dataLabels: { enabled: false },
                labels: ['Database', 'DevOps', 'Frontend', 'Design Patterns', 'Backend'],
                legend: {
                    position: 'right',
                    offsetY: 0
                },
                pie: { expandOnClick: true },
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
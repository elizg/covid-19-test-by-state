import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Chart = ({ data }) => {

    const { positive, negative, totalTestResults } = data

    const dataStructure = {
        positive,
        negative,
        Total: totalTestResults
    }

    const chartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [
            {
                data: Object.values(dataStructure),
                label: 'COVID-19 Test Results',
                backgroundColor: '#0000FF',
                textAlign: 'center'
            }
        ]
    };

    return (
        <div>
            <HorizontalBar data={ chartDataConfig } />
        </div>
    )
}

export default Chart
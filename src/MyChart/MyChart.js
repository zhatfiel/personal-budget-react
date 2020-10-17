import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import axios from 'axios';

const state = {
  labels: [],
  datasets: [
    {
        backgroundColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#ff0000',
            '#32a852',
            '#5132a8',
            '#a83255',
            '#59ff00'
        ],
      data: [65, 59, 80, 81, 56, 27, 88, 11, 98]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Personal Budget',
              fontSize:20,
              fontFamily: 'Tahoma, Arial',
              fontColor: 'black',
              position:'top'
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          width={400}
          height={400}
        />
      </div>
    );
  }

// componentDidMount() {
//     axios.get('/public/budgetData.json').then(res => {
        
//     })
// }

}
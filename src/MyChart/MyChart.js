import React from "react";
import Pie from "react-chartjs-2";
import axios from "axios";

export default class MyChart extends React.Component {
  //   state = {
  //     labels: [],
  //     datasets: [
  //       {
  //         backgroundColor: [
  //           "#ffcd56",
  //           "#ff6384",
  //           "#36a2eb",
  //           "#fd6b19",
  //           "#ff0000",
  //           "#32a852",
  //           "#5132a8",
  //           "#a83255",
  //           "#59ff00",
  //         ],
  //         data: [],
  //       },
  //     ],
  //   };

  state = {
    labels: [],
    datasets: [
      {
        backgroundColor: [
        ],
        data: [],
      },
    ],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/budget")
      .then((res) => {
        const labels = [];
        const datasets = [{
            backgroundColor: [
                "#ffcd56",
                "#ff6384",
                "#36a2eb",
                "#fd6b19",
                "#ff0000",
                "#32a852",
                "#5132a8",
                "#a83255",
                "#59ff00",
            ],
            data:[]
        }];
        
        for (var i = 0; i < res.data.myBudget.length; i++) {
          //   this.datasets.setState({ data: res.data.myBudget[i].budget });
          //   this.setState({ labels: res.data.myBudget[i].title });
          datasets[0].data[i] = res.data.myBudget[i].budget;
          labels[i] = res.data.myBudget[i].title;
        }
        this.setState({ labels });
        this.setState({ datasets });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Pie
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Personal Budget",
              fontSize: 20,
              fontFamily: "Tahoma, Arial",
              fontColor: "black",
              position: "top",
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
          width={400}
          height={400}
        />
      </div>
    );
  }
}

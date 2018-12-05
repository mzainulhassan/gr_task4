import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})
export class LineChartComponent implements OnInit {

  @Input() labels: string[];
  @Input() data: number[] | null = [];
  public type = "line";
  public legend = false;
  public options: any = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };


  constructor() { }

  ngOnInit() {
  }

}

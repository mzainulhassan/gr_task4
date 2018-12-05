import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {

  @Input() labels: string[];
  @Input() data: number[];
  public type = "horizontalBar";
  public legend = false;
  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
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

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit {

  @Input() labels: string[];
  @Input() data: number[];
  public type = "pie";
  public legend = true;
  public options: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit() {
  }

}

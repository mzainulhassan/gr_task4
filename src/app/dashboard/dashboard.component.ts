import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UrlService } from "../url.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})

export class DashboardComponent implements OnInit {
    public isLoading = true;

    public totalClicks = "";
    public analytics = "";
    public original = "";
    public created = "";

    public pieChartData: Array<any> = [];
    public pieChartLabels: Array<any> = [];

    public barChartLabels: string[] = [];
    public barChartData: any[] = [];

    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [];

    constructor(private urlService: UrlService, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.getProps();
    }

    getProps() {
        const routeParams = this.activeRoute.snapshot.params;

        this.urlService.getProps(routeParams.id).subscribe(
        data => {
            console.log(data);
            this.analytics = data.url[2];
            this.original = data.url[1];
            this.created = data.url[3];
            this.totalClicks = data.clickCount;
            this.barChartData = [{data: data.platform.data}];
            this.barChartLabels = data.platform.label;
            this.pieChartData = [{data: data.browser.data}];
            this.pieChartLabels = data.browser.label;
            this.lineChartData =  [{data: data.clickDate.data }];
            this.lineChartLabels =  data.clickDate.label;
            this.isLoading = false;
        },
        error => {
            console.log(error);
        });
    }

}

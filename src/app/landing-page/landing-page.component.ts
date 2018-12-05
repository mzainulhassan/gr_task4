import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar, MatTableDataSource } from "@angular/material";
import { UrlService } from "../url.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})

export class LandingPageComponent implements OnInit {

  public inputURL = "";
  public isLoading = true;

  displayedColumns: string[] = ["originalURL", "created", "shortURL", "allClicks"];
  dataSource = new MatTableDataSource();


  constructor(private http: HttpClient, public snackbar: MatSnackBar, public urlService: UrlService) { }

  ngOnInit() {
    this.getAllUrls();
  }

  getAllUrls() {
    this.urlService.getAllURLs().subscribe(data => {
      this.dataSource.data = data;
      this.isLoading = false;
    },
    error => {
      console.log(error);
    });
  }

  sendURL() {
    this.isLoading = true;
    this.urlService.sendURL(this.inputURL).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.snackbar.open("URL Created", "close", {
          duration: 3000
        });
        this.getAllUrls();
        this.isLoading = false;
      },
      error => {
        this.snackbar.open("Invalid URL", "close", {
          duration: 3000
        });
        console.log(error);
        this.isLoading = false;
      }
    );
    this.inputURL = "";
  }
}

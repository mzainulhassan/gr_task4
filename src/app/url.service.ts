import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { formatDate } from "@angular/common";
import { Observable } from "rxjs";

export interface UrlElement {
  urlID: number;
  originalURL: string;
  created: Date;
  shortURL: string;
  allClicks: number;
}

@Injectable({
  providedIn: "root"
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getAllURLs(): Observable<any> {
    return this.http.get<any>("getAll")
    .pipe(
      map((response: any) => {
        const URL_DATA: UrlElement[] = response;
        return URL_DATA;
      })
    );
  }

  sendURL(inputURL: string) {
    return this.http.post("task4/",
    {
      "url" : inputURL
    });
  }

  getProps(id: number): Observable<any> {
    return this.http.get<any>("getProps/" + id)
    .pipe(
      map((response: any) => {
        const data = response[0];
        data.url[3] = formatDate(new Date(data.url[3]), "MMM dd, yyyy", "en-US");
        data.clickCount = (data.clickCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        data.clickDate.label = data.clickDate.label.map((value) => {
          return formatDate(new Date(value), "MM/dd/yyyy", "en-US");
        });
        return data;
      })
    );
  }
}

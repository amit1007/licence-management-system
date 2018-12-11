import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Console } from '@angular/core/src/console';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";
const  euserUrl = "/euser";
const mainuserUrl = "/mainuser"
const freeuserUrl = "/freeuser";
// const LAdetailsUrl = "/ladetails";
// const FreeuserdetailsUrl = "/freeuserdetails"


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

private handleError(error: HttpErrorResponse) 
{
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
};


private extractData(res: Response) {
  let body = res;
  return body || { };
}

getBooks(): Observable<any> {
  return this.http.get(apiUrl, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}




getBook(id: string): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.get(url, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}



postBook(data): Observable<any> {
  return this.http.post(apiUrl, data, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}




deleteBook(id: string): Observable<{}> {
  const url = `${apiUrl}/${id}`;
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}



updateBook(id, data): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.put(url, data, httpOptions)
  .pipe(
  catchError(this.handleError)
  );
  }

  getEuser(): Observable<any> {
    return this.http.get(euserUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postEuser(data): Observable<any> {
    return this.http.post(euserUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  postMainuser(data): Observable<any> {
    return this.http.post(mainuserUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getLAdetails(): Observable<any> {
    return this.http.get(mainuserUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  postFreeuser(data): Observable<any> {
    return this.http.post(freeuserUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  getFreeUsersDetails(): Observable<any> {
    return this.http.get(freeuserUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getReport(id: string): Observable<any> {
    const url = `${mainuserUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  deleteReport(id: string): Observable<{}> {
    const url = `${mainuserUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getMainuser(): Observable<any> {
    const url = `${mainuserUrl}/$`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}

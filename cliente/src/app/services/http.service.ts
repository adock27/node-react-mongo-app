import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    public get(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe({
                next: (data: any) => resolve(data),
                error: (error) => reject(error),
            });
        });
    }

    public post(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(url, data).subscribe({
                next: (data: any) => resolve(data),
                error: (error) => reject(error),
            });
        });
    }

    public put(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.put(url, data).subscribe({
                next: (data: any) => resolve(data),
                error: (error) => reject(error),
            });
        });
    }

    public delete(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.delete(url).subscribe({
                next: (data: any) => resolve(data),
                error: (error) => reject(error),
            });
        });
    }
}
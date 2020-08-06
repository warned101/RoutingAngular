import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http"
import { Post } from "../login/post"

@Injectable()
export class MyApiService{

    constructor(private httpClient:HttpClient){}

    checkLoginCredentials():Observable<any>{
        return;
    }

    submitRegistrationCredentials(post:Post):Observable<any>{
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", post);
    }

}
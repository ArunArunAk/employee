import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule }  from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }
 /* 
  this.http.get("https://jsonplaceholder.typicode.com/todos");///
  this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  this.http.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`,todoId);
 this.http.post(`https://jsonplaceholder.typicode.com/todos`,data);
 this.http.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data);

*/
  putempolyees(data:any){
           return this.http.post('http://localhost:3000/posts',data).pipe(map((res:any)=>{
            // return this.http.get('https://fir-crud-ba911-default-rtdb.firebaseio.com/data.json').pipe(map((res:any)=>{

            return res;
           }))
          
  }
      //  return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map((res:any)=>{
// return this.http.get('https://fir-crud-ba911-default-rtdb.firebaseio.com/data.json').pipe(map((res:any)=>{
  // return this.http.get('http://localhost:3000/posts').pipe(map((res:any)=>{



 getempolyees(){

    return this.http.get('http://localhost:3000/posts').pipe(map((res:any)=>{
      // return this.http.get('https://fir-crud-ba911-default-rtdb.firebaseio.com/data.json').pipe(map((res:any)=>{

         return res;
    }))
   
 }

 deleteempolyees(id:number){
  return this.http.delete('http://localhost:3000/posts/'+id).pipe(map((res:any)=>{
   return res;
  }))
 }
updateempolyees(id:number,data:any){
  return this.http.put("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
   return res;
  }))
 
}
// savebook(books:any[]){
//       return this.http.post('https://empolyee-8982a-default-rtdb.firebaseio.com/data',books)
// }
getData() {
  return this.http.get('https://empolyee-8982a-default-rtdb.firebaseio.com/data.json');
}
savebook(data: any) {
  return this.http.post('https://empolyee-8982a-default-rtdb.firebaseio.com/data.json', data);
}




// --------------------------------------------------------

  
}

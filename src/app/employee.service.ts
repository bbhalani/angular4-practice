import { Employee } from './employee/employee';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _employeesUrl = './assets/employee.json'; 

  constructor(private _http: Http) {}

  getAllEmployees(): Observable<Employee[]> {
      return this._http.get(this._employeesUrl )
      .map((response: Response) => <Employee[]> response.json())
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getEmployeeDetails(id: number): Observable<Employee> {
      let employee: Observable<Employee>;
      employee = this.getAllEmployees()
      .map((employees: Employee[]) => employees.find(e => e.id === id));
      //.do(data => console.log(JSON.stringify(data)));
      return employee;
  }

  postEmployee(employee: Employee): Observable<Employee>{
       return this._http.post(this._employeesUrl, employee)
          .map((res: Response) => <Employee> res.json())
          .catch(this.handleError);
  }

  putEmployee(id:number, employee: Employee): Observable<Employee>{
       return this._http.put(this._employeesUrl + '/' + id, employee)
      .map((res:Response) => <Employee> res.json())
      .catch(this.handleError);
  }

  deleteEmployee(id:number){
      this._http.delete(this._employeesUrl + '/' + id);
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }


}

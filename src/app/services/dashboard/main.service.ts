import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '@myInterfaces/user';
import { GeneralInformation } from '@myInterfaces/general-information';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService 
{
  // public API_URI = "http://aqueous-ridge-01368.herokuapp.com/api/"
  public API_URI = "http://localhost:8000/api/"

  public header = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  };

  constructor(
    private http: HttpClient
  ) 
  { }

  /**
   * Obtiene los datos del usuario que esta logueado.
   */
  getUser(): Observable<User>
  {    
    return this.http.post<User>(this.API_URI + "me", this.header);
  }

  /**
   * Obtiene el número de recurso existentes (rutas,vehiculos, clientes... etc.).
   */
  getGeneralInformation(): Observable<GeneralInformation>
  {
    return this.http.get<GeneralInformation>(this.API_URI + "general", this.header);
  }

}

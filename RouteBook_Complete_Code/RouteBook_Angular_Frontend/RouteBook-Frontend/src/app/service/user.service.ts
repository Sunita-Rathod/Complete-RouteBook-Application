import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

const apiUrl="http://localhost:8080/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/all-users`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${apiUrl}/get-user/${id}`);
  }
  
  updateUser(id: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${apiUrl}/update-user/${id}`, updatedUser);
  }
  
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${apiUrl}/delete-user/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/create-user`, user);
  }
}

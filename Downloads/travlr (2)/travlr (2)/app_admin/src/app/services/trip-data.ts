import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trips';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private readonly apiBaseUrl = '/api';

  constructor(private http: HttpClient) {}

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(
      `${this.apiBaseUrl}/trips`
    );
  }

  public addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(
      `${this.apiBaseUrl}/trips`,
      trip
    );
  }

  public login(
    user: User,
    passwd: string
  ): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  public register(
    user: User,
    passwd: string
  ): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  private handleAuthAPICall(
    endpoint: string,
    user: User,
    passwd: string
  ): Observable<AuthResponse> {
    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(
      `${this.apiBaseUrl}/${endpoint}`,
      formData
    );
  }
}
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard {
  @Input() trip!: Trip;

  constructor(private router: Router) { }

  editTrip(): void {
    localStorage.setItem('tripCode', this.trip.code);
    this.router.navigate(['/edit-trip']);
  }
}

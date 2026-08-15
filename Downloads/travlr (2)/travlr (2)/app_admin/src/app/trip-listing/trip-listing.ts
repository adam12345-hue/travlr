import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips = trips;

  ngOnInit(): void {
    console.log(`There are ${this.trips.length} trips available`);
  }

  addTrip(): void {
    console.log('Add Trip button clicked');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.scss'],
})
export class BuildingDetailComponent implements OnInit {
  buildingData = [
    {
      name: 'Apptunix Development Zone',
      buildingTowers: 'Apptunix Tower 1',
      propertyType: 'Commercial',
      minPrice: 70000,
      configuration: ["3 bedrooms","2 bathrooms"],
      image: 'img1.png'
    },
    {
      name: 'Apptunix Marketing Zone',
      buildingTowers: 'Apptunix Tower 2',
      propertyType: 'Commercial',
      minPrice: 65000,
      configuration: ["3 bedrooms", "2 bathrooms"],
      image: 'img2.jpg'
    },
    {
      name: 'Apptunix Content Zone',
      buildingTowers: 'Apptunix Tower 3',
      propertyType: 'Rental',
      minPrice: 5000,
      configuration: ["2 bedrooms", "2 bathrooms"],
      image: 'img3.jpg'
    },
    {
      name: 'Apptunix Mobile Development Zone',
      buildingTowers: 'Apptunix Tower 4',
      propertyType: 'Commercial',
      minPrice: 80000,
      configuration: ["4 bedrooms", "2 bathrooms", "1 halfBathroom"],
      image: 'img1.png',
    },
    {
      name: 'Apptunix HR Zone',
      buildingTowers: 'Apptunix Tower 5',
      propertyType: 'Residential',
      minPrice: 45000,
      configuration: ["2 bedrooms", "1 bathroom", "1 halfBathroom"],
      image: 'img2.jpg'
    },
    {
      name: 'Apptunix Board of Director Zone',
      buildingTowers: 'Apptunix Tower 6',
      propertyType: 'Residential',
      minPrice: 50000,
      configuration: ["2 bedrooms", "2 bathrooms"],
      image: 'img3.jpg'
    },
  ];

  updatedBuildingData = [{}];
  constructor() {}

  ngOnInit(): void {
    this.updatedBuildingData = this.buildingData;
  }

  fetchFilteredData(event:any){
    console.log("Updated Content",event);
    this.updatedBuildingData = event;
  }
}

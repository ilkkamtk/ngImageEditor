import {Component, OnInit} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.css']
})
export class ColorFilterComponent implements OnInit {

  private red = 0;
  private green = 0;
  private blue = 0;
  private strength = 0;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

}

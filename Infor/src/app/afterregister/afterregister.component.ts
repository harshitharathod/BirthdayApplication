import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afterregister',
  templateUrl: './afterregister.component.html',
  styleUrls: ['./afterregister.component.css']
})
export class AfterregisterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  name: string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(param=>
      this.name=param['name'])
  }

}

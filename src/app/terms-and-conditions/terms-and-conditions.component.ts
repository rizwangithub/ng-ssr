import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html'
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title) {

    this.meta.updateTag({ name: 'description', content: 'Terms & Conditions' });
    this.titleService.setTitle("Terms & Conditions");
  }

  ngOnInit() {
  }
}

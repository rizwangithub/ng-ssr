import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    bgColor: boolean = false;
    iconHamburger: boolean = false;

    constructor() { }

    toggleHeaderBg() {
        this.bgColor = !this.bgColor;
    }
    toggleHamburger() {
        this.iconHamburger = !this.iconHamburger;
    }
}

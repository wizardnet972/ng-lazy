import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shell',
    template: `im shell`
})

export class ShellComponent implements OnInit {
    constructor() { 
        console.log('in shell constructor');
    }

    ngOnInit() { 
        console.log('in shell ngOnInit');

    }
}
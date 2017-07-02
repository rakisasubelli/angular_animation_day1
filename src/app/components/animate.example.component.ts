import { Component } from  '@angular/core';
import {trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
    selector: 'animate-example',
    template: `
    
    <p [@rkFirastAnimation]='state' (click)="animateMe()">This is the animation day one tutorials</p>
    
    `,
    styles:[`
    p {
        width:200px,;
        background:lightgray;
        margin:100px auto;
        text-align:center;
        padding:20px;
        font-size:1.5em;
    }
    `],
    animations:[
        trigger('rkFirastAnimation',[
            state('small',style({
                transform: 'scale(1)'
            })),
            state('large',style({
                transform: 'scale(1.5)'
            })),
            transition('small <=> large', animate('1000ms ease-in'))
        ]),
    ]
})
export class AnimateExampleComponent {
    state: string = "small";
    animateMe() {
        this.state = (this.state === 'small' ? 'large':'small');
    }

}
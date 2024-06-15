import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('void', style({
    left: '-21vw'
  })),

  transition(':enter, :leave', animate(300))
]);
export  const fadeInOut=
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(50)
      ])
    ])
export  const fadeInOutImg=
    trigger('fadeInOutImg', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(30)
      ])
    ])

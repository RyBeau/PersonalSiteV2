import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [style({ opacity: 0 }), animate('{{duration}}ms {{delay}}ms {{style}}', style({ opacity: 1 }))], {
    params: { delay: 0, duration: 300, style: 'ease-in-out' },
  }),
]);

export const fadeOutAnimation = trigger('fadeOutOutAnimation', [
  transition(':leave', [style({ opacity: 1 }), animate('{{duration}}ms {{delay}}ms ease-in', style({ opacity: 0 }))], {
    params: { delay: 0, duration: 300 },
  }),
]);

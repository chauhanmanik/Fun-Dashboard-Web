import { ContentComponent } from './content.component';
import { DimensionalCssScrollComponent } from './dimensional-css-scroll/dimensional-css-scroll.component';

export const CONTENT_ROUTES = [
  {
    path: '',
    component: ContentComponent,

    children: [
      {
        path: 'dimensional-css-scroll',
        component: DimensionalCssScrollComponent,
      },
    ],
  },
];

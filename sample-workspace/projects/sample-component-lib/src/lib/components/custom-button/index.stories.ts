import { CustomButtonComponent } from './custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import '!style-loader!css-loader!sass-loader!../../../../styles/thema.scss';

export default { title: 'CustomButtonComponent' };

export const withText = () => ({
  component: CustomButtonComponent,
  moduleMetadata: {
    imports: [MatButtonModule],
    providers: []
  },
});

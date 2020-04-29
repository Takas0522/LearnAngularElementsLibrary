import { SampleFormGroupComponent } from './sample-form-group.component';
import { SampleFormGroupService } from './sample-form-group.service';
import '!style-loader!css-loader!sass-loader!../../../../styles/thema.scss';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default { title: 'SampleFormGroupComponent' };

export const 住所入力FormGroup = () => ({
  component: SampleFormGroupComponent,
  moduleMetadata: {
    imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, BrowserAnimationsModule ],
    providers: [ SampleFormGroupService ]
  },
});

import { RouterPageComponent } from './router-page.component';
import '!style-loader!css-loader!sass-loader!../../../../styles/thema.scss';
import { CustomLibRoutingModule as CustomLibRoutingModule } from '../../custom-lib-routing.module';

export default { title: 'SampleFormGroupComponent' };

export const Router付きコントロール = () => ({
  component: RouterPageComponent,
  moduleMetadata: {
    imports: [ CustomLibRoutingModule ]
  },
});

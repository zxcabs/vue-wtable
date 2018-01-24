import { storiesOf } from '@storybook/vue';
import Simple from './simple/Simple';
import Pagination from './pagination/Pagination';

storiesOf('examples', module)
  .add('simple', () => Simple)
  .add('pagination', () => Pagination);

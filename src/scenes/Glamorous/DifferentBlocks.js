import config from '../../config';
import glamorous from 'glamorous';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const component = glamorous(Block)({
    border: `${size + 2}px solid #000`,
    borderRadius: `${size * 6}px`,
  });

  components.push(component);
}

export default components;

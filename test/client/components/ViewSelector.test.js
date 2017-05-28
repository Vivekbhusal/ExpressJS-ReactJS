import React from 'react';
import { shallow } from 'enzyme';
import ViewSelector from './../../../src/client/components/ViewSelector';

describe('ViewSelector Component::', () => {
    it('should render component', () => {
        const props = {
            displayType: 'list',
          };

        const enzymeWrapper = shallow(<ViewSelector {...props} />);

        expect(enzymeWrapper.find('span').length).toEqual(2);
      });

    it('should render active class component', () => {
        const props = {
            displayType: 'grid',
          };

        const enzymeWrapper = shallow(<ViewSelector {...props} />);

        expect(enzymeWrapper.find('.grid').hasClass('active')).toBe(true);
      });
  });

import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('should render without crashing', () => {
        shallow(<Feedback />)
    })
})
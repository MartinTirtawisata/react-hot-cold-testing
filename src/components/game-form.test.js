import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';
import { isAbsolute } from 'path';

describe('<GuessForm />', () => {
    it('should render form without crash', () => {
        shallow(<GuessForm />);
    });

    it('should fire the onMakeGuess callback when the form is submitted', () => {
        let callback = jest.fn();
        let wrapper = mount(<GuessForm onMakeGuess={callback} />);
        let value = 10;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    })
})
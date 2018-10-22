import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Should render without crashing', () => {
        shallow(<Game />)
    })

    it('Should start a new game', () => {
        let wrapper = shallow(<Game />);

        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
        
    })

    it('can make guesses', () => {
        let wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        })

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('guesses')).toEqual([100])
        expect(wrapper.state('feedback')).toEqual('You got it!')
    })
})
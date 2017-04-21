import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Question from '../src/Quiz/components/Question.jsx';

describe('<Question />', () => {

    it('должен генерировать две радио-кнопки', () => {
        const wrapper = shallow(
            <Question variants={[{value: 'val1', label: 'text1'}, {value: 'val2', label: 'text2'}]} />
        );
        expect(wrapper.find('RadioButton').length).to.equal(2);
    });

    it('должен вызывать событие onChange при клике по радио-кнопкам', () => {
        const onChange = sinon.spy();
        const wrapper = shallow(
            <Question
                onChange={onChange}
                variants={[{value: 'val1', label: 'text1'}, {value: 'val2', label: 'text2'}]}
            />
        );
        wrapper.find('RadioButtonGroup').simulate('change', 'val1');
        expect(onChange.callCount).to.equal(1);
    });

    it('должен показывать картинку, если передан параметр image', () => {
        const wrapper = shallow(
            <Question
                image='url-to-image'
                variants={[{value: 'val1', label: 'text1'}, {value: 'val2', label: 'text2'}]}
            />
        );
        expect(wrapper.find('CardMedia').exists()).to.equal(true);
    });

    it('не должен показывать картинку, если не передан параметр image', () => {
        const wrapper = shallow(
            <Question
                variants={[{value: 'val1', label: 'text1'}, {value: 'val2', label: 'text2'}]}
            />
        );
        expect(wrapper.find('CardMedia').exists()).to.equal(false);
    });
});
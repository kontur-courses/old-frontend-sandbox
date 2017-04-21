import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import QuizPage from '../src/Quiz/components/QuizPage.jsx';

describe('<QuizPage />', () => {

    it('не должен показывать блок вопросов, если передан пустой список', () => {
        const wrapper = shallow(
            <QuizPage
                questions={[]}
            />
        );
        expect(wrapper.find('QuestionList').exists()).to.equal(false);
        expect(wrapper.find('RaisedButton').exists()).to.equal(false);
    });

    it('не должен показывать блок вопросов, если не передано ничего', () => {
        const wrapper = shallow(
            <QuizPage />
        );
        expect(wrapper.find('QuestionList').exists()).to.equal(false);
        expect(wrapper.find('RaisedButton').exists()).to.equal(false);
    });

    it('должен показывать блок вопросов, если вопросы переданы', () => {
        const wrapper = shallow(
            <QuizPage
                questions={[{}, {}, {}]}
            />
        );
        expect(wrapper.find('QuestionList').exists()).to.equal(true);
        expect(wrapper.find('RaisedButton').exists()).to.equal(true);
    });

    it('должен вызывать onSubmit при клике по кнопке', () => {
        const onSubmit = sinon.spy();
        const wrapper = shallow(
            <QuizPage
                questions={[{
                    variants: [
                        {value: 'val1', label: 'text1'},
                        {value: 'val2', label: 'text2'}
                    ]
                }]}
                onSubmit={onSubmit}
            />
        );

        wrapper.find('RaisedButton').simulate('click');
        expect(onSubmit.callCount).to.equal(1);
    });
});

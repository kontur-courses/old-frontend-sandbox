import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import QuestionList from '../src/Quiz/components/QuestionList.jsx';

describe('<QuestionList />', () => {
    it('должен создавать столько вопросов, сколько в него передано', () => {
        const wrapper = shallow(
            <QuestionList
                questions={[{}, {}, {}, {}]}
            />
        );
        expect(wrapper.find('Question').length).to.equal(4);
    });

    it('должен вызывать onChange при изменениях ответов', () => {
        const onChange = sinon.spy();
        const wrapper = shallow(
            <QuestionList
                questions={[{
                    variants: [
                        {value: 'val1', label: 'text1'},
                        {value: 'val2', label: 'text2'}
                    ]
                }]}
                onChange={onChange}
            />
        );

        wrapper.find('Question').simulate('change', 'val1');
        expect(onChange.callCount).to.equal(1);
    });
});
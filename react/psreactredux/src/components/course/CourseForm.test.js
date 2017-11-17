import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving=false) {
    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}   
    };
    
    return shallow(<CourseForm {...props} />);
}

describe('Course Form', () => {
    it('renders form and h1', () => {
        const wrapper = setup();
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labelled "Save" when not saving', () => {
        const wrapper = setup();
        expect(wrapper.find('input').props().value).toEqual('Save');
    });

    it('save button is labelled "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toEqual('Saving...');
    });
});


/*import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving=false) {
    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}   
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props, 
        output,
        renderer
    };
}

describe('Course Form via React Test Utils', () => {
    it('renders form and h1', () => {
        const {output} = setup();
        expect(output.type).toBe('form');

        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labelled "Save" when not saving', () => {
        const {output} = setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labelled "Saving..." when saving', () => {
        const {output} = setup(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
    });*/

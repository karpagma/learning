import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        // Arrange
        const initialState = [
            {title: 'abc'}, {title: 'xyz'}
        ];
        const newCourse = {title: 'pqr'};
        const action = actions.createCourseSuccess(newCourse);

        // Act
        const newState = courseReducer(initialState, action);
        
        // Assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('abc');
        expect(newState[1].title).toEqual('xyz');
        expect(newState[2].title).toEqual('pqr');

    });
});

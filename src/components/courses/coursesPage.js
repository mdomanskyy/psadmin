"use strict";

var React = require('react');
var CoursesList = require('./coursesList');
var CoursesStore = require('../../stores/coursesStore');

var CoursesPage = React.createClass({
    
    getInitialState: function() {
        return {
            courses: CoursesStore.getAllCourses()
        };
    },
    
    componentWillMount: function() {
        CoursesStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        CoursesStore.removeChangeListener(this._onChange);
    },
    
    _onChange: function() {
        this.setState({courses: CoursesStore.getAllCourses()});
    },
    
    render: function() {
        return (
            <div>
                <h1>Courses</h1>
                <CoursesList courses={this.state.courses}/>
            </div>
        );
    }
});

module.exports = CoursesPage;
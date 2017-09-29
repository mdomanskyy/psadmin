"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/coursesStore');

var ManagerCourse = React.createClass({
    
    getInitialState: function() {
        return {
            course: {title:'', author: {name:""}},
            errors: {}
        };
    },
    
    componentWillMount: function() {
        var courseId = this.props.params.id;
        if (courseId) {
            this.setState({course: CourseStore.getCoursesById(courseId)});
        }
    },
    
    render: function() {
        return (
            <CourseForm 
                course={this.state.course} 
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManagerCourse;


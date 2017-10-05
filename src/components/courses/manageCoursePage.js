"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/coursesStore');
var AuthorStore = require('../../stores/authorStore');
var CourseAction  = require('../../actions/courseActions');
var Router = require('react-router');
var toastr = require('toastr');

var ManagerCoursePage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
      willTransitionFrom:function(transition, component){
          if (component.state.dirty && !confirm("Leave without saving?")) {
              transition.abort();
          }
      }
    },

    getInitialState: function() {
        return {
            course: {title:'', author: {name:""}},
            errors: {},
            dirty: false
        };
    },
    
    componentWillMount: function() {
        var courseId = this.props.params.id;
        if (courseId) {
            this.setState({
                course: CourseStore.getCoursesById(courseId),
                authorList: AuthorStore.getAllAuthors()
            });
        }
    },

    setCourseState: function(event) {
       this.setState({dirty:true});
       var field = event.target.name;
       var value = event.target.value;
       this.state.course[field] = value;
       return this.setState({course:this.state.course});
    },

    saveCourse: function(event) {
        event.preventDefault();

        if (this.state.course.id) {
            CourseAction.updateCourse(this.state.course);
        } else {
            CourseAction.createCourse(this.state.course);
        }

        this.setState({dirty:false});
        toastr.success('Course saved!');

        this.transitionTo('courses');
    },
    
    render: function() {
        return (
            <CourseForm
                authorList={this.state.authorList}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                course={this.state.course} 
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManagerCoursePage;


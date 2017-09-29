"use strict";

var React = require('react');
var Router = require('react-router');
var CourseActions = require('../../actions/courseActions');
var Link = Router.Link;
var toastr = require('toastr');

var CoursesList = React.createClass({
    
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },
    
    deleteCourse: function(id, event) {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success("Course Deleted!");
    },
    
    render: function() {
        var createCourseRow = function(course) {
            return (
                <tr key={course.id}>
                    <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
                    <td><Link to="manageCourse" params={{id:course.id}}>{course.id}</Link></td>
                    <td>{course.title}</td>
                    <td><Link to="manageAuthor" params={{id:course.author.id}}>{course.author.name}</Link></td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>*</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CoursesList;

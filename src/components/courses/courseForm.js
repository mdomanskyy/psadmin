"use strict";

var React = require('react');
var TextInput = require('../common/TextInput');
var Select = require('../common/select');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object,
        authorList: React.PropTypes.array
    },

    render: function() {
        var authorLabelFunc = function (item) {
            return item.firstName + " " + item.lastName;
        };

        var authorValueFunction = function (item) {
            return {id:item.id, name: item.firstName + " " + item.lastName};
        };

        return (
            <form>
                <h1>Manage Course</h1>

                <TextInput
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title}/>

                <TextInput
                    name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category}/>


                <TextInput
                    name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length}/>

                <Select
                    name="author"
                    label="Author"
                    labelField={'lastName'}
                    labelFunction={authorLabelFunc}
                    keyField={'id'}
                    dataProvider={this.props.authorList}
                    value={this.props.course.author}
                    valueFunction={authorValueFunction}
                    onChange={this.props.onChange}
                    error={this.props.errors.author}/>


                <TextInput
                    name="watchHref"
                    label="Watch Link"
                    value={this.props.course.watchHref}
                    onChange={this.props.onChange}
                    error={this.props.errors.watchHref}/>

                <input type="submit" value="Save"
                    className="btn btn-default"
                    onClick={this.props.onSave}/>
            </form>
        );
    }

});

module.exports = CourseForm;
"use strict";

var React = require('react');

var Select = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,

        label: React.PropTypes.string.isRequired,
        labelField: React.PropTypes.string,
        labelFunction: React.PropTypes.func,

        value: React.PropTypes.object,
        valueField: React.PropTypes.object,
        valueFunction: React.PropTypes.func,

        error: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        keyField: React.PropTypes.string.isRequired,
        dataProvider: React.PropTypes.array
    },

    createOption: function(item) {
        var itemLabel = this.props.labelFunction ? this.props.labelFunction(item) : this.props.labelField ? item[this.props.labelField] : item;
        var itemValue = this.props.valueFunction ? this.props.valueFunction(item) : this.props.valueField ? item[this.props.valueField] : item;
        return (
            <option key={item[this.props.keyField]} value={itemValue}>{itemLabel}</option>
        )
    },

    render: function () {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select name={this.props.name}
                            ref={this.props.name}
                            className="form-control"
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            value={this.props.value}>
                        {this.props.dataProvider ? this.props.dataProvider.map(this.createOption, this) : ''}
                    </select>
                </div>
            </div>
        );
    }
});

module.exports = Select;
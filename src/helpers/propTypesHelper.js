import {React, PropTypes } from 'react';

const PropTypeHelper = {

    requredIf : function   (conditionPropName)  {
        function check(props, propName, componentName){
            if (props[conditionPropName] && !props[propName]) {
                return new Error(
                    'Prop `' + propName + '` required at ' +
                    ' `' + componentName + '` as prop ' + arguments[0] + ' provided'
                )
            }
        }
        check.requredIfNot = this.requredIfNot;
        check.requredIf = this.requredIf;
        check.PropTypes = PropTypes;
        return check;
    },

    requredIfNot : function (conditionPropName)  {
        function check(props, propName, componentName){
            if (!props[conditionPropName] && !props[propName]) {
                return new Error(
                    'Prop `' + propName + '` required at ' +
                    ' `' + componentName + '` as prop ' + arguments[0] + ' NOT provided'
                )
            }
        }
        check.requredIf = this.requredIf;
        check.requredIfNot = this.requredIfNot;
        check.PropTypes = PropTypes;
        return check;
    }

};

export default PropTypeHelper;
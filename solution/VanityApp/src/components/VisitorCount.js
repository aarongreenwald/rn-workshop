/**
 * Created by MLmediapps on 21/06/2016.
 */
import React from 'react';
import {Text} from 'react-native';
import * as actions from "../store/actions";
export default class VisitorCount extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.incrementVisitorCount());
    }

    render() {
        return (
            <Text style={{
                    backgroundColor: 'transparent',
                    fontSize:20,
                    fontWeight: 'bold'
            }}>Visitor count: {this.props.visitorCount}</Text>
        );
    }
}

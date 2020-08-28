import React, { Component } from 'react';
import { connect } from 'react-redux'
import CalcResult from './CalcResult'
import CalcDescription from './CalcDescription'

import { IDisplayProps } from '../interfaces/IDisplay'

export class Display extends Component<IDisplayProps> {
    render() {
        return (
            <div id="display">
                {this.props.signs[0] ?
                    <CalcResult />
                    :
                    <CalcDescription />
                }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    signs: state.signs.signs,
})

export default connect(mapStateToProps)(Display);
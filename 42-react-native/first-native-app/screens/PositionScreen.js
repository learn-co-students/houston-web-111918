import React from 'react'
import { Text, View } from 'react-native'
import { DangerZone } from 'expo'
const { DeviceMotion } = DangerZone

export default class PositionScreen extends React.Component {

    state = {
        rotation: {
            alpha: 0,
            beta: 0,
            gamma: 0
        }
    }

    componentDidMount(){
        DeviceMotion.addListener( ({ rotation }) => {
            this.setState({ rotation })
        })
    }

    render(){
        const { alpha, beta, gamma } = this.state.rotation
        return (
            <View style={{ flex: 1 }}>
                <Text style={{fontSize: 30}}>Alpha: {alpha}</Text>
                <Text style={{fontSize: 30}}>Beta: {beta}</Text>
                <Text style={{fontSize: 30}}>Gamma: {gamma}</Text>
            </View>
        )
    }

}
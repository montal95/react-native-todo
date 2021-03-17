import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import { TaskProps } from '../TYPES'

export const Task = ({ allTasks, title, complete, i, taskTouchHandler }: TaskProps) => {
    const PressHandler = () => handleTouch()

    const handleTouch = () => {
        const newObj = { title, complete: !complete };
        const newState = [...allTasks];
        newState[i] = newObj;
        taskTouchHandler(newState);
    }

    return (
        <View>
            <Text>{title}: {i}</Text>
            <TouchableOpacity style={complete ? styles.finished : styles.unfinished} onPress={PressHandler}>
                {complete ? <Entypo name="check" size={24} color="black" /> : <Entypo name="cross" size={24} color="black" />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 0.8
    },
    finished: {
        padding: 5,
        alignItems: 'center',
        flex: 0.2,
        backgroundColor: 'green'
    },
    unfinished: {
        flex: 0.2,
        backgroundColor: 'red'
    }
})
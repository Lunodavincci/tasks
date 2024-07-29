import React from "react"
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import moment from "moment"
import Icon from "react-native-vector-icons/FontAwesome6"

export default props => {
    const done_or_not = props.done_at != null ? {textDecorationLine: "line-through"}:{} 
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.checkContainer}>
                    {get_Check_View(props.done_at)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, done_or_not]}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_at + ""}</Text>
                <Text style={styles.date}>{props.done_at + ""}</Text>
            </View>
        </View>
    )
}

function get_Check_View(done_at) {
    if (done_at != null) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF"></Icon>
            </View>
        )

    } else {
        return (
            <View style={styles.pending}>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    checkContainer: {
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: "#4D7031",
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555"
    },
    desc: {
        fontFamily: "Arial",
        fontSize: 20,
        color: "#333"
    },
    date: {
        fontFamily: "Arial",
        color: "#555"
    }

})
const React = require('react-native');


module.exports = React.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#f7f7f7',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fafafa',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05a5d1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: '#666',
    },
});

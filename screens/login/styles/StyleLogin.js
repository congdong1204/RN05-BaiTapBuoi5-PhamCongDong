import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#009387',
        flex: 1
    },
    container_header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30,
        paddingLeft: 30
    },
    container_header_text: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500'
    },
    container_form_login: {
        flex: 3,
        backgroundColor: 'white',
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    container_form_login_input: {

    },
    container_form_login_input_textinput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.8,
        borderColor: '#ccc'
    },
    container_form_login_input_textinput_input: {
        flex: 1,
        padding: 10
    },
    margin_top_20: {
        marginTop: 20
    },
    margin_top_40: {
        marginTop: 40
    },
    btn: {
        borderRadius: 40,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    },
    btn_primary: {
        backgroundColor: '#009387',
        borderColor: '#009387'
    },
    btn_primary_text: {
        color: 'white'
    },
    btn_secondary: {
        backgroundColor: 'white',
        borderColor: '#009387'
    },
    btn_secondary_text: {
        color: '#009387'
    }
})
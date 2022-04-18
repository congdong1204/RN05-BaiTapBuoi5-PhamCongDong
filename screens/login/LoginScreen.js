import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons/'

import { styles } from './styles/StyleLogin'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.container_header}>
            <Text style={styles.container_header_text}>Register Now</Text>
        </View>

        <View style={styles.container_form_login}>
            <View style={styles.container_form_login_input}>
                <View style={styles.container_form_login_input_container}>
                    <Text>Email</Text>
                    <View style={styles.container_form_login_input_textinput}>
                        <FontAwesomeIcon icon={ faEnvelope } size={20}/>
                        <TextInput style={styles.container_form_login_input_textinput_input} />
                    </View>
                </View>

                <View style={[styles.container_form_login_input_container, styles.margin_top_20]}>
                    <Text>Password</Text>
                    <View style={styles.container_form_login_input_textinput}>
                        <FontAwesomeIcon icon={ faLock } size={20}/>
                        <TextInput style={styles.container_form_login_input_textinput_input} secureTextEntry={true}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={[styles.btn, styles.btn_primary, styles.margin_top_40]}>
              <Text style={styles.btn_primary_text}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btn_secondary, styles.margin_top_20]}>
              <Text style={styles.btn_secondary_text}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
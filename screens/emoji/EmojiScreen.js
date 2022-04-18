import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class EmojiScreen extends Component {
    state = { imageSource: require('../../assets/emoji/haha.png') } 
    emojiImage = [
        {
            image: require('../../assets/emoji/haha.png'),
        },
        {
            image: require('../../assets/emoji/like.png'),
        },
        {
            image: require('../../assets/emoji/care.png'),
        },
        {
            image: require('../../assets/emoji/love.png'),
        },
        {
            image: require('../../assets/emoji/angry.png'),
        },
        {
            image: require('../../assets/emoji/sad.png'),
        }
    ]

    renderEmoji = () => {
        return this.emojiImage.map(item => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ imageSource: item.image })
                    }}
                >
                    <Image source={item.image} style={{ height: 40, width: 40, marginHorizontal: 10 }}/>
                </TouchableOpacity>
            )
        })
    }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 100 }}>
            <Text style={{ marginBottom: 30, fontSize: 22, fontWeight: '500' }}>Bạn đang cảm thấy như thế nào?</Text>
            <Image source={this.state.imageSource} style={{ height: 150, width: 150}}/>
            <View style={{ flexDirection: 'row', marginTop: 30}}>
                {this.renderEmoji()}
            </View>
        </View>
    )
  }
}
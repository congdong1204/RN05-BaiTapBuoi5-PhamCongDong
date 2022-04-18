import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faLock, faCamera, faPenClip, faEllipsis, faMessage } from '@fortawesome/free-solid-svg-icons/'

export default class DatabindingScreen extends Component {
    dataAvatar = [
        {
            name: 'Sahara',
            image: require('../../assets/images/image1.jpeg'),
        },
        {
            name: 'Sophia',
            image: require('../../assets/images/image2.jpeg'),
        },
        {
            name: 'Hana',
            image: require('../../assets/images/image3.jpeg'),
        },
        {
            name: 'Naul',
            image: require('../../assets/images/image4.jpeg'),
        },
        {
            name: 'Kimihana',
            image: require('../../assets/images/image5.jpeg'),
        },
        {
            name: 'Yoko',
            image: require('../../assets/images/image6.jpeg'),
        },
        {
            name: 'Su',
            image: require('../../assets/images/image7.jpeg'),
        },
        {
            name: 'Finnia',
            image: require('../../assets/images/image8.jpeg'),
        },
        {
            name: 'Subana',
            image: require('../../assets/images/image9.jpeg'),
        },
        {
            name: 'Corohe',
            image: require('../../assets/images/image10.jpeg'),
        }
    ]
    dataFeeds = [
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sahara",
            image: require('../../assets/images/image1.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sophia",
            image: require('../../assets/images/image2.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "3 minutes"
        
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Hana",
            image: require('../../assets/images/image3.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "5 minutes"
        
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Naul",
            image: require('../../assets/images/image4.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "10 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Kimihana",
            image: require('../../assets/images/image5.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        }
    ]

    renderAvatar = () => {
        return this.dataAvatar.map(item => {
            return (
                <View style={{margin: 10, alignItems: 'center'}}>
                    <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 40}}/>
                    <Text>{item.name}</Text>
                </View>
            )
        })
    }
    renderContent = () => {
        return this.dataFeeds.map(item => {
            return (
                <View style={{ borderBottomWidth: 0.5, borderColor: '#ccc', paddingBottom: 10, margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 40 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{ marginRight: 15 }}>{item.title}</Text>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{ color: '#aaa'}}>{item.name}</Text>
                                <Text style={{ color: '#aaa'}}>{item.time}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ marginTop: 10 }}>{item.content}</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/emoji/love.png')} style={{ height: 20, width: 20 }}/>
                        <Text style={{ marginRight: 10, paddingHorizontal: 5, fontSize: 16 }}>2</Text>
                        <FontAwesomeIcon icon={ faMessage } size={20} color={ '#aaa' } />
                        <Text style={{ marginRight: 10, paddingHorizontal: 5, fontSize: 16 }}>4</Text>
                    </View>
                </View>
            )
        })
    }
  render() {
    return (
      <SafeAreaView>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
            <FontAwesomeIcon icon={ faCamera } size={20}/>
            <Text style={{ fontSize: 20, fontWeight: '400' }}>Feed</Text>
            <FontAwesomeIcon icon={ faPenClip } size={20}/>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#ccc', marginTop: 10, height: 135 }}>
            {this.renderAvatar()}
        </ScrollView>
        <ScrollView>
            {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
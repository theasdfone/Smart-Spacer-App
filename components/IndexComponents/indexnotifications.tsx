import { Dispatch, SetStateAction, useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Pressable, Modal } from "react-native";

import { Notif } from '../models/notification';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../util/profilepicture';
import Notifications from './modals/notifications';
import { placeholder } from '@/placeholder/placeholder';

export default function IndexNotification() {
  const [notifications, setNotifications] = useState<Notif[]>(placeholder.notifications);
  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState<string | undefined>(undefined);
  const defaultImg = require('@/assets/images/icon.png');

 return (
      <View>
        <Text style={style.header}>Notifications</Text>
        <View>
          {
            checkNotificationLength(notifications, setModalVisible)
          }
        </View>
        <SafeAreaProvider>
          <SafeAreaView style={style.centeredView}>
            <Modal
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={style.centeredView}>
                <View style={style.modalView}>
                  <View style={style.imgheader}>
                    <Text style={style.seeMoreHeader}>Notifications</Text>
                    <Pressable style={style.profile}>
                        <Profile imgSource={defaultImg} selectedImage={image} />
                    </Pressable>
                  </View>
                  <View style={style.modalNotificationContainer}>
                    <Notifications 
                      notifications={notifications}
                    />
                  </View>
                  <View style={style.modalTabBar}>
                    <View style={style.buttonContainer}>
                      <TouchableOpacity
                        style={style.button}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={style.buttonText}>See Less</Text>
                        <View style={style.dropdownBackground}>
                          <Image 
                            style={style.dropdown}
                            source={require('../../assets/images/up-chevron.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={style.buttonContainer}>
                      <TouchableOpacity
                        style={style.button}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={style.buttonText}>Clear All</Text>
                        <View style={style.dropdownBackground}>
                          <Image 
                            style={style.dropdown}
                            source={require('../../assets/images/x-delete.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
  );
}

function checkNotificationLength(notifications: Notif[], setModalVisible: Dispatch<SetStateAction<boolean>>) {

  if(notifications == undefined || notifications.length < 1) {
    return(
      <View style={style.notifContainer}>
        <Text style={style.emptyTitle}>There are no new messages</Text>
        <Text>You're all caught up!</Text>
        <Image 
          style={style.emptyMailbox}
          source={require('../../assets/images/empty-inbox.png')}
        />
      </View>
    )
  }

  return(
    <View>
      {
        notifications.slice(0,3).map((notif) => {
          return(
            <View key={notif.NotifId} style= {style.notification}>
              <View style={style.iconBackground}>
                <Image 
                  style={style.bellIcon}
                  source={require('../../assets/images/bell-regular.png')}
                />
              </View>
              <View>
                <View style={style.title}>
                  <Text>{notif.Title}</Text>
                  <Text>{notif.Time}</Text>
                </View>
                <Text style={style.description} numberOfLines={1}>{notif.Description}</Text>
              </View>
            </View>
          )
        })
      }
      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={style.buttonText}>See More</Text>
          <View style={style.dropdownBackground}>
            <Image 
              style={style.dropdown}
              source={require('../../assets/images/down-chevron.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    fontSize: 40,
    paddingBottom: 10,
  },

  notifContainer: {
    padding: 10,
    borderRadius: 10,
    flexGrow: 1,
    backgroundColor: "#E1E1E1",
  },

  notification: {
    backgroundColor: "#E1E1E1",
    flexGrow: 1,
    padding: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  
  bellIcon: {
    height: 18,
    width: 18,
  },

  iconBackground: {
    height: 30,
    width: 30,
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  description: {
    width: 250
  },

  buttonContainer: {
    alignItems: "center",
  },

  button: {
    height: 32,
    width: 120,
    borderRadius: 40,
    backgroundColor: "#E9E9E9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },

  buttonText: {
    width: 70,
    fontWeight: "bold"
  },

  dropdown: {
    height: 10,
    width: 10
  },

  dropdownBackground: {
    height: 15,
    width: 15,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  emptyTitle: {
    fontWeight: "bold",
    fontSize: 28
  },

  emptyMailbox: {
    marginLeft: 50,
    height: 170,
    width: 270,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    height: "100%",
    width: "100%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  seeMoreHeader: {
    fontSize: 40,
    width: "80%"
  },

  imgheader: {
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: "center"
  },

  profile: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  modalNotificationContainer: {
    height: "80%",
    paddingBottom: 10
  },

  modalTabBar: {
    flexDirection: "row",
    justifyContent:"center",
    gap: 20
  }
});
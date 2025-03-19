import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "../../components/util/profilepicture";

const AccountPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.givemeMarginTop}>
          <View style={styles.shadows}>
            <View style={styles.container}>
              <View style={styles.navbar}>
                {/* Profile Section */}
                <Text style={styles.accountName}>Account</Text>
                <Profile />
              </View>
            </View>
          </View>
        </View>

        {/* Child Profile Section */}
        <View style={styles.ProfileSwitchingSection}>
          <Text style={styles.headerText}>Switch to</Text>
          <View style={styles.ProfileSwitching}>
            <View style={{alignItems:"center", justifyContent: "center", paddingHorizontal:15,}}>
              <Image
                source={require('@/assets/images/dog.png')} // Replace with your icon
                style={styles.switchIcon}
              />
              <Text style={{fontSize:16}}>Alex</Text>
            </View>
            <View style={{alignItems:"center", justifyContent: "center", paddingHorizontal:15,}}>
              <Image
                source={require('@/assets/images/cat.png')} // Replace with your icon
                style={styles.switchIcon}
              />
              <Text style={{fontSize:16}}>Sally</Text>
            </View>

            <View style={{alignItems:"center", justifyContent: "center", paddingHorizontal:15,}}>
              <Image
                source={require('@/assets/images/addButton.png')} // Replace with your icon
                style={styles.switchIcon}
              />
              <Text style={{fontSize:16}}>Add Account</Text>
            </View>
          </View>
        </View>

        {/* Settings List */}
        <View style={styles.ProfileSwitchingSection}>
          <Text style={styles.headerText}>Settings</Text>
          <View style={styles.settingsList}>
            <View style={styles.settingListItem}>
              <Image 
                source={require('@/assets/images/profilesettings.png')}
                style={{marginRight:10, width: 50, height: 50,}}
              />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.settingsItem}>Account Preferences</Text>
                <Text style={styles.settingsItemSmall}>Profile settings, passwords, subscriptions</Text>
              </View>
            </View>

            <View style={styles.settingListItem}>
              <Image 
                source={require('@/assets/images/brightness.png')}
                style={{marginRight:10, width: 50, height: 50,}}
              />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.settingsItem}>Display Settings</Text>
                <Text style={styles.settingsItemSmall}>Brightness, theme, appearance</Text>
              </View>
            </View>

            <View style={styles.settingListItem}>
              <Image 
                source={require('@/assets/images/grid.png')}
                style={{marginRight:10, width: 50, height: 50,}}
              />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.settingsItem}>Manage Profiles</Text>
                <Text style={styles.settingsItemSmall}>Edit, organize, and manage child profiles</Text>
              </View>
            </View>

            <View style={styles.settingListItem}>
              <Image 
                source={require('@/assets/images/notifications.png')}
                style={{marginRight:10, width: 50, height: 50,}}
              />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.settingsItem}>Notifications</Text>
                <Text style={styles.settingsItemSmall}>Reminders, delivery style, alerts</Text>
              </View>
            </View>

            <View style={styles.settingListItem}>
              <Image 
                source={require('@/assets/images/papercheck.png')}
                style={{marginRight:10, width: 50, height: 50,}}
              />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.settingsItem}>Terms and Conditions</Text>
                <Text style={styles.settingsItemSmall}>User agreement, privacy policy, fine print</Text>
              </View>
            </View>

            <View style={styles.settingListItem}>
              <Image 
                source={require('@/assets/images/helpdesk.png')}
                style={{marginRight:10, width: 50, height: 50,}}
              />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.settingsItem}>Help Center</Text>
                <Text style={styles.settingsItemSmall}>Troubleshooting, customer service</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  givemeMarginTop: {
    marginTop:40,
  },
  shadows: {
    overflow: "hidden",
    paddingBottom: 5
  },
  container: {
    backgroundColor: '#fff',
    elevation: 5,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom:10,
  },
  accountName: {
    fontSize: 40,
    width: "85%",
  },
  ProfileSwitchingSection: {
    alignItems: "flex-start",
    paddingHorizontal:20,
  },
  ProfileSwitching: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom:10,
    marginTop:10,
  },
  headerText:{
    fontSize: 28,
    fontWeight:"500",
    width: "85%",
  },
  switchIcon: {
    width: 60,
    height: 60,
  },
  settingsList: {
    marginTop: 2,
  },
  settingListItem:{
    flexDirection:'row',
    alignItems:"center",
    padding:10,
    marginBottom:5,
  },
  settingsItem: {
    fontSize: 20,
    fontWeight:"bold",
  },
  settingsItemSmall:{
    fontSize:14,
    color:"gray",
  },
});

export default AccountPage;

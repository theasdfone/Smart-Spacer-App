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

        {/* Child Profiel Section */}
        <View style={styles.ProfileSwitchingSection}>
          <Text style={styles.headerText}>Switch to</Text>
          <View style={styles.ProfileSwitching}>
            <Image
              source={require('@/assets/images/dog.png')} // Replace with your icon
              style={styles.switchIcon}
            />
            <Image
              source={require('@/assets/images/cat.png')} // Replace with your icon
              style={styles.switchIcon}
            />

            <Image
              source={require('@/assets/images/addButton.png')} // Replace with your icon
              style={styles.switchIcon}
            />
          </View>
        </View>

        {/* Settings List */}
        <View style={styles.settingsList}>
          <Text style={styles.settingsItem}>Account Preferences</Text>
          <Text style={styles.settingsItem}>Display Settings</Text>
          <Text style={styles.settingsItem}>Manage Profiles</Text>
          <Text style={styles.settingsItem}>Notifications</Text>
          <Text style={styles.settingsItem}>Terms and Conditions</Text>
          <Text style={styles.settingsItem}>Help Center</Text>
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
    marginTop: 16,
  },
  settingsItem: {
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
});

export default AccountPage;

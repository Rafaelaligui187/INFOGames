import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleLogout = () => {
    console.log('User logged out');
    alert('You have been logged out.');
  };

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <View style={[styles.container, isNightMode && styles.nightMode]}>
      <Text style={[styles.text, isNightMode && styles.nightModeText]}>Settings</Text>

      {/* Night Mode Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.text, isNightMode && styles.nightModeText]}>Night Mode</Text>
        <Switch value={isNightMode} onValueChange={toggleNightMode} />
      </View>

      {/* Logout Button */}
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color={isNightMode ? '#fff' : '#000'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  nightMode: {
    backgroundColor: '#333',
  },
  nightModeText: {
    color: '#fff',
  },
});

export default Settings;

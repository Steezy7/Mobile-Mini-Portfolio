import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

const How = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How it Works</Text>
        <Text style={styles.paragraph}>
          This is a default How page. Replace this text with instructions or information about how the app works.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default How

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: 8,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
})

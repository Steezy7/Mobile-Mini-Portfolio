import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

export default function ContactUs() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.paragraph}>Email: laioketoluwani17@gmail.com.com</Text>
        <Text style={styles.paragraph}>Phone: +234 905 5659 4353</Text>
        <Text style={styles.paragraph}>Twitter: @Tolz.123</Text>
        <Text style={styles.paragraph}>Instagram: @sleezy1</Text>
        
      </View>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navButton}>
          <Link href="/home" style={styles.navText}>Home</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Link href="/work-experience" style={styles.navText}>Work Experience</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Link href="/projects" style={styles.navText}>Projects</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Link href="/faq" style={styles.navText}>FAQ</Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#1E3A8A', marginBottom: 12 },
  paragraph: { color: '#374151', marginBottom: 6 },
  nav: { flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1, borderColor: '#e5e7eb' },
  navButton: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#1E90FF', borderRadius: 6 },
  navText: { color: '#fff', fontWeight: '600' },
})


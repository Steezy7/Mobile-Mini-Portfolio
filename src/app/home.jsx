import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
  <Image source={require('../../assets/images/WhatsApp Image 2025-11-04 at 10.07.50_0a35e3d0.jpg')} style={styles.logo} />
        <Text style={styles.title}>LAI-OKE TOLUWANI FAVOUR</Text>
        <Text style={styles.subtitle}>MOBILE/WEB DEVELOPER</Text>
        

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Link href="/work-experience" style={styles.linkText}>Work Experience</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Link href="/projects" style={styles.linkText}>Projects</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Link href="/contact-us" style={styles.linkText}>Contact</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Link href="/faq" style={styles.linkText}>FAQ</Link>
        </TouchableOpacity>
      </View>
      <View style={styles.footerNote}>
        <Text style={styles.footerText}>Built with React Native • Responsive • Clean UI</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  logo: { width: 140, height: 140, borderRadius: 20, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '700', color: '#1E3A8A' },
  subtitle: { fontSize: 16, color: '#374151', marginBottom: 13 },
  button: { backgroundColor: '#1E90FF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, marginTop: 10, minWidth: 220, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 4, elevation: 3 },
  linkText: { color: '#fff', fontWeight: '600' },
  footerNote: { padding: 12, alignItems: 'center' },
  footerText: { color: '#6b7280', fontSize: 12 },
})
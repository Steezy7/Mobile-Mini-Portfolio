import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

export default function FAQ() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>FAQ</Text>
        <View style={styles.item}>
          <Text style={styles.q}>Q: How do I run your projects?</Text>
          <Text style={styles.a}>A: Each project includes a README with setup, prerequisites, and run instructions.</Text>
          <Text style={styles.note}>Note: I recommend Node 16+ and running <Text style={{fontStyle: 'italic'}}>npm install</Text> before starting.</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.q}>Q: What technologies do you use?</Text>
          <Text style={styles.a}>A: Most projects are built with React Native (Expo), React, Node.js and Express for backend APIs.</Text>
          <Text style={styles.note}>Note: I prefer Expo for faster development and consistent cross-platform behaviour.</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.q}>Q: Can I hire you for freelance work?</Text>
          <Text style={styles.a}>A: Yes — I'm open to freelance and contract work. Please reach out via the contact page with details.</Text>
          <Text style={styles.note}>Note: Share the project scope, timeline, and budget to get a faster response.</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.q}>Q: Where can I find the source code?</Text>
          <Text style={styles.a}>A: Source code for most projects is available on GitHub; links are provided in each project's details.</Text>
          <Text style={styles.note}>Note: Some private or client projects may be omitted for confidentiality.</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.q}>Q: How do you handle collaboration and contributions?</Text>
          <Text style={styles.a}>A: I use GitHub for version control, pull requests for features, and issues for tracking bugs and tasks.</Text>
          <Text style={styles.note}>Note: If you'd like to contribute, open a PR or an issue describing your change.</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.q}>Q: How do I report bugs or request features?</Text>
          <Text style={styles.a}>A: Open an issue on the project's repository or use the contact form with reproduction steps and screenshots.</Text>
          <Text style={styles.note}>Note: Include environment (OS, device, app version) and exact steps to reproduce for faster fixes.</Text>
        </View>
      </ScrollView>

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
          <Link href="/contact-us" style={styles.navText}>Contact</Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#1E3A8A', marginBottom: 12 },
  item: { marginBottom: 12, backgroundColor: '#f8fafc', padding: 12, borderRadius: 8 },
  q: { fontWeight: '700' },
  a: { color: '#374151', marginTop: 6 },
  nav: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderTopWidth: 1, borderColor: '#e5e7eb' },
  navButton: { paddingVertical: 8, paddingHorizontal: 7, marginRight: 5,  backgroundColor: '#1E90FF', borderRadius: 6 },
  navText: { color: '#fff', fontWeight: '600' },
})

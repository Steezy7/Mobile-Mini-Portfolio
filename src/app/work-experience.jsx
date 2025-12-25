import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router'

export default function WorkExperience() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Work Experience</Text>
        <View style={styles.item}>
          <View style={styles.itemRow}>
            <Image source={require('../../assets/images/sahco.png')} style={styles.itemImage} resizeMode="contain" />
            <View style={{flex: 1}}>
              <Text style={styles.itemTitle}>FrontEnd Developer — SKYWAY AVIATION HANDLING COMPANY PLC</Text>
              <Text style={styles.itemSub}>JAN 2025 — JUNE 2025</Text>
              <Text style={styles.itemText}> BUitlt real-eorld responsive websites, u tilizing tech sytacks like next.js, react.js, node.js, MongoDB, Tailwind CSS, HTML and Javascript </Text>
            </View>
          </View> 
        </View> 
        
      </ScrollView>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navButton}>
          <Link href="/home" style={styles.navText}>Home</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Link href="/projects" style={styles.navText}>Projects</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Link href="/contact-us" style={styles.navText}>Contact</Link>
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
  content: { padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#1E3A8A', marginBottom: 12 },
  item: { marginBottom: 16, backgroundColor: '#f8fafc', padding: 12, borderRadius: 8 },
  itemRow: { flexDirection: 'row', alignItems: 'flex-start' },
  itemImage: { width: 80, height: 80, marginRight: 12, borderRadius: 8 },
  itemTitle: { fontWeight: '700' },
  itemSub: { color: '#6b7280', marginBottom: 6 },
  itemText: { color: '#374151' },
  nav: { flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1, borderColor: '#e5e7eb' },
  navButton: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#1E90FF', borderRadius: 6 },
  navText: { color: '#fff', fontWeight: '600' },
})

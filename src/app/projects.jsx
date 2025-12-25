import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

export default function Projects() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Selected Projects</Text>

        <View style={styles.card}>
          <Image source={require('../../assets/images/mindEase.png')} style={styles.cardImage} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>MindEase </Text>
            <Text style={styles.cardText}>A Node.js chatbot interface made showing responsiveness, user intaractions, animations and rule-based artificial intelligence </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/ChefClaude.png')} style={styles.cardImage} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Recipe Generator  </Text>
            <Text style={styles.cardText}>The Recipe Generator fetches recipes by ingredient or cuisine using a public API and displays compact recipe cards with preparation time, difficulty level, and a link to detailed instructions. This improved my understanding of API integration, state management, and dynamic UI rendering. </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/Davila.png')} style={styles.cardImage} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Bakery Website (Online Ordering System) </Text>
            <Text style={styles.cardText}>I developed an online bakery storefront and ordering flow using HTML, CSS (Tailwind), JavaScript, and Node.js. The goal was to provide a seamless user experience for browsing products, adding to cart, and placing orders. </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/google.png')} style={styles.cardImage} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Google Clone Project  </Text>
            <Text style={styles.cardText}>The Google Clone replicates the core search functionalities of Google, allowing users to search for information, display paginated results, and navigate between search categories like All, Images, News, and Videos.</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/meme.png')} style={styles.cardImage} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Meme Generator</Text>
            <Text style={styles.cardText}>The Meme Generator consumes public APIs or local templates to overlay captions on images. It includes controls for font size, alignment, and image selection. This helped me strengthen my DOM manipulation and event handling skills.</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/Tenzie.png')} style={styles.cardImage} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Tenzies Game </Text>
            <Text style={styles.cardText}>The Tenzies Game is a fun and interactive dice game that I built using React. The objective of the game is to roll ten dice until all display the same number. Players have the option to “hold” specific dice to retain their values while rerolling the others, which introduces an element of strategy and engagement. </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
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
  card: { flexDirection: 'row', backgroundColor: '#f8fafc', borderRadius: 8, overflow: 'hidden', marginBottom: 12 },
  cardImage: { width: 120, height: 120, marginRight: 12 },
  cardBody: { flex: 1, padding: 12 },
  cardTitle: { fontWeight: '700' },
  cardText: { color: '#374151', marginVertical: 6 },
  cardButton: { backgroundColor: '#1E90FF', padding: 8, borderRadius: 6, alignSelf: 'flex-start' },
  cardButtonText: { color: '#fff' },
  nav: { flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1, borderColor: '#e5e7eb' },
  navButton: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#1E90FF', borderRadius: 6 },
  navText: { color: '#fff', fontWeight: '600' },
})

import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then(res => {return res.json()})
      .then(data => {
        setPosts(data.results)
      })
  })

  return (
    <View style={styles.container}>
      {
        posts.map((post, index) => {
          return (
            <View key={index}>
              <Text style={styles.texto}>{post.name}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    marginBottom: 40,
    fontSize: 20
  }
})
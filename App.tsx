import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Task } from './components';

const App = () => {
  const [count, setCount] = useState(0);
  const [listItems, setListItems] = useState([{ title: "Clicker counter", complete: true }])
  const updateList = () => listItems.map(({ title, complete }, i) => <Task
    allTasks={listItems}
    title={title}
    complete={complete}
    i={i}
    taskTouchHandler={setListItems}
    key={i} />)
  let list = updateList();

  useEffect(() => {
    list = updateList();
  }, [listItems])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks for today:</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Click to Increment: {count}</Text>
      </TouchableOpacity>
      {list}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    padding: 15,
    fontSize: 16,
  }
});

export default App;
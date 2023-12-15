import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

//state == {count:0}
//action=={type:'increment' || type:'decrement' , payload}

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [counter, setCounter] = useState(0);
  return (
    <View style={styles.padding}>
      <Button
        title="Arttır"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
          // setCounter(counter + 1);
        }}
      />

      <Text>Sayi: {state.count}</Text>

      <Button
        title="Azalt"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
          // setCounter(counter - 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 50,
  },
});

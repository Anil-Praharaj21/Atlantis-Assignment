import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';

export default function todoListItem({title, description}) {
  return (
    <Card
      style={{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4,
        padding: 8,
      }}>
      <Text
        style={{
          flex: 1,
          textAlign: 'left',
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {title}
      </Text>

      <Text style={{flex: 1, textAlign: 'left', fontSize: 12, color: 'black'}}>
        {description}
      </Text>
    </Card>
  );
}

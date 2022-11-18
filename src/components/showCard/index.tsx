import React from 'react';
import {Button, Card, Paragraph} from 'react-native-paper';
import {sanitizedText} from '../../utils';

export const ShowCard = (show: Show, onPress: () => void) => {
  return (
    <Card mode="elevated">
      <Card.Cover source={{uri: show?.image?.medium}} />
      <Card.Title
        title={show.name}
        titleStyle={{fontSize: 20, fontWeight: 'bold'}}
      />
      <Card.Content>
        {show?.summary && <Paragraph>{sanitizedText(show?.summary)}</Paragraph>}
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" icon="arrow-right" onPress={onPress}>Details</Button>
      </Card.Actions>
    </Card>
  );
};

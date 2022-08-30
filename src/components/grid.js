import {
    Grid,
    Card
}
from '@aws-amplify/ui-react';

import Header from './Header/Header'

import {DefaultCardExample} from './card.js';

export const GridExample = () => {

    return (

        <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 3fr 1fr"
        >
          <Card
            columnStart="1"
            columnEnd="-1"
          >
            Header
          </Card>
          <Card
            columnStart="1"
            columnEnd="2"
          >
            Nav
            <Header />
          </Card>
          <Card
            columnStart="2"
            columnEnd="-1"
          >
            Main
            <DefaultCardExample />
            
          </Card>
          <Card
            columnStart="2"
            columnEnd="-1"
          >
            Footer
          </Card>
        </Grid>

    );

}

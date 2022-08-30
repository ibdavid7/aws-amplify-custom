import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


export const actionButton = () => {
    
    return(
        <Button
          variation="link"
          loadingText=""
          onClick={() => alert('hello')}
          ariaLabel=""
        >
          Click me!
        </Button>
        );
}


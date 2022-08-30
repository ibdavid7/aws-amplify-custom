import {
  Card,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';
import { MdModeEdit, MdDelete, MdLink, MdContentCopy, MdLabelOutline, MdOutlineCancel, MdExpandMore } from "react-icons/md";

export const DefaultCardExample = () => {
  const { tokens } = useTheme();
  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Card>
        <Flex direction="column" alignItems="flex-start" gap={tokens.space.xs}>
          
            <Flex direction="row">
              <Badge size="small" variation="info">
                Plus
              </Badge>
              <Badge size="small" variation="success">
                Verified
              </Badge>
            </Flex>

            <Flex
                direction="row"
                alignItems="stretch"
                gap={tokens.space.xs}
            >
               
                <Heading level={5} textAlign="left">
                  New Zealand White Water Outdoor Adventure
                </Heading>
                 
                <Flex direction="row" alignItems="flex-end">
                  
                    <Button
                      variation="link"
                      loadingText="edit"
                      onClick={() => alert('edit')}
                      ariaLabel="Edit"
                      fontWeight={400}
                      gap="0.3rem"
                    >
                      <MdModeEdit/>
                      Edit
                    </Button>
                  
                    <Button
                      variation="link"
                      loadingText="Delete"
                      onClick={() => alert('delete')}
                      ariaLabel="Edit"
                      fontWeight={400}
                      gap="0.3rem"
                    >
                      <MdDelete/>
                      Delete
                    </Button>
    
                </Flex>
              
            </Flex>
            
            <Text as="p">
              19 Aug 2022 10:35 PM UTC by <Badge size="medium" variation="info">{"Joe Smith"}</Badge>
            </Text>
            
            
            <Flex
                direction="row"
                alignItems="flex-start"
                gap={tokens.space.xs}
            >
              
              
              <Text
                  variation="primary"
                  as="p"
                  color="black"
                  lineHeight="1.5em"
                  fontWeight={400}
                  fontSize="1em"
                  fontStyle="normal"
                  textDecoration="none"
                  // width="30vw"
                >
                  <MdLink/>
                  <a href="bit.ly/3dLGqXX">bit.ly/3dLGqXX</a>
                  
                  <Button
                      variation="link"
                      onClick={() => alert('Copy')}
                      ariaLabel="Edit"
                      fontWeight={400}
                      gap="0.3rem"
                    >
                      <MdContentCopy/>
                      Copy
                  </Button>
                  
              </Text>
              
            </Flex>
            
            <View
                  as="div"
                  onClick={() => alert('🏔 What a beautiful <View>! 🔭')}
                  >
                  
                  {<MdLabelOutline size="1rem"/>}
                  
                  <Badge size="small" variation="info">
                    Tag1
                    <MdOutlineCancel/>
                  </Badge>
                  <Badge size="small" variation="success" alignItems="stretch" gap="0.3rem">
                    Tag2
                    <MdOutlineCancel/>
                  </Badge>

                  
                  
                  <Button
                      variation="link"
                      loadingText="edit"
                      onClick={() => alert('edit')}
                      ariaLabel="Edit"
                      fontWeight={400}
                    >
                      <MdModeEdit/>
                      Edit
                    </Button>
                  
            </View>
            
            <Button
                      variation="link"
                      loadingText="edit"
                      onClick={() => alert('edit')}
                      ariaLabel="Edit"
                      fontWeight={400}
                      gap="0.3rem"
                    >
                      <MdExpandMore/>
                      Expand
                    </Button>

        </Flex>
      </Card>
    </View>
  );
};
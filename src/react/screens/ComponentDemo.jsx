import React, { useState } from 'react'
import {
  ScreenLayout,
  Button,
  Input,
  Card,
  Header,
  Text,
  List,
  ListItem,
  Spacer,
  Divider
} from '../components'

const ComponentDemo = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <ScreenLayout>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        overflowY: 'auto',
        padding: '16px'
      }}>
        <Header variant="h3" align="center">Component Library Demo</Header>
        
        <Spacer size={2} />
        
        <Card title="Buttons">
          <Button>Primary Button</Button>
          <Spacer size={1} />
          <Button variant="outlined">Outlined Button</Button>
          <Spacer size={1} />
          <Button variant="text">Text Button</Button>
          <Spacer size={1} />
          <Button color="error">Delete Button</Button>
          <Spacer size={1} />
          <Button disabled>Disabled Button</Button>
        </Card>

        <Card title="Inputs">
          <Input
            label="Your Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            type="email"
            value=""
            onChange={() => {}}
            placeholder="email@example.com"
          />
          <Input
            label="Password"
            type="password"
            value=""
            onChange={() => {}}
          />
        </Card>

        <Card title="Typography">
          <Header variant="h4">This is a Heading</Header>
          <Text>This is regular body text using the Text component.</Text>
          <Text variant="caption" color="gray">This is caption text (smaller).</Text>
        </Card>

        <Card title="Lists">
          <List>
            <ListItem primary="Track your progress" secondary="Monitor days smoke-free" />
            <ListItem primary="Log cravings" secondary="Record when you feel urges" />
            <ListItem primary="Get tips" secondary="Daily motivation and advice" />
          </List>
        </Card>

        <Divider />

        <Text variant="caption" align="center">
          Use these components to build screens quickly!
        </Text>
      </div>
    </ScreenLayout>
  )
}

export default ComponentDemo
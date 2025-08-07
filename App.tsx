import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Export the root component
export default function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
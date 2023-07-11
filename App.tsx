import React from 'react';
import { MovimentCard } from './src/components/MovimentCard';
import { Background } from './src/components/atoms/Background';
import { Navbar } from './src/components/atoms/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet, View } from 'react-native';
import { ResumeCard } from './src/components/ResumeCard';
import { useStore } from './src/context/useStore';

function App(): JSX.Element {
  const state = useStore(store => store);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Background>
        <Navbar />
        <View style={styles.view}>
          <ResumeCard />
          <MovimentCard />
          {state.mode === 'month' ? (
            <>
              <ResumeCard />
              <MovimentCard />
            </>
          ) : (
            <>
              <MovimentCard />
              <ResumeCard />
            </>
          )}
        </View>
      </Background>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
  },
});

export default App;

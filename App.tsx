import React, { useEffect } from 'react';
import { MovimentCard } from './src/components/organisms/MovimentCard';
import { Background } from './src/components/atoms/Background';
import { Navbar } from './src/components/atoms/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ResumeCard } from './src/components/organisms/ResumeCard';
import { useStore } from './src/store/useStore';
import { EditCard } from './src/components/organisms/EditCard';
import { ModalDeleteMoviment } from './src/components/atoms/ModalDeleteMoviment';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  const state = useStore(store => store);

  useEffect(() => {
    let init = true;

    if (init) {
      SplashScreen.hide();
    }

    () => {
      init = false;
    };
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Background>
        <Navbar title="Finance" />
        <View style={styles.view}>
          <ResumeCard />
          <MovimentCard />
          {state.mode === 'month' ? (
            <>
              <ResumeCard />
              <MovimentCard />
              <EditCard />
            </>
          ) : (
            <>
              <MovimentCard />
              <ResumeCard />
            </>
          )}
        </View>
      </Background>
      <ModalDeleteMoviment />
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

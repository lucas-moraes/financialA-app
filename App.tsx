import React, { useEffect } from 'react';
import { MovementCard } from './src/components/organisms/MovementCard';
import { Background } from './src/components/atoms/Background';
import { Navbar } from './src/components/atoms/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ResumeCard } from './src/components/organisms/ResumeCard';
import { useStore } from './src/store/useStore';
import { EditCard } from './src/components/organisms/EditCard';
import SplashScreen from 'react-native-splash-screen';
import { ModalMenu } from './src/components/atoms/ModalMenu';
import { THEME } from './src/theme';
import { ModalDeleteMovement } from './src/components/atoms/ModalDeleteMoviment';

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
      <StatusBar backgroundColor={THEME.COLORS.BACKGROUND_APP} translucent={false} />
      <Background>
        <Navbar title="Finance" />
        <View style={styles.view}>
          <ResumeCard />
          <MovementCard />
          {state.mode === 'month' ? (
            <>
              <ResumeCard />
              <MovementCard />
              <EditCard />
            </>
          ) : (
            <>
              <MovementCard />
              <ResumeCard />
            </>
          )}
        </View>
      </Background>
      <ModalDeleteMovement />
      <ModalMenu />
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

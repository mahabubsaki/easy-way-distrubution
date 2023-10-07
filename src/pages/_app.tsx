import { store } from '@/store/store';
import '@/styles/globals.css';
import "rsuite/dist/rsuite.min.css";
import 'swiper/css';
import "swiper/css/free-mode";
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import customTheme from '@/utils/chakra_theme';
import NProgress from "nprogress";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'nprogress/nprogress.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Toaster } from 'react-hot-toast';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const handleStart = () => {
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
            <Toaster />
          </ChakraProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

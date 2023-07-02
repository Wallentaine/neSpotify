import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/Global.css';
import { wrapper } from '../store';
import { Provider } from 'react-redux';

const AppWrapper = ({ Component, ...restedProps }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(restedProps);
    const { pageProps } = props;

    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
};

export default wrapper.withRedux(AppWrapper);

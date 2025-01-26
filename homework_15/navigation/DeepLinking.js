import { Linking } from 'react-native';
import Navigation from './Navigation';
import { getActionFromState, getStateFromPath } from '@react-navigation/native';

const linkingPrefix = 'mypostapp://';

class DeepLinking {
    static linking = {
        prefixes: [linkingPrefix],
        config: {
            screens: {
                AUTH_MAIN: {
                    screens: {
                        AUTH_PASSWORD_RESET_SAVE: {
                            path: 'auth/password/restore/:hash',
                        },
                    },
                },
            },
        },
        getInitialURL: () => null,
        subscribe: (listener) => {
            const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
                if (url) {
                    DeepLinking.handleNavigate(url);
                }
            });
            return () => {
                linkingSubscription.remove();
            };
        },
    };

    static handleInitialNavigate = async (initialUrl) => {
        if (initialUrl) {
            await DeepLinking.handleNavigate(initialUrl, true);
        }
    };

    static handleNavigate = async (url, isInitialNavigate) => {
        const action = DeepLinking.getActionFromState(DeepLinking.linking.config, url);
        if (action?.type === 'NAVIGATE') {
            const { name, params } = action.payload;
            if (name && params) {
                if (isInitialNavigate) {
                    Navigation.replace(name, params);
                } else {
                    Navigation.navigate(name, params);
                }
            }
        }
    };

    static getPathWithoutPrefix = (url) => {
        let path = '';
        DeepLinking.linking.prefixes.forEach(prefix => {
            if (url.indexOf(prefix) > -1) {
                path = url.replace(prefix, '');
            }
        });
        return path;
    };

    static getActionFromState = (config, url) => {
        const path = DeepLinking.getPathWithoutPrefix(url);
        const state = getStateFromPath(path, config);
        if (!state) return;
        return getActionFromState(state, config);
    };
}

export default DeepLinking;

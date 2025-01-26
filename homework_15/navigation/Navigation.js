import React from 'react';

class Navigation {
    static navigationRef = React.createRef();

    static navigate(routeName, params) {
        setTimeout(() => this.navigationRef.current?.navigate(routeName, params), 0);
    }

    static replace(routeName, params) {
        setTimeout(() =>
            this.navigationRef.current?.reset({
                index: 0,
                routes: [{ name: routeName, params }],
            }), 0);
    }

    static pop() {
        this.navigationRef.current?.goBack();
    }
}

export default Navigation;

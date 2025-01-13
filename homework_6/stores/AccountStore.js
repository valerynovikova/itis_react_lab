import { makeAutoObservable } from 'mobx';
import axiosClient from '../api/AxiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AccountStore {
    accounts = [];
    loading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchAccounts() {
        this.loading = true;
        this.error = null;

        try {
            const response = await axiosClient.get('/users');
            this.accounts = response.data;
            await this.saveAccountsToStorage(response.data);
        } catch (error) {
            this.error = 'Failed to fetch accounts';
        } finally {
            this.loading = false;
        }
    }

    async saveAccountsToStorage(accounts) {
        try {
            await AsyncStorage.setItem('accounts', JSON.stringify(accounts));
        } catch (error) {
            console.error('Failed to save accounts to storage:', error);
        }
    }

    async loadAccountsFromStorage() {
        try {
            const accounts = await AsyncStorage.getItem('accounts');
            if (accounts) {
                this.accounts = JSON.parse(accounts);
            }
        } catch (error) {
            console.error('Failed to load accounts from storage:', error);
        }
    }

    async clearAccounts() {
        try {
            await AsyncStorage.removeItem('accounts');
            this.accounts = [];
        } catch (error) {
            console.error('Failed to clear accounts from storage:', error);
        }
    }
}

const accountStore = new AccountStore();
export default accountStore;

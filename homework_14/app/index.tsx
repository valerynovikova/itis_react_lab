import React from 'react';
import {useTranslation} from 'react-i18next';
import {LangType} from '@/localization/LangType';
import {Button, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import LangStore from '../localization/LangStore';
import styles from "@/app/MainStyle";


const langStore = new LangStore();

const handleChangeLang = async (lang: LangType) => {
    await langStore.changeLang(lang);
};

const Index = () => {
    const {t} = useTranslation(['main']);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{t('header')}</Text>
            <Text>{t('text')}</Text>
            <Text>{t('help')}</Text>
            <Text>{t('interpolation', {date: new Date()})}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleChangeLang(LangType.EN)}>
                <Text style={styles.buttonText}>Английский</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleChangeLang(LangType.RU)}>
                <Text style={styles.buttonText}>Русский</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default Index;

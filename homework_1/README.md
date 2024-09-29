# Проект: Демонстрация компонентов React Native 

## Описание

Это приложение React Native демонстрирует основные компоненты для создания пользовательских интерфейсов: 
ScrollView, View, Image и Text. Оно предназначено для изучения и экспериментов с этими компонентами, а также для создания базовых макетов.

## Структура проекта

App.js: Главный компонент приложения, который рендерит другие компоненты.

Сomponents: Папка, содержащая отдельные компоненты.

ScrollViewExample.js: Демонстрирует использование ScrollView для создания прокручиваемого контента.

GridExample.js: Создает сетку элементов с использованием View и Image.

ListExample.js: Отображает вертикальный список элементов с помощью View и Text.

## Запуск приложения

1. Установка зависимостей

   ```bash
   npm install
   ```

2. Запуск приложения

   ```bash
    npx expo start
   ```
3. Открытие в эмуляторе или на устройстве: Откройте приложение в Expo Go или подключите физическое устройство.

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Функциональность компонентов

```
ScrollViewExample:
 Позволяет прокручивать содержимое вертикально.
 Содержит заголовок, изображение и большой текст.
GridExample:
 Создает сетку элементов с использованием Flexbox.
 Каждый элемент содержит изображение и текст.
ListExample:
 Отображает вертикальный список элементов.
 Каждый элемент представляет собой текст в отдельной строке.
```


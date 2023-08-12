import React from 'react';
import {cleanup, screen, fireEvent} from '@testing-library/react-native';
import {jest, afterEach, it, expect, describe} from '@jest/globals';

import {renderNavigator} from '../src/test/test-utils';
import {ComicScreen} from '../src/screens';

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn(),
}));

const testComic = {
  id: '861b09fc-598a-4e2c-a8ce-efe612c00fd3',
  name: 'All-New Ghost Rider',
  cover: {
    image: {
      id: '9e15b066-9e59-4439-af45-2bf17adb5603',
      url: 'https://d11unjture0ske.cloudfront.net/comic_cover.7368b569-4416-4a31-a1a6-54e38f496528.22cc1e8c-387c-4c20-a321-33513a19bc85.full.jpeg',
    },
  },
  comicNumber: '1',
  startYear: 2014,
  storePrice: '6.99',
  totalAvailable: 19550,
  likeCount: 236,
  commentCount: 54,
  description:
    "The first appearance of Robbie Reyes, Ghost Rider! A street race leads a young man on the FAST and FURIOUS road of destiny. Amid an East Los Angeles neighborhood running wild with gang violence and drug trafficking, a war brews in the criminal underworld! With four on the floor, Marvel's newest GHOST RIDER puts vengeance in overdrive!",
};

const mockedNavigate = jest.fn();
const mockedOnPurchase = jest.fn();
const fakeNavigation = {
  navigate: mockedNavigate,
  goBack: mockedNavigate,
};

const fakeRoute = {
  params: {
    comic: testComic,
    onPurchase: mockedOnPurchase,
  },
};

afterEach(cleanup);

const backBtnId = 'comic-detail-back-button';
const buyBtnId = 'comic-detail-buy-button';

describe('Comic detail screen', () => {
  describe('rendering', () => {
    it('render comic detail', async () => {
      renderNavigator(
        <ComicScreen
          navigation={fakeNavigation as any}
          route={fakeRoute as any}
        />,
      );

      expect(
        screen.getByText(`${testComic.name} #${testComic.comicNumber}`),
      ).toBeOnTheScreen();

      expect(screen.getByText(testComic.description)).toBeOnTheScreen();
    });

    it('render back button', async () => {
      renderNavigator(
        <ComicScreen
          navigation={fakeNavigation as any}
          route={fakeRoute as any}
        />,
      );
      expect(screen.getByTestId(backBtnId)).toBeOnTheScreen();
    });

    it('render cover image', async () => {
      renderNavigator(
        <ComicScreen
          navigation={fakeNavigation as any}
          route={fakeRoute as any}
        />,
      );

      const cover = await screen.findByAccessibilityHint(/Comic cover/i);
      expect(cover.props.source.uri).toBe(testComic.cover.image.url);
    });

    it('render buy button', async () => {
      renderNavigator(
        <ComicScreen
          navigation={fakeNavigation as any}
          route={fakeRoute as any}
        />,
      );
      expect(screen.getByTestId(buyBtnId)).toBeOnTheScreen();
    });
  });

  describe('events', () => {
    it('navigate back', async () => {
      renderNavigator(
        <ComicScreen
          navigation={fakeNavigation as any}
          route={fakeRoute as any}
        />,
      );
      expect(screen.getByTestId(backBtnId)).toBeOnTheScreen();

      const backBtn = await screen.findByTestId(backBtnId);
      fireEvent.press(backBtn);

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
    });

    it('can buy comic', async () => {
      renderNavigator(
        <ComicScreen
          navigation={fakeNavigation as any}
          route={fakeRoute as any}
        />,
      );
      expect(screen.getByTestId(buyBtnId)).toBeOnTheScreen();

      const buyBtn = await screen.findByTestId(buyBtnId);
      fireEvent.press(buyBtn);

      expect(mockedOnPurchase).toHaveBeenCalledTimes(1);
    });
  });
});

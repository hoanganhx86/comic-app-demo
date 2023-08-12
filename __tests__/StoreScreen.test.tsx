import React from 'react';
import {cleanup, screen, fireEvent} from '@testing-library/react-native';
import {jest, afterEach, it, expect, describe, beforeEach} from '@jest/globals';

import {renderNavigator} from '../src/test/test-utils';
import {StoreScreen} from '../src/screens';
import {ComicData} from '../src/@types';
import {BrandData} from '../src/@types/brand';

const comicdata: ComicData = require('../src/data/comics.json');
const brandData: BrandData = require('../src/data/brands.json');

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

afterEach(cleanup);

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

const testBrand = {
  id: 'b78eb8ba-8827-4a33-a41c-ce7503ddd5d2',
  name: 'X-Men',
  image: {
    url: 'https://d11unjture0ske.cloudfront.net/brand_image.b78eb8ba-8827-4a33-a41c-ce7503ddd5d2.db35c37c-8fe7-4179-96a4-5ff304354b8d.full.jpeg',
  },
};

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native') as any;
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Store screen', () => {
  describe('rendering', () => {
    it('render sections', async () => {
      renderNavigator(<StoreScreen />);
      expect(screen.getByText(/Comics/i)).toBeOnTheScreen();

      expect(screen.getByText(/Brands/i)).toBeOnTheScreen();
    });

    it('render correct nuumber of comics', async () => {
      renderNavigator(<StoreScreen />);
      expect(screen.getAllByTestId(/^comic-item-/i).length).toBe(
        comicdata.edges.length,
      );
    });

    it('render correct number of brands', async () => {
      renderNavigator(<StoreScreen />);
      // screen.debug();
      expect(screen.getAllByTestId(/^brand-item-/i).length).toBe(
        brandData.edges.length,
      );
    });

    it('render test comic', async () => {
      renderNavigator(<StoreScreen />);
      expect(
        screen.getByTestId(`comic-item-${testComic.id}`),
      ).toBeOnTheScreen();
      expect(screen.getByText(testComic.name)).toBeOnTheScreen();
    });

    it('render test brand', async () => {
      renderNavigator(<StoreScreen />);
      expect(
        screen.getByTestId(`brand-item-${testBrand.id}`),
      ).toBeOnTheScreen();
    });
  });

  describe('events', () => {
    let props: any; // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({});
    });

    it('open comic detail screen', async () => {
      renderNavigator(<StoreScreen {...props} />);
      const testId = `comic-item-${testComic.id}`;
      expect(screen.getByTestId(testId)).toBeOnTheScreen();
      expect(screen.getByText(testComic.name)).toBeOnTheScreen();

      const comicCard = await screen.findByTestId(testId);
      fireEvent.press(comicCard);

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
    });
  });
});

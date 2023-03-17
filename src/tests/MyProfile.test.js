import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer, { act } from 'react-test-renderer';
import Rockets from '../components/Rockets';
import Missions from '../components/Missions';
import MyProfile from '../components/MyProfile';

import store from '../redux/store';

describe('Profile', () => {
  test('Render MyProfile Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Missions />
        <Rockets />
        <MyProfile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Rocket Button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        {/* <Missions /> */}
      </Provider>,
    );

    const reserveBtn = await screen.findAllByText('Reserve Rocket');
    expect(reserveBtn).toHaveLength(4);
  });

  test('Reserved Rocket name should be in profile', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        {/* <Missions /> */}
        <MyProfile />
      </Provider>,
    );

    act(() => {
      const reserveBtn = screen.getAllByText('Reserve Rocket');
      reserveBtn[0].click();
    });

    const rocketName = await screen.getAllByText('Falcon 1');
    expect(rocketName[1]).toBeInTheDocument();
  });
});

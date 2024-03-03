import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    componentRender,
} from 'shared/lib/tests/component-render/component-render';
import Counter from './counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('counter-increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('counter-decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});

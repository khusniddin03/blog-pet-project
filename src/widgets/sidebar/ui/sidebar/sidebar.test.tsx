import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslations,
} from 'shared/lib/tests/render-with-translations/render-with-translations';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        renderWithTranslations(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});

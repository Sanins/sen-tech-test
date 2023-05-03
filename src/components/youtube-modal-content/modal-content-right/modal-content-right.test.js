import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import ModalContentRight from './modal-content-right';

describe('ModalContentRight component', () => {
  it('displays 0 views and likes when statistics are undefined', () => {
    const statistics = {
      viewCount: null,
      likeCount: undefined,
    };

    const { getByText } = render(<ModalContentRight statistics={statistics} />);
    expect(getByText('Views: 0')).toBeInTheDocument();
    expect(getByText('Likes: 0')).toBeInTheDocument();
  });

  it('displays the correct number of views and likes', () => {
    const statistics = {
      viewCount: 100,
      likeCount: 50,
    };
    const { getByText } = render(<ModalContentRight statistics={statistics} />);
    expect(getByText('Views: 100')).toBeInTheDocument();
    expect(getByText('Likes: 50')).toBeInTheDocument();
  });
});
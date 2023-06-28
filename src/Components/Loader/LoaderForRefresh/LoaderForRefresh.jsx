import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderForRefresh.styled';

export const LoaderForRefresh = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="rgba(22, 22, 22)"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </LoaderWrapper>
  );
};

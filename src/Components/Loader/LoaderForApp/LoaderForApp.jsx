import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderForApp.styled';

export const LoaderForApp = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="rgba(22, 22, 22)"
        strokeWidth="5"
        animationDuration="0.75"
        width="400"
        visible={true}
      />
    </LoaderWrapper>
  );
};

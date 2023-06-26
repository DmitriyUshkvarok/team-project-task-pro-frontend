import { RotatingLines } from 'react-loader-spinner';

export const LoaderForAvatar = () => {
  return (
    <RotatingLines
      strokeColor="rgba(22, 22, 22)"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

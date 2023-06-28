import { RotatingLines } from 'react-loader-spinner';

export const LoaderForDeleted = () => {
  return (
    <RotatingLines
      strokeColor="rgba(78, 76, 76, 0.9)"
      strokeWidth="5"
      animationDuration="0.75"
      width="15"
      visible={true}
    />
  );
};

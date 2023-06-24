import { Box, BoxWave, Wave } from './LoaderSmall.styled';
export const LoaderSmall = () => {
  const waveElements = Array.from({ length: 10 }, (_, index) => (
    <Wave key={index} />
  ));

  return (
    <Box>
      <BoxWave>{waveElements}</BoxWave>
    </Box>
  );
};

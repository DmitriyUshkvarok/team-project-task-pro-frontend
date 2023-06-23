import { Box, BoxWave, Wave } from './LoaderViolet.styled';
// import { Box, BoxWave, Wave } from "./LoaderGreen.styled";

export const Loader = () => {
  const waveElements = Array.from({ length: 20 }, (_, index) => (
    <Wave key={index} />
  ));

  return (
    <Box>
      <BoxWave>{waveElements}</BoxWave>
    </Box>
  );
};
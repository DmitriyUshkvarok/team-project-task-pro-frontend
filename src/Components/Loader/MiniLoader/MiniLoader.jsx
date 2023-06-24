import { Container, Ball, Box, Shadow } from './miniLoader.styled';

export const MiniLoaderBall = () => {
  return (
    <Container>
      <Box>
        <Ball></Ball>
        <Ball></Ball>
        <Ball></Ball>
        <Shadow></Shadow>
        <Shadow></Shadow>
        <Shadow></Shadow>
      </Box>
    </Container>
  );
};

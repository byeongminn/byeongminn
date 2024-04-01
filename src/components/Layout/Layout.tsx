import { Footer, Header } from 'components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 3rem 0 3rem;
  max-width: 90rem;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 6.75rem 2rem 0 2rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 5.75rem 1rem 0 1rem;
  }
`;

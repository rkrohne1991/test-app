import Container from 'react-bootstrap/Container';

import styled from '@emotion/styled'

import bannerSrc from './../../../assets/images/AutoRide-Banner.jpeg'

const HeaderBottomBanner = styled.div`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    background-image: url(${bannerSrc});
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeaderBottomContainer = styled(Container)`
  color: var(--bs-white);
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0;
  order: 1;
`

const SecondHeader = styled.h2`
  margin-bottom: 3rem;
  order: 2;
`

const SubHeader = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0;
  order: 0;
`

export const HeaderBottom = () => {
  return (
    <HeaderBottomBanner>
      <HeaderBottomContainer>
        <MainHeader>
          Better journeys, by AutoRide
        </MainHeader>
        <SecondHeader>
          Make the most of your car hire
        </SecondHeader>
        <SubHeader>
          BOOK SMART. BOOK EARLY
        </SubHeader>
      </HeaderBottomContainer>
    </HeaderBottomBanner>
  )
}

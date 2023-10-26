import styled from '@emotion/styled'

import logoSrc from '/src/assets/images/AutoRide-Logo.png'

const Logo = styled.img`
  max-width: 14.6875rem;
  max-height: 6.875rem;
`;

export const LogoLight = () => <Logo id='logo' src={logoSrc} alt='AutoRide-Logo' />

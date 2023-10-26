import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

import { device } from '../../devices-breakpoints';

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media ${device.md} { 
    justify-content: end;
  }
`

const SocialIcon = styled.div`
  margin: 0.3125rem 0.625rem 0.3125rem 0rem;
`;

const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-gray-800);
  transition: all 200ms ease;

  svg {
    font-size: 1rem;
  }

  &:hover {
    color: var(--bs-gray-700);
  }
`

export const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <SocialIcon>
        <SocialLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook Link' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebookF} />
        </SocialLink>
      </SocialIcon>
      <SocialIcon className='me-0'>
        <SocialLink href='https://twitter.com/' target='_blank' aria-label='Twitter Link' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
      </SocialIcon>
    </SocialIconsWrapper>
  )
}

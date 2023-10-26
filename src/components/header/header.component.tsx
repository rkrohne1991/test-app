import { HeaderTop } from './header-top/header-top.component';
import { HeaderMiddle } from './header-middle/header-middle.component';
import { HeaderBottom } from './header-bottom/header-bottom.component';

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  )
}

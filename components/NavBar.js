import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavBar = () => {
  const router = useRouter();
  return (
    <Nav>
      <img src="/vercel.svg" alt="logo" />
      <div>
        <Link href="/">
          <a className={router.pathname === '/' ? 'active' : ''}>홈</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  img {
    max-width: 100px;
    margin-bottom: 5px;
  }
  a {
    font-weight: 600;
    font-size: 18px;
  }
  .active {
    color: ${(props) => props.theme.activeColor};
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

export default NavBar;

import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  padding: 1em 3em;
  .logo {
    margin-right: auto;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-transform: lowercase;
    &:hover{
      cursor: pointer;
    }
    img {
      width: 3em;
      margin-right: 1em;
    }
  }

  .logo__logo-text {
    font-size: 1.5rem;
  }
  ul {
    display: flex;
    li {
      margin-right: 20px;
    }
  }
`;

const Header = (props) => {
  const navText = props.lang.header.nav;
  const listElements = [];
  for (const [key, value] of Object.entries(navText)) {
    listElements.push(
      <li key={key}>
        <a href={`#${key}`}>{value}</a>
      </li>
    );
  }

  return (
    <HeaderStyled>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
        <div className="logo__logo-text">ｄｅｎ . ｋｕｚｎｅｔｓ</div>
      </div>
      <nav>
        <ul>{listElements}</ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;

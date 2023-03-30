import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  .logo {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    img {
      width: 3em;
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
        Den.Kuznets
      </div>
      <nav>
        <ul>{listElements}</ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;

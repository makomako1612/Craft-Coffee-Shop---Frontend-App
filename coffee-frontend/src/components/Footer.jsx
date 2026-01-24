import styled from "styled-components";

/* styled components */
const FooterWrapper = styled.footer`
  background-color: #f8f4f0;
  padding: 20px 0;
  text-align: center;
  color: #7b4a12;
  font-size: 14px;
  margin-top: 40px;
`;

const Link = styled.a`
  color: #7b4a12;
  text-decoration: none;
  margin: 0 8px;

  &:hover {
    text-decoration: underline;
  }
`;

/* component */
function Footer() {
  return (
    <FooterWrapper>
      © 2026 Craft Coffee Shop. All rights reserved.{" "}
      <Link href="https://www.craftcoffeeshop.com" target="_blank">
        Website
      </Link>
    </FooterWrapper>
  );
}

export default Footer;

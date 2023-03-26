import { SectionStyled, Title } from './Section.styled';

function Section({ children, title }) {
  return (
    <SectionStyled>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyled>
  );
}

export default Section;

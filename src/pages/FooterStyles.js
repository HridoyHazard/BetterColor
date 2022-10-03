import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 60px;
width: 100%;
background-color:${props=>props.background};
color:${props=>props.color};
@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 50px;
margin-top: 40px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 40px;
color: ${props=>props.color};


@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
color: ${props=>props.color};


&:hover {
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
margin-bottom: 40px;
font-weight: bold;
`;

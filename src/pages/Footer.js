import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = ({color,background}) => {
return (
	<Box color={color} background={background}>
		{/* <h1 style={{
					textAlign: "center",
					marginTop: "-50px" }}>

		</h1> */}
	<Container>
		<Row color={color} background={background}>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#" color={color}>Aim</FooterLink>
			<FooterLink href="#" color={color}>Vision</FooterLink>
			<FooterLink href="#" color={color}>Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#" color={color}>Uttar Pradesh</FooterLink>
			<FooterLink href="#" color={color}>Ahemdabad</FooterLink>
			<FooterLink href="#" color={color}>Indore</FooterLink>
			<FooterLink href="#" color={color}>Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#" color={color}>
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#" color={color}>
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#" color={color}>
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#" color={color}>
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

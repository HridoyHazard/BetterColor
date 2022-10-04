import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
	const [color, setColor] = useState("rgb(215 220 218)");
	const [background, setBackground] = useState("rgb(17, 24, 39)");

	useEffect(() => {
		console.log(color);
		console.log(background);
	}, [color, background]);

	const invertColor = (bg) => {
		bg = parseInt(Number(bg.replace("#", "0x")), 10);
		bg = ~bg;
		bg = bg >>> 0;
		bg = bg & 0x00ffffff;
		bg = "#" + bg.toString(16).padStart(6, "0");

		return bg;
	};

	return (
		<div className="container">
			<div className="cont">
				<header className="header">
					<div className="upper">
						<h2>BetterColor</h2>
					</div>
					<div className="mainBox">
						<div className="main">
							<p>
								A Website For Finding Better Color Combinations For Readability
								<br />
								<br />
							</p>
						</div>
						<div className="click">
							<div className="left_code">
								<div className="left">
									<p>Select Color For Text:</p>
									<input
										type="color"
										id="text"
										defaultValue="#D7DCDA"
										onChange={(e) => setColor(e.target.value)}
									/>
								</div>
								<div className="hex_code">
									<p>{color}</p>
								</div>
								<button onClick={() => navigator.clipboard.writeText(color)}>
									Copy Me!
								</button>
							</div>

							<div className="right_code">
								<div className="right">
									<p>Select Color For Background:</p>
									<input
										type="color"
										id="color"
										defaultValue="#111827"
										onChange={(e) => setBackground(e.target.value)}
									/>
								</div>
								<div className="hex_code">
									<p>{background}</p>
								</div>
								<button
									onClick={() => navigator.clipboard.writeText(background)}
								>
									Copy Me!
								</button>
							</div>
							<div
								className="bg"
								style={{ backgroundColor: `${background}`, color: `${color}` }}
							>
								<h2 id="one">Read Below Message</h2>
								<p id="two">
									When you work for peace or any other aspect of social change,
									there are often hardships to overcome. You must believe deeply
									that what you are doing is right, or else you may become
									discouraged and give up. I have found that there are no easy
									solutions to problems involving social change. When you commit
									yourself to creating a better world, you are most likely
									committing yourself to a lifetime of effort.
								</p>
								<p id="message" style={{ color: `${invertColor(background)}` }}>
									Can You Read The Message Above Comfortably With This
									Background? If Yes, Then Copy The Color Code. Else Try
									Changing Colors.
								</p>
							</div>
						</div>
						<div className="link">
							<button className="btn">
								<a href="https://github.com/HridoyHazard/BetterColor">
									View On Github
								</a>
							</button>
						</div>
					</div>
				</header>
				<div className="footer">
					<div className="footside">
						<h1 className="footer_name">
							<a title="" href="#">
								BetterColor
							</a>
						</h1>
						<ul className="footer_list">
							<li class="footer_item">
								<a title="about" href="#">
									About
								</a>
							</li>
							<li className="footer_item">
								<a title="contact" href="#">
									Contact
								</a>
							</li>
							<li class="footer_item">
								<a title="contact" href="#">
									Support
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="footside2">
					<p class="footer_text">Connect with us</p>
					<div class="social">
						<div className="social_icon">
							<a title="FB" href="">
								<img
									alt="lo"
									src="https://res.cloudinary.com/slmedia/image/upload/v1652302113/samples/food/facebook-16x16-761599_vlf1xl.png"
								/>
							</a>
						</div>
						<div className="social_icon">
							<a title="LI" href="">
								<img
									alt="lo"
									src="https://res.cloudinary.com/slmedia/image/upload/v1652302113/samples/food/linkedin-16x16-761611_a8dv2c.png"
								/>
							</a>
						</div>
						<div className="social_icon">
							<a title="TW" href="">
								<img
									alt="lo"
									src="https://res.cloudinary.com/slmedia/image/upload/v1652302113/samples/food/fa_twitter-16x16-761629_rhy95g.png"
								/>
							</a>
						</div>
						<div className="social_icon">
							<a title="GH" href="https://github.com/HridoyHazard/BetterColor">
								<img
									alt="lo"
									src="https://res.cloudinary.com/slmedia/image/upload/v1664749375/samples/food/github-16x16-761603_vwximd.png"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

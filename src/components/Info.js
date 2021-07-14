import React from "react";
import { Player } from "video-react";
import {
	Card,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle,
} from "reactstrap";

export default function Info(props) {
	const { data, setSite, site } = props;

	return (
		<div>
			<h1 className="heading">NASA</h1>
			<h2 className="heading">Photo Of The Day</h2>
			<Card>
				<CardBody>
					<CardTitle tag="h5">{data.title}</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						{data.date}
					</CardSubtitle>
				</CardBody>
				<div>
					{data.media_type === "video" ? (
						<Player playsInline autoplay type="video" src={data.url} />
					) : (
						<img
							width="100%"
							width="500px"
							src={data.url}
							alt="Card image cap"
						/>
					)}
				</div>
				<CardBody>
					<CardText>{data.explanation}</CardText>

					<CardText>{data.copyright}</CardText>
					<CardLink
						onClick={(e) => {
							e.preventDefault();
							console.log("new pic");
						}}
					>
						New Picture
					</CardLink>
				</CardBody>
			</Card>
		</div>
	);
}

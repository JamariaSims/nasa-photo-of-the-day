import React from "react";
import {
	Spinner,
	Card,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle,
} from "reactstrap";

export default function Info(props) {
	const { data } = props;
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle tag="h5">Card title</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						Card subtitle
					</CardSubtitle>
				</CardBody>
				<img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
				<CardBody>
					<CardText>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</CardText>
					<CardLink href="#">Card Link</CardLink>
					<CardLink href="#">Another Link</CardLink>
				</CardBody>
			</Card>
			<h1 className="heading">NASA</h1>
			<h2 className="heading">Photo Of The Day</h2>
			<img src={data.url} />
			<h2 className="title">{data.title}</h2>
			<p className="info">{data.explanation}</p>
			<p className="date">{data.date}</p>
			<p className="copyright">{data.copyright}</p>
		</div>
	);
}

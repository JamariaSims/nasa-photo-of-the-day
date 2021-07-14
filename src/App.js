import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Info from "./components/Info";
import { Spinner } from "reactstrap";

const dummyData = {
	copyright: "Alan FriedmanAverted Imagination",
	date: "2012-03-14",
	explanation:
		"It's one of the baddest sunspot regions in years. Active Region 1429 may not only look, to some, like an angry bird -- it has thrown off some of the most powerful flares and coronal mass ejections of the current solar cycle. The extended plumes from these explosions have even rained particles on the Earth's magnetosphere that have resulted in colorful auroras. Pictured above, AR 1429 was captured in great detail in the Sun's chromosphere three days ago by isolating a color of light emitted primarily by hydrogen. The resulting image is shown in inverted false color with dark regions being the brightest and hottest. Giant magnetically-channeled tubes of hot gas, some longer than the Earth, are known as spicules and can be seen carpeting the chromosphere. The light tendril just above AR 1429 is a cool filament hovering just over the active sunspot region. As solar maximum nears in the next few years, the increasingly wound and twisted magnetic field of the Sun may create even more furious active regions that chirp even more energetic puffs of solar plasma into our Solar System.   Gallery: See images of the latest planetary conjunction",
	hdurl: "https://apod.nasa.gov/apod/image/1203/angrysun_friedman_1080.jpg",
	media_type: "image",
	service_version: "v1",
	title: "Angry Sun Erupting",
	url: "https://apod.nasa.gov/apod/image/1203/angrysun_friedman_960.jpg",
};

function App() {
	const [data, setData] = useState(dummyData);

	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=Q0bfBWYq1i0yPcQMvUETWK9eJcyJX3cx28VJIhA1&date=2012-03-14"
			)
			.then((response) => {
				setData(response.data);
				console.log(response);
			})
			.catch(() => {});
	}, []);
	console.log(data);
	return (
		<div className="App">
			{data ? <Info data={data} /> : <Spinner color="dark" />}
		</div>
	);
}

export default App;

/** @format */

import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default class ChartHR extends Component {
	render() {
		return (
			<View
				style={{
					// marginHorizontal: 0,
					marginTop: 40,
				}}>
				<LineChart
					data={{
						labels: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"July",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec",
						],
						datasets: [
							{
								data: [
									15 * 10,
									10 * 10,
									12 * 10,
									22 * 10,
									25 * 10,
									13 * 10,
									18 * 10,
									19 * 10,
									20 * 10,
									18 * 10,
									17 * 10,
									16 * 10,
								],
							},
						],
					}}
					width={Dimensions.get("window").width}
					height={400}
					//yAxisSuffix='k'
					yAxisInterval={1}
					chartConfig={{
						backgroundColor: "#FFF",
						backgroundGradientFrom: "#FFF",
						backgroundGradientTo: "#FFF",
						decimalPlaces: 0,
						color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
						labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: "6",
							strokeWidth: "2",
							stroke: "black",
						},
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 16,
					}}
				/>
			</View>
		);
	}
}

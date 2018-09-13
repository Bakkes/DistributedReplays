import {ChartDataSets} from "chart.js"

export const convertHexToRgba = (hex: string, alpha: number = 1) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
    } else {
        return `rgba(${r}, ${g}, ${b})`
    }
}


export const getChartColors = (isOrange: boolean, colorNumber: number): ChartDataSets => {
    const teamColor: teamColors = isOrange ? "orange" : "blue"
    return chartColors[teamColor][colorNumber % 4]
}

type teamColors = "blue" | "orange"

interface ChartColors {
    blue: ChartDataSets[],
    orange: ChartDataSets[]
}

const blueBorderColour = "rgba(100, 100, 255, 0.8)"
const orangeBorderColour = "rgba(255, 150, 0, 0.8)"

const chartColors: ChartColors = {
    "blue": [
        {
            backgroundColor: "rgba(29, 53, 224, 0.4)",
            borderColor: blueBorderColour,
            borderWidth: 1
        },
        {
            backgroundColor: "rgba(1, 115, 214, 0.4)",
            borderColor: blueBorderColour,
            borderWidth: 1
        },
        {
            backgroundColor: "rgba(0, 222, 121, 0.4)",
            borderColor: blueBorderColour,
            borderWidth: 1
        },
        {
            backgroundColor: "rgba(0, 211, 204, 0.4)",
            borderColor: blueBorderColour,
            borderWidth: 1
        }
    ],
    "orange": [
        {
            backgroundColor: "rgba(221, 240, 41, 0.4)",
            borderColor: orangeBorderColour,
            borderWidth: 1
        },
        {
            backgroundColor: "rgba(255, 108, 0, 0.4)",
            borderColor: orangeBorderColour,
            borderWidth: 1
        },
        {
            backgroundColor: "rgba(255, 0, 128, 0.4)",
            borderColor: orangeBorderColour,
            borderWidth: 1
        },
        {
            backgroundColor: "rgba(251, 50, 60, 0.4)",
            borderColor: orangeBorderColour,
            borderWidth: 1
        }
    ]
}

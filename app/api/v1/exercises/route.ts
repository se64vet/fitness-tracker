import { NextRequest, NextResponse } from "next/server";

const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ff60fb7afmsh46cbc02e9f551f3p10b3a7jsn448d6d481b42',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export async function GET (req: NextRequest) {
    const query = req.nextUrl.searchParams.get("name");
    let url;
    query === "" ? url = baseUrl + '?limit=10' : url = baseUrl + `/name/${query}?limit=10` 
    try {
        const data = await fetch(url, options);
        const excercises = await data.json();
        return NextResponse.json(excercises);

    } catch (error) {
        return new NextResponse("Something wrong happend.", {status: 400})
    }
}
import { NextResponse } from "next/server";

async function signin(){

}

export async function GET({ request }){
  const { id } = await request.json();
  try {
    if (result.results.length === 0) {
      return NextResponse.json('fail', { status: 404 });
    } else {
      return NextResponse.json('success', { status: 200 });
    }
  } catch (error) {
    
  }
}
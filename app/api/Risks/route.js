import Risk from "@/app/models/Risk";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const risks = await Risk.find();

    return NextResponse.json({ risks }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const riskData = body.formData;

    await Risk.create(riskData);

    return NextResponse.json({ message: "Risk Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

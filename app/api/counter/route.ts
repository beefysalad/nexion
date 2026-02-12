import { getCounter, incrementCounter } from '@/lib/data/counter'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const counter = await getCounter()
    return NextResponse.json(counter)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch counter' },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    const counter = await incrementCounter()
    return NextResponse.json(counter)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to increment counter' },
      { status: 500 }
    )
  }
}

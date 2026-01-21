import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL

export async function POST(request: NextRequest) {
  try {
    if (!N8N_WEBHOOK_URL) {
      console.error('N8N_WEBHOOK_URL is not configured')
      return NextResponse.json({ error: 'Service not configured' }, { status: 500 })
    }

    const body = await request.json()
    const { message, sessionId } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const trimmedMessage = message.trim()
    if (trimmedMessage.length === 0) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 })
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: trimmedMessage, sessionId: sessionId || 'default' }),
    })

    if (!response.ok) {
      console.error('n8n webhook error:', response.status, response.statusText)
      throw new Error('Failed to get response from cleaning coach')
    }

    const data = await response.json()
    return NextResponse.json({ response: data.response, sessionId: data.sessionId || sessionId })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Failed to get response. Please try again.' }, { status: 500 })
  }
}

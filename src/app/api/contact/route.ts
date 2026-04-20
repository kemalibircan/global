import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message, website } = body as {
      name?: string
      email?: string
      message?: string
      website?: string // honeypot
    }

    // Honeypot check – bots fill this, humans don't
    if (website) {
      return NextResponse.json({ ok: true }) // silently discard
    }

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 })
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Geçersiz e-posta adresi.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Website <noreply@globaldijital.com>',
      to: 'kemal.alibircan@gmail.com',
      replyTo: email,
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>İletişim Formu</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0"
                  style="background:#111;border-radius:16px;overflow:hidden;border:1px solid #222;">
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#00D4FF,#7B2FBE);padding:32px 40px;">
                      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                        GlobalDijital — Yeni Mesaj
                      </h1>
                      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">
                        İletişim formu aracılığıyla iletildi
                      </p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding:36px 40px;">
                      <!-- Name -->
                      <table width="100%" style="margin-bottom:24px;">
                        <tr>
                          <td style="padding:16px;background:#1a1a1a;border-radius:10px;border-left:3px solid #00D4FF;">
                            <p style="margin:0 0 4px;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Ad Soyad</p>
                            <p style="margin:0;color:#fff;font-size:16px;font-weight:600;">${escapeHtml(name)}</p>
                          </td>
                        </tr>
                      </table>
                      <!-- Email -->
                      <table width="100%" style="margin-bottom:24px;">
                        <tr>
                          <td style="padding:16px;background:#1a1a1a;border-radius:10px;border-left:3px solid #7B2FBE;">
                            <p style="margin:0 0 4px;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:1px;">E-posta</p>
                            <a href="mailto:${escapeHtml(email)}"
                               style="color:#00D4FF;font-size:15px;text-decoration:none;">${escapeHtml(email)}</a>
                          </td>
                        </tr>
                      </table>
                      <!-- Message -->
                      <table width="100%">
                        <tr>
                          <td style="padding:16px;background:#1a1a1a;border-radius:10px;border-left:3px solid #00D4FF;">
                            <p style="margin:0 0 8px;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Mesaj</p>
                            <p style="margin:0;color:#ccc;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 40px;border-top:1px solid #1e1e1e;">
                      <p style="margin:0;color:#444;font-size:12px;text-align:center;">
                        © ${new Date().getFullYear()} GlobalDijital — globaldijital.com
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Mail gönderilemedi.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 })
  }
}

/** Prevent XSS in HTML email */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

# EmailJS Setup Instructions

Follow these steps to enable direct email sending from your portfolio contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

## Step 2: Add Email Service
1. After login, go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose **Gmail** (recommended since you use Gmail)
4. Click **Connect Account** and authorize your Gmail (ebtehal.mohamed.raafat.abdelfatah@gmail.com)
5. Copy the **Service ID** (something like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Replace the template content with this:

```
Subject: Portfolio Contact: {{subject}}

Hello Ibtihal,

You have received a new message from your portfolio website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS:
Name: {{from_name}}
Email: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. In the "To Email" field, enter: `{{to_email}}`
5. In the "From Name" field, enter: `{{from_name}}`
6. In the "Reply To" field, enter: `{{from_email}}`
7. Click **Save**
8. Copy the **Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** (or **API Keys**) in the sidebar
2. Find your **Public Key** (something like `xxxxxxxxxxxxxxxx`)
3. Copy it

## Step 5: Update Your Code
Open `src/components/Contact.tsx` and replace these placeholders (around line 18-20):

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with Service ID from Step 2
  'YOUR_TEMPLATE_ID',    // Replace with Template ID from Step 3
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'ebtehal.mohamed.raafat.abdelfatah@gmail.com',
  },
  'YOUR_PUBLIC_KEY'      // Replace with Public Key from Step 4
);
```

### Example (with fake IDs):
```typescript
const result = await emailjs.send(
  'service_abc123',           // Your actual service ID
  'template_xyz789',          // Your actual template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'ebtehal.mohamed.raafat.abdelfatah@gmail.com',
  },
  'xYz123AbC456DeF789'        // Your actual public key
);
```

## Step 6: Test It!
1. Save the file
2. Go to your portfolio
3. Fill out the contact form
4. Click "Send Message"
5. Check your Gmail inbox (ebtehal.mohamed.raafat.abdelfatah@gmail.com)

## Troubleshooting

### Emails not arriving?
- Check your EmailJS dashboard for failed sends
- Make sure you authorized Gmail correctly
- Check your Gmail spam folder
- Verify all three IDs are correct (Service ID, Template ID, Public Key)

### Getting errors in console?
- Open browser Developer Tools (F12)
- Check the Console tab for error messages
- Common issues:
  - Wrong IDs/Keys
  - Monthly limit reached (200 free emails/month)
  - CORS issues (shouldn't happen with EmailJS)

## Free Plan Limits
- ✅ 200 emails per month
- ✅ No credit card required
- ✅ Perfect for portfolio websites

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact me if you have issues setting this up

---

**Note:** Keep your Public Key safe but remember it's meant to be used in frontend code. Never share your Private Key if EmailJS gives you one.

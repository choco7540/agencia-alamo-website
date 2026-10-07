# Agencia Alamo

A private, reviewable bilingual marketing website. Eight dedicated Spanish service pages, English landing page, blog with three original articles, legal/help pages, sitemap, robots, InsuranceAgency and FAQ structured data.

## Business sources
Contact and displayed hours: https://www.alamoinsuranceagency.com/ (checked 2026-09-16). The older Spanish site lists weekday closing at 6pm; this version follows the insurance agency site at 5:30pm. Owner should confirm.
Facebook: https://www.facebook.com/segurosalamo/ . Messenger uses https://m.me/segurosalamo . WhatsApp is intentionally not configured without a verified WhatsApp number.
Reviews are attributed excerpts from the existing agency website, not a live Google feed. No aggregate rating was invented.
Uploaded logo reused; dominant blue sampled RGB 19,72,156. Hero is original AI-generated illustrative photography, not actual agency customers.

## Lead handling
POST /api/quotes validates and stores inquiries in D1 quotes. There is no public GET endpoint exposing contact information. The site owner can retrieve records through the Sites database tools. No email, SMS, CRM, or staff notification connection has been configured. Connect a recipient/service before using the site for live customer acquisition. Do not claim email delivery.

## Pending account configuration
lib/config.ts has GA4 measurement ID, Meta Pixel ID and Search Console verification token fields. Tracking stays off until IDs are supplied and visitors opt in. Events: call_click, messenger_click, generate_lead (only after confirmed database save). No form fields are sent to analytics.
Update origin in lib/config.ts when the final custom domain is connected. Set audience to public only on user authorization. Private sites cannot be indexed by Google. Search Console still requires account verification and sitemap submission. No ranking guarantees.

## Content maintenance
Edit lib/content.ts to add service copy, FAQs and blog articles. Dynamic server routes supply indexable titles and content without relying on client-only page rendering. Keep insurance eligibility and state rules current.

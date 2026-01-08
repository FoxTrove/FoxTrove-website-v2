# The "Stealth Vertical" Strategy
*Status: Verticals are Hidden. Main Brand is Authority.*

## The Core Correction
**User Feedback**: "Don't expose the three sectors. Keep them close to the chest. Use three vertical domains."
**The Shift**:
*   **Main Domain (`foxtrove.ai`)**: The "Headquarters". High-status, generic "Enterprise AI Implementation". It sells the *capability* and the *team*, not the specific vertical solutions.
*   **Subdomains (`industry.foxtrove.ai`)**: The "Sniper" landing pages. These are where the specific offers live. They are isolated.

## The Routing Architecture (Next.js Middleware)
We will use Next.js Middleware to rewrite requests based on the hostname.

| Hostname | Rewrite Target | Strategy |
| :--- | :--- | :--- |
| `construction.foxtrove.ai` | `/construction` | The "Digital Foreman" Offer. |
| `medspa.foxtrove.ai` | `/med-spa` | The "Empty Chair" Offer. |
| `homeservices.foxtrove.ai` | `/home-services` | The "Pilot Partner" Offer. |
| `foxtrove.ai` | `/` (Main Page) | **The Stealth Authority Page.** |

## The New Homepage: "The Stealth Authority"
It must communicate: *"Man, these guys know what they are doing. I want them to be my dedicated AI guys."* without saying "We do plumbing."

*   **Headline**: "We Build The AI Revenue Engines That Power The Top 1%."
*   **Subhead**: "Implementation. Optimization. Scale. We don't sell tools. We install infrastructure."
*   **The Vibe**: "Black Ops" / "Private Equity". Dark, serious, expensive.
*   **Call to Action**: "Inquire For Partnership" (Qualification Gate).

## Vertical Pages (Isolated Sales Letters)
These pages will now *only* need to speak to their specific audience. They won't share navigation with the other verticals.
*   **Navigation**: Remove global navbar links to other verticals. Each subdomain feels like a dedicated boutique firm.

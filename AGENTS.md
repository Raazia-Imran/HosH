<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Verification and handoff

- Preserve the entire `.lovable/` folder and the client-approved design.
- Run the production build, TypeScript, and lint checks for code or dependency changes.
- After pushing, inspect the exact commit's GitHub checks and statuses, including Vercel and SonarQube Cloud. Verify deployment readiness and smoke-test the deployed pages before calling a deployment successful.
- A neutral SonarQube result or "Quality Gate not computed" is not a passed quality gate. Report failures, unavailable checks, and access limits explicitly.

## Client content and launch constraints

- Respond to the user in English, including when the user writes in Urdu or Hindi.
- Use plain English public prose without em dash punctuation or unnecessary hyphenated phrases. Preserve required punctuation in code, identifiers and URLs.
- Use `src/lib/site-config.ts` for the confirmed domain, location and enquiry email. Do not invent phone numbers, street addresses, legal entities, credentials, customer reviews or service locations.
- Continue work in Raazia-Imran/HosH until the final handoff. Retain the agreed portfolio repository and plan a separate client copy. Do not move account ownership or change DNS prematurely.
- Keep unresolved operator, privacy and legal approval details in the internal launch checklist rather than public editorial notes.
- Check hosting terms before launch. Vercel Hobby does not permit this commercial business website under its current usage terms.

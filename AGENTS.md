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

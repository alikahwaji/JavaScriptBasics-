# 4. Branching and Collaboration

When working on a project, especially in a team, having everyone edit the same main codebase simultaneously can be chaotic. This is where **branching** comes in.

---

## What is a Branch?

A **branch** in Git is an independent timeline of your project's history. It allows you to create a separate workspace where you can safely develop new features or fix bugs without affecting the stable, "live" version of your code.

Think of it like creating a copy or a draft document: you can experiment as much as you want in your draft, and only combine it with the final document when it’s perfect.

### Visualizing Branches

```text
main:    A --- B --- C --- F
                      \   /
feature:               D --- E
```

_In this diagram:_

- `A`, `B`, `C` are commits on the main timeline.
- A new branch (`feature`) is created at commit `C`.
- Commits `D` and `E` are made independently.
- Finally, the feature branch is **merged** back into the main branch at commit `F`.

---

## Why is Branching Used?

1. **Safety:** The `main` branch should only contain stable, working code.
2. **Isolation:** You can work on a "login page" feature completely isolated from your partner who is working on the "homepage styling."
3. **Experimentation:** If your idea fails, you can simply delete the branch and pretend it never happened.

---

## Feature Branches

A **feature branch** is a branch created specifically to build a new feature.

### Creating and Switching Branches

To create a new branch and switch to it immediately, use the following command:

```bash
git checkout -b feature-login
```

To switch back to your `main` branch:

```bash
git checkout main
```

To see a list of all your branches:

```bash
git branch
```

---

## Merging Branches

Once your feature branch is complete and fully tested, you will want to combine it back into the `main` branch. This is called **merging**.

### Local Merging

If you are working alone locally, you can merge your feature branch directly into your `main` branch:

1. Switch back to the main branch:
   ```bash
   git checkout main
   ```
2. Merge the feature branch into main:
   ```bash
   git merge feature-login
   ```

---

## Pull Requests (PRs)

In a real-world team environment on GitHub, developers rarely merge their own code directly into the `main` branch. Instead, they use a **Pull Request (PR)**.

### What is a Pull Request?

A Pull Request is exactly what it sounds like: a formal request asking the project owner to _pull_ your feature branch into the _main_ branch.

### The Team Workflow:

1. Create a `feature-login` branch locally.
2. Write code, `git add`, and `git commit`.
3. Push your branch to GitHub:
   ```bash
   git push origin feature-login
   ```
4. Open GitHub in your web browser. You will see a green button asking to **Compare & pull request**.
5. Your teammates review your code, leave comments, and suggest changes.
6. Once approved, someone clicks the **Merge pull request** button on GitHub.
7. Your code is now part of the `main` branch! Everyone on the team then runs `git pull origin main` to get your new updates.

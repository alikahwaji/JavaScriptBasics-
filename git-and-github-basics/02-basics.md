# 2. Local Git Basics

Now that Git is installed, let's learn how to track changes on your own computer.

## Creating a Repository (Init)

A **repository** (or "repo" for short) is simply a folder that Git is tracking.

To create a new repository:

1. Create a new folder on your computer.
2. Open your terminal and navigate into that folder.
3. Run the "init" (initialize) command:

```bash
# Example:
mkdir my-first-project
cd my-first-project
git init
```

_Git workflow diagram:_

```text
Working Directory  ---->  Staging Area  ---->  Local Repository
   (Your files)            (On deck)           (Saved history)
```

---

## The Core Workflow: Add and Commit

When you change files, Git sees the changes, but it doesn't save them to your history automatically. You have to do it in two steps: **Staging** and **Committing**.

### 1. Staging Changes (`git add`)

The **staging area** is like an "on-deck" circle. You are telling Git, "Get these files ready; I want to save them in my next update."

```bash
# To stage a specific file:
git add index.html

# To stage ALL changed files at once (very common):
git add .
```

### 2. Committing Changes (`git commit`)

A **commit** is taking a snapshot of the staged files and saving them permanently in the repository's history. Every commit needs a short, descriptive message explaining _what_ you changed.

```bash
git commit -m "Add homepage structure"
```

> **Beginner Tip:** Write clear commit messages! "Fix bug" is bad. "Fix login button crash" is good.

---

## Checking Your Status

If you ever get confused about what files are staged, modified, or untouched, use the status command. It is the most useful command for beginners!

```bash
git status
```

Git will clearly tell you:

- Which files are ready to be committed (green).
- Which files are modified but not yet staged (red).

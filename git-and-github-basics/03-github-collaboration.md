# 3. Collaboration with GitHub

GitHub is where you store your local repositories online, allowing you to share code, back it up, and work with your team.

---

## 1. Organizing Repositories

Think of a repository like a project folder. Keep your repositories organized:

- Give them clear names (e.g., `web-dev-assignment-1`).
- Include a `README.md` file! This is the "front page" of your project that explains what it is.

---

## 2. Cloning a Repository

If a repository already exists on GitHub (maybe your instructor created it, or your friend started the project), you need to download it to your computer.

This is called **cloning**.

1. Go to the repository page on GitHub.
2. Click the green **Code** button and copy the HTTPS URL.
3. Open your terminal, navigate to where you want the folder to live, and type:

```bash
git clone https://github.com/username/repository-name.git
```

This will download the entire project history to your computer.

---

## 3. Pushing Code to GitHub

Once you have made local changes (using `git add` and `git commit`), your computer's repository is updated. But GitHub doesn't know about it yet!

To send your local commits up to the internet, you "push" them.

```bash
# Push your changes to the original repository on the 'main' branch
git push origin main
```

_Analogy:_ Committing is like saving your game to the memory card. Pushing is like uploading that save file to the cloud.

---

## 4. Pulling Updates

When working in a team, your partner might push new code to GitHub while you are sleeping. When you wake up, your local computer does not have those changes yet!

Before you start working, you should always **pull** the latest changes from GitHub to your computer.

```bash
# Pull the latest changes from GitHub to your computer
git pull origin main
```

_Basic Workflow:_

```text
[GitHub Repo]
      ^      |
 push |      | pull
      |      v
[Your Computer's Repo]
```

### The Golden Rule of Teamwork

**Always run `git pull` before you start writing new code for the day.** This prevents annoying "merge conflicts" where you and your partner accidentally edit the same line of code at the exact same time.

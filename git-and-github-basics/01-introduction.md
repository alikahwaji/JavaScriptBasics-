# 1. Introduction to Git and GitHub

Welcome to the world of version control! If you are a first-year IT student, understanding Git and GitHub is one of the most important skills you will learn.

## What is Version Control?

Imagine writing an essay. You might save files like:

- `Essay_draft1.docx`
- `Essay_final.docx`
- `Essay_final_FINAL.docx`

**Version control** is a system that solves this problem for code. It records changes whenever you modify a file. This means you can always look back at older versions of your code, see who made changes, and easily undo mistakes without keeping dozens of separate files.

### Why is Version Control Important?

- **Undo Mistakes:** If your code breaks, you can easily go back to a working version.
- **Track History:** You can see _when_ and _why_ a piece of code was changed.
- **Teamwork:** It allows multiple developers to work on the exact same files at the same time without overwriting each other's work.

---

## What is Git?

**Git** is the actual software that handles version control on your computer. It runs locally and keeps track of all your changes. It's completely free and open-source.

Think of Git as a **time machine** for your code.

---

## What is GitHub?

**GitHub** is a website (a cloud service) that hosts your Git repositories. While Git lives on your laptop, GitHub lives on the internet.

Think of GitHub as **Google Drive or Dropbox for your Git code**. It allows you to back up your code and share it with teammates, instructors, or the entire world.

> **Note:** Git and GitHub are **not** the same thing! Git is the tool; GitHub is the website that hosts Git projects.

---

## Installing Git

Before you can use Git, you need to install it on your computer.

### Windows

1. Go to [gitforwindows.org](https://gitforwindows.org/).
2. Download the installer and run it.
3. Keep clicking **Next** to accept the default settings (they are perfect for beginners).

### macOS

1. Open the **Terminal** app.
2. Type `git --version` and press Enter.
3. If Git is not installed, your Mac will automatically prompt you to install it.

### Verifying the Installation

Once installed, open your terminal (Command Prompt or Git Bash on Windows, Terminal on Mac) and type:

```bash
git --version
```

If it prints something like `git version 2.40.1`, you are ready to go!

### First-Time Setup

Tell Git who you are! Run these two commands so Git can attach your name to your work:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

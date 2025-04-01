const installationCommands = [
  {
    title: "Windows Installation",
    command:
      "# Download Git from https://git-scm.com/download/win\n# Run the installer and follow the setup wizard",
    description:
      "Download and install Git for Windows from the official website",
  },
  {
    title: "macOS Installation",
    command: "brew install git",
    description: "Install Git using Homebrew package manager on macOS",
  },
  {
    title: "Linux (Ubuntu/Debian) Installation",
    command: "sudo apt-get update && sudo apt-get install git",
    description: "Install Git using apt package manager on Ubuntu/Debian",
  },
];

const configurationCommands = [
  {
    title: "Configure Username",
    command: 'git config --global user.name "Your Name"',
    description: "Set your name for Git commits",
  },
  {
    title: "Configure Email",
    command: 'git config --global user.email "your.email@example.com"',
    description: "Set your email for Git commits",
  },
  {
    title: "Configure Default Branch",
    command: "git config --global init.defaultBranch main",
    description: "Set the default branch name to 'main'",
  },
];

const basicCommands = [
  {
    title: "Initialize Repository",
    command: "git init",
    description: "Create a new Git repository in the current directory",
  },
  {
    title: "Clone Repository",
    command: "git clone https://github.com/username/repository.git",
    description: "Create a copy of a remote repository",
  },
  {
    title: "Check Status",
    command: "git status",
    description: "View the status of your working directory",
  },
];

const workflowCommands = [
  {
    title: "Add Files",
    command: "git add filename.txt\ngit add .\ngit add -A",
    description:
      "Stage changes for commit (single file, all files, or all changes)",
  },
  {
    title: "Commit Changes",
    command: 'git commit -m "Add feature X"',
    description: "Save staged changes with a descriptive message",
  },
  {
    title: "Push Changes",
    command: "git push origin main",
    description: "Upload local commits to remote repository",
  },
];

const branchCommands = [
  {
    title: "Create Branch",
    command: "git checkout -b feature-name",
    description: "Create and switch to a new branch",
  },
  {
    title: "List Branches",
    command: "git branch",
    description: "Show all local branches",
  },
  {
    title: "Switch Branch",
    command: "git checkout branch-name",
    description: "Switch to an existing branch",
  },
];

export {
  basicCommands,
  branchCommands,
  configurationCommands,
  installationCommands,
  workflowCommands,
};

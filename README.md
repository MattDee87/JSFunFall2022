# JavaScript Fundamentals

**[CanCode Communities Class](https://cancode.org/)**

**Fall 2022**

This is the git repository for the class. It will be updated on a class by class basis.

You will submit your assignments by doing pull requests. You will need to create a Github account if you do not have one already. Fork this repository by clicking on the _Fork_ button. Then clone your forked repository with this command, replacing YOUR-USERNAME with your Github username:

```bash
git clone https://github.com/YOUR-USERNAME/JSFunFall2022.git
```

Add the original repository as a remote to your forked repository:

```bash
cd JSFunFall2022
git remote add upstream https://github.com/AlbanyCanCodeCourses/JSFunFall2022.git
git remote -v
# You should see your upstream set as https://github.com/AlbanyCanCodeCourses/JSFunFall2022.git
git config pull.rebase true
```

At any point, if you see the message "Please tell me who you are" in your command line output, you will need to setup your command line to use your Github account. Follow the instruction underneath where it says "Run", replacing "youremail@example.com" and "Your Name" with your information.

Finally, to run the tests for the exercises, you will need to install testing libraries:

```bash
npm install
```

#### On Making Pull Requests

Whenever you are ready to submit your work, you will need to [commit your work, push to your own repository, and then make a pull request](docs/SubmittingAssignments.md).

## Resources

- Projects: [First Project: Hangman](projects/hangman/ProjectHangman.md) | [Final Project: Document Object Model](projects/final-project/FinalProject.md)
- Installation Guide: [Mac](docs/InstallationGuideMac.md) | [Windows](docs/InstallationGuideWindows.md) | [Linux](docs/InstallationGuideLinuxAndNVM.md)
- JavaScript - [MDN](https://developer.mozilla.org/en-US/) (Unofficial JavaScript Manual) | [Tutorials](https://javascript.info/)
- Command Line: [NPM Guide](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) | [Unix Crash Course](https://www.vikingcodeschool.com/web-development-basics/a-command-line-crash-course) | [Unix Cheat Sheet](http://www.mathcs.emory.edu/~valerie/courses/fall10/155/resources/unix_cheatsheet.html)
- Command Line: [Unix Cheat Sheet](https://www.guru99.com/linux-commands-cheat-sheet.html) | [Unix Tutorial](http://www.ee.surrey.ac.uk/Teaching/Unix/) | [NPM Guide](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
- Git: [Git Commands for Beginners](http://rogerdudler.github.io/git-guide/) | [First Contributions Tutorial](https://github.com/firstcontributions/first-contributions)
- Visual Studio Code: [Mac Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf) | [Windows Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) | [Getting Started](https://code.visualstudio.com/docs/getstarted/introvideos) | [How to use Quokka.js](https://debug.to/1441/quokka-js-extension-for-visual-studio-code)

class Paste {
  constructor() {
    this.code =
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
    this.title = "how to gain dominance among developers";
    this.syntax = "Bash";
  }
}

module.exports = Paste;

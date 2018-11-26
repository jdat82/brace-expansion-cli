# Overview

CLI to expand brace expressions. Wrapper around https://github.com/juliangruber/brace-expansion.

# Install

```bash
npm install -g brace-expansion-cli
```

# Usage

```markdown
Usage
  $ expand <expression>

Options
  --help, -h        Show help
  --verbose, -v     Verbose output
  --version         Output version

Examples
  $ expand file-{a,b,c}.jpg
    => file-a.jpg file-b.jpg file-c.jpg
    
  $ expand file-{0..4..2}.jpg file-{a..e..2}.jpg
    => file0.jpg file1.jpg file2.jpg file-a.jpg file-b.jpg file-c.jpg
```

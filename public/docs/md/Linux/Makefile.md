# Makefile

Automate compilation and running of programs/ large project

## Basic usage

- Filename: Makefile
- cmd: make
- tabs matter

```make
run:
    echo "Hello world"
```

Output:

- the command is shown on the screen

```make
echo "Hello world"
Hello world
```

- use `@` directive to hide the command and only show the output

## Running multiple tasks/targets

```make
all: compile run clean_up
compile:
	@javac Main.java
run: Main.class # can have multiple dependecies separated by a space
	@java Main
clean_up:  Main.class # target: dependecy, means the target wont be run if this command fails
	@rm Main.class
```

# Variables

```make
cc=gcc
cc := ${cc} # same as above but will allow assign other variables
run:
    ${cc} main.c -o main
```

```

```

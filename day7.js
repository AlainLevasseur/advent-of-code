const MAX_DIRECTORY_SIZE = 100000;
const MAX_FILESYSTEM_SIZE = 70000000;
const UPDATE_SIZE = 30000000;

class Directory {
    constructor(name, parentDirectory) {
        this.name = name;
        this.parentDirectory = parentDirectory;
        this.childDirectories = [];
        this.files = [];
        this.size = 0;
    }

    //dir directory
    addDirectory(addedDirectory) {
        if(this.childDirectories.find( directory => directory.name === addedDirectory.name ) === undefined) {
            this.childDirectories.push(addedDirectory);
        }
    }

    //size name
    addFile(addedFile) {
        if(this.files.find( file => file.name === addedFile.name) === undefined) {
            this.files.push(addedFile);
            this.size += addedFile.size;
        }
    }

    //cd directoryName
    getChildDirectory(directoryName) {
        let index = this.childDirectories.findIndex(directory => directory.name === directoryName);
        return this.childDirectories[index];
    }

    //cd ..
    getParentDirectory() {
        let parent = this.parentDirectory;
        if (parent !== undefined) return parent;
        return this;
    }

    //cd /
    getRootDirectory() {
        let parent = this.getParentDirectory();
        if(parent === null) return this;
        if(parent.getParentDirectory() === null) return parent;
        return parent.getRootDirectory();
    }

    getDirectorySizes() {
        let children = this.childDirectories;
        let childrenSizes = [];
        let sizes = []
        let mySize = this.size;
        if(children.length === 0) {
            return [this.size]; 
        }
        children.forEach((child) => {
            childrenSizes.unshift(...child.getDirectorySizes());
            mySize += childrenSizes[0];
        })
        sizes.push(mySize, ...childrenSizes);
        return sizes;

    }
}

class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

function part1(inputString) {
    let solution = 0;
    let currentDirectory = null;
    let commands = inputString.split("$");
    commands.forEach(command => {
        currentDirectory = processCommand(command, currentDirectory);
    });
    currentDirectory.getRootDirectory().getDirectorySizes().forEach((size) => {
        if(size <= MAX_DIRECTORY_SIZE) {
            solution += size;
        }
    });
    return solution;
}

function processCommand(command, currentDirectory) {
    const [empty, parsedCommand, ...rest] = command.split(' ');
    if(parsedCommand === undefined) return currentDirectory;
    if(parsedCommand === 'cd') return processCD(rest[0], currentDirectory);
    if(parsedCommand === 'ls') return processLS(rest, currentDirectory);
}

function processCD(changedDirectory, currentDirectory) {
    if(currentDirectory === null) return new Directory(changedDirectory, currentDirectory);
    if(changedDirectory === '..') return currentDirectory.getParentDirectory();
    if(changedDirectory === '/') return currentDirectory.getRootDirectory();
    return currentDirectory.getChildDirectory(changedDirectory);
}

function processLS(directoryContents, currentDirectory) {
    let firstOutput;
    let secondOutput;
    for(let index = 0; index < directoryContents.length-1; index += 2) {
        firstOutput = directoryContents[index];
        secondOutput = directoryContents[index+1];
        if(firstOutput === 'dir') {
            currentDirectory.addDirectory(new Directory(secondOutput, currentDirectory));
            continue;
        }
        currentDirectory.addFile(new File(secondOutput, parseInt(firstOutput)));
    }
    return currentDirectory;
}

function part2(inputString) {
    let solution = 0;
    let currentDirectory = null;
    let commands = inputString.split("$");
    commands.forEach(command => {
        currentDirectory = processCommand(command, currentDirectory);
    });
    const directorySizes = currentDirectory.getRootDirectory().getDirectorySizes();
    const FREE_SPACE = (MAX_FILESYSTEM_SIZE - directorySizes[0]);
    const SPACE_REQUIRED = UPDATE_SIZE - FREE_SPACE;
    solution = directorySizes.reduce((smallestSize, size) => {
        console.log([FREE_SPACE, SPACE_REQUIRED, size, smallestSize]);
        if (size >= SPACE_REQUIRED && size < smallestSize) { return size; }
        return smallestSize;
    });
    return solution;
}

export function day7(string) {
    return [part1(string), part2(string)];
}
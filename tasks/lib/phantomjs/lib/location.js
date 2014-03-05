if (process.platform === 'linux') {
    module.exports.location = "phantom/bin/phantomjs";
} else {
    module.exports.location = "phantom/bin/osx/phantomjs";
}


const hljs = require("highlight.js/lib/");
const { definer: iecst } = require("../iecst");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("iecst", iecst);

describe("respec-highlight bundle", () => {
    it("highlights iecst", () => {
        // Load the input file...
        const input = fs.readFileSync(
            path.resolve(__dirname, "./input.txt"),
            "utf-8"
        );

        // Do the highlight...
        const { value: result, language } = hljs.highlightAuto(input, [
            "iecst"
        ]);
        expect(language).toBe("iecst");

        // Check the output is what we expect...
        const expected = fs.readFileSync(
            path.resolve(__dirname, "./expected.txt"),
            "utf-8"
        );
        expect(result).toBe(expected);
    });
});

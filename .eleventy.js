module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('img');



  return {
        dir: {
          input: "src",
          output: "public",
        },
      };
};
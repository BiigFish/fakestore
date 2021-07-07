module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('img');

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  return {
        dir: {
          input: "src",
          output: "public",
        },
      };
};



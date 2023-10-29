/** @type {import('prettier').Options} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
  semi: false,
  singleQuote: true,
  tailwindAttributes: ['style'],
  tailwindFunctions: ['tw'],
}

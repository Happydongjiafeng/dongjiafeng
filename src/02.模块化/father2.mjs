/* .mjs的后缀 */
const sleep = (value, time) =>
  new Promise((resolve) => setTimeout(() => resolve(value), time));
export const hello = await sleep("hello", 3000);
export let awaitWaring = () => {
    console.log('3s后有结果');
}

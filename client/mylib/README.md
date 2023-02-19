# useThrottle hook for React
> homepage: https://www.npmjs.com/package/usethrottle-hook;
```bash
npm i usethrottle-hook
```
## Usage example
```js
const throttleLoadMore = useThrottle(() => props.loadMore(dataLength), 500);
...
function handleScroll(e: React.UIEvent<HTMLElement>) {
    ...
    let scrollBottom =
        element.scrollHeight - element.offsetHeight - element.scrollTop;
    if (dataLength < countLimit) {
        if (Math.floor(scrollBottom) <= 0) {
            
            throttleLoadMore();
            
        }
    }
}
```

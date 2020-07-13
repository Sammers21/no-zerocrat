function getElementsByXPath(xpath, parent)
{
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}
getElementsByXPath("//div[contains(@class,'timeline-comment-header')]//a[text()='0crat']/../../../..").forEach(elem => elem.remove());
getElementsByXPath("//a[contains(@data-hovercard-url,'/users/0crat/hovercard')]").forEach(elem => elem.remove());
console.log("Zerocrat has been removed from the page");

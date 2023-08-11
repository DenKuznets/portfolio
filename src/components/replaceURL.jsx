const urlRegex = /https?:\/\/(.\.?)+\..+/;
const replaceURL = (str) => {
    const texts = str.split(" ").reduce(
        (acc, text) => {
            if (urlRegex.test(text)) {
                acc.array.push(acc.text);
                acc.urls.push(text);
                acc.text = "";

                return acc;
            }

            acc.text += ` ${text} `;

            return acc;
        },
        { array: [], urls: [], text: "" }
    );

    if (texts.text) texts.array.push(texts.text);

    const duplicateLinksCount = {};

    const links = texts.urls.map((url) => {
        if (!duplicateLinksCount[url]) duplicateLinksCount[url] = 0;

        duplicateLinksCount[url] += 1;

        const key = `${duplicateLinksCount[url]}_${url}`;

        return (
            <a href={url} key={key}>
                {url}
            </a>
        );
    });

    const merged = [];

    for (let i = 0; i < texts.array.length; i += 1) {
        merged.push(texts.array[i]);
        if (links[i]) merged.push(links[i]);
    }

    return merged;
};

export default replaceURL
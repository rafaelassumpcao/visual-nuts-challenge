export const getNumberOfCountries = (data) => {
    return data.length;
}

export const findAllCountriesWithOfficialLangBy = (lang) => data => {
    let maxEl = []
    const regex = lang instanceof RegExp ? lang : new RegExp(lang)
    const filteredCountries = data.filter(c => regex.test(c.languages))
    const max = Math.max(...filteredCountries.map(i => i.languages.length));
    for (const item of filteredCountries) {
        if (item.languages.length == max) {
            maxEl.push(item)
        }
    }
    return maxEl;
}

export const findCountryWithHighestNumberOfLang = (data) => {
    const max = Math.max(...data.map(i => i.languages.length));
    const country = [];
    for (const item of data) {
        if (item.languages.length === max) {
            country.push(item)
        }
    }
    return country;
}

export const findTheMostCommonOfficialLangOfAllCountries = (data) => {
    let max = -Infinity;
    const result = data.reduce((c, n) => {
        const langs = n.languages;
        for (let lang of langs) {
            if (!c[lang]) {
                c[lang] = 1
            } else {
                c[lang] += 1
            }
            if (c[lang] > max) {
                max = c[lang]
            }
        }
        return c;
    }, {})
    return Object.fromEntries(Object.entries(result).filter(([k, v]) => v === max))
}

export const excercise2Solution = (data) => {
    console.log("- returns the number of countries in the world");
    {
        const result = getNumberOfCountries(data)
        console.log("Result: ", result)
    }
    console.log('---------------------------------')
    console.log("- finds the country with the most official languages, where they officially speak German");
    {
        const result = findAllCountriesWithOfficialLangBy('de')(data)
        console.log("Result: ", result)
    }

    console.log('---------------------------------')
    console.log("- to find the country with the highest number of official languages");
    {
        const result = findCountryWithHighestNumberOfLang(data)
        console.log("Result: ", result)
    }

    console.log('---------------------------------')
    console.log("- to find the most common official language(s), of all countries.");
    {
        const result = findTheMostCommonOfficialLangOfAllCountries(data)
        console.log("Result: ", result)
    }


}

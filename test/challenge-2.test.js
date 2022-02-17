import { expect, test, describe } from "@jest/globals"
import {
    data,
    getNumberOfCountries,
    findAllCountriesWithOfficialLangBy,
    findCountryWithHighestNumberOfLang,
    findTheMostCommonOfficialLangOfAllCountries
} from "../src/challenge-2.js"

const data = [
    {
        country: "US",
        languages: ["en"]
    },
    {
        country: "BE",
        languages: ["nl", "fr", "de"]
    },
    {
        country: "EE",
        languages: ["est", "ru", "en"]
    },
    {
        country: "NL",
        languages: ["nl"]
    },
    {
        country: "DE",
        languages: ["de"]
    },
    {
        country: "ES",
        languages: ["es"]
    }
]

describe('Excercise 2', () => {

    test('#getNumberOfCountries should return the length of data countries', () => {
        const result = getNumberOfCountries(data)
        const expected = 6

        expect(result).toEqual(expected)
    })

    test('#findAllCountriesWithOfficialLangBy should the highests which speaks german', () => {
        const result = findAllCountriesWithOfficialLangBy('de')(data);
        const expected = [{ country: 'BE', languages: ['nl', 'fr', 'de'] }]
        expect(result).toStrictEqual(expected)
    })

    test('#findCountryWithHighestNumberOfLang should return all countries that have most official langs', () => {
        const result = findCountryWithHighestNumberOfLang(data)
        const expected = [
            { country: 'BE', languages: ['nl', 'fr', 'de'] },
            { country: 'EE', languages: ['est', 'ru', 'en'] }
        ]

        expect(result).toStrictEqual(expected)
    })

    test('#findTheMostCommonOfficialLangOfAllCountries should return all the highest count for langs', () => {
        const result = findTheMostCommonOfficialLangOfAllCountries(data)
        const expected = { en: 2, nl: 2, de: 2 }

        expect(result).toStrictEqual(expected)
    })

})

import { Instrument } from "../types/strategy";

const instruments: Instrument[] = [
    {
        id: '1',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: 5, // 5% price growth
        price: 100,
        marketCapRank: 7, // Top 15%
        avgDailyTransactionValue: 250000000, // 250 million
    },
    {
        id: '2',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: -2, // -2% price growth
        price: 95,
        marketCapRank: 22, // Top 5%
        avgDailyTransactionValue: 400000000, // 400 million
    },
    {
        id: '3',
        exchange: 'BSE',
        instrumentType: 'ETFs',
        priceGrowth: 3, // 3% price growth
        price: 110,
        marketCapRank: 19, // Top 20%
        avgDailyTransactionValue: 350000000, // 350 million
    },
    {
        id: '4',
        exchange: 'NYSE',
        instrumentType: 'EQUITY',
        priceGrowth: 13, // 10% price growth
        price: 120,
        marketCapRank: 16, // Top 10%
        avgDailyTransactionValue: 500000000, // 500 million
    },
    {
        id: '5',
        exchange: 'BSE',
        instrumentType: 'EQUITY',
        priceGrowth: 14, // 5% price growth
        price: 186,
        marketCapRank: 24, // Top 15%
        avgDailyTransactionValue: 256000000, // 250 million
    },
    {
        id: '6',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: -2, // -2% price growth
        price: 232,
        marketCapRank: 17, // Top 5%
        avgDailyTransactionValue: 350500000, // 400 million
    },
    {
        id: '7',
        exchange: 'BSE',
        instrumentType: 'BOND',
        priceGrowth: 3, // 3% price growth
        price: 101,
        marketCapRank: 1, // Top 20%
        avgDailyTransactionValue: 310000000, // 350 million
    },
    {
        id: '8',
        exchange: 'NYSE',
        instrumentType: 'EQUITY',
        priceGrowth: 18, // 10% price growth
        price: 165,
        marketCapRank: 13, // Top 10%
        avgDailyTransactionValue: 500000000, // 500 million
    },
    {
        id: '9',
        exchange: 'NSE',
        instrumentType: 'BOND',
        priceGrowth: -5, // 5% price growth
        price: 43,
        marketCapRank: 23, // Top 15%
        avgDailyTransactionValue: 750000000, // 250 million
    },
    {
        id: '10',
        exchange: 'BSE',
        instrumentType: 'EQUITY',
        priceGrowth: -2, // -2% price growth
        price: 95,
        marketCapRank: 10, // Top 5%
        avgDailyTransactionValue: 155000000, // 400 million
    },
    {
        id: '11',
        exchange: 'NSE',
        instrumentType: 'ETFs',
        priceGrowth: 3, // 3% price growth
        price: 65,
        marketCapRank: 20, // Top 20%
        avgDailyTransactionValue: 350560000, // 350 million
    },
    {
        id: '12',
        exchange: 'NYSE',
        instrumentType: 'EQUITY',
        priceGrowth: 10, // 10% price growth
        price: 120,
        marketCapRank: 12, // Top 10%
        avgDailyTransactionValue: 508000000, // 500 million
    },
    {
        id: '13',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: 21, // 5% price growth
        price: 100,
        marketCapRank: 8, // Top 15%
        avgDailyTransactionValue: 605000000, // 250 million
    },
    {
        id: '14',
        exchange: 'BSE',
        instrumentType: 'EQUITY',
        priceGrowth: -2, // -2% price growth
        price: 95,
        marketCapRank: 14, // Top 5%
        avgDailyTransactionValue: 390000600, // 400 million
    },
    {
        id: '15',
        exchange: 'BSE',
        instrumentType: 'ETFs',
        priceGrowth: 23, // 3% price growth
        price: 143,
        marketCapRank: 15, // Top 20%
        avgDailyTransactionValue: 390000000, // 350 million
    },
    {
        id: '16',
        exchange: 'NYSE',
        instrumentType: 'EQUITY',
        priceGrowth: 16, // 10% price growth
        price: 12,
        marketCapRank: 4, // Top 10%
        avgDailyTransactionValue: 256000000, // 500 million
    },
    {
        id: '17',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: 19, // 5% price growth
        price: 108,
        marketCapRank: 6, // Top 15%
        avgDailyTransactionValue: 280000000, // 250 million
    },
    {
        id: '18',
        exchange: 'NSE',
        instrumentType: 'BOND',
        priceGrowth: -2, // -2% price growth
        price: 9,
        marketCapRank: 18, // Top 5%
        avgDailyTransactionValue: 470000000, // 400 million
    },
    {
        id: '19',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: -13, // 3% price growth
        price: 11,
        marketCapRank: 3, // Top 20%
        avgDailyTransactionValue: 300000000, // 350 million
    },
    {
        id: '20',
        exchange: 'NYSE',
        instrumentType: 'BOND',
        priceGrowth: 13, // 10% price growth
        price: 128,
        marketCapRank: 11, // Top 10%
        avgDailyTransactionValue: 200000000, // 500 million
    },
    {
        id: '21',
        exchange: 'BSE',
        instrumentType: 'EQUITY',
        priceGrowth: 22, // 5% price growth
        price: 167,
        marketCapRank: 21, // Top 15%
        avgDailyTransactionValue: 560000000, // 250 million
    },
    {
        id: '22',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: -2, // -2% price growth
        price: 209,
        marketCapRank: 2, // Top 5%
        avgDailyTransactionValue: 670008000, // 400 million
    },
    {
        id: '23',
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: 7, // 3% price growth
        price: 110,
        marketCapRank: 9, // Top 20%
        avgDailyTransactionValue: 350000000, // 350 million
    },
    {
        id: '24',
        exchange: 'NYSE',
        instrumentType: 'EQUITY',
        priceGrowth: 10, // 10% price growth
        price: 10,
        marketCapRank: 5, // Top 10%
        avgDailyTransactionValue: 500000000, // 500 million
    },
];

export { instruments }
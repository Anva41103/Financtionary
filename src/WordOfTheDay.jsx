import React, { useState, useEffect } from 'react';

// Define an array of words with their meanings
const words = [
    { word: "Amortization", meaning: "The spreading out of capital expenses for intangible assets over a specific duration." },
    { word: "Angel Investor", meaning: "An affluent individual who provides capital for a business start-up, usually in exchange for convertible debt or ownership equity." },
    { word: "Annuity", meaning: "A financial product that pays out a fixed stream of payments to an individual, primarily used as an income stream for retirees." },
    { word: "Arbitrage", meaning: "The simultaneous purchase and sale of an asset to profit from an imbalance in the price." },
    { word: "Asset", meaning: "Anything owned by an individual or entity that has economic value." },
    { word: "Audit", meaning: "An official inspection of an individual's or organization's accounts, typically by an independent body." },
    { word: "Balance Sheet", meaning: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time." },
    { word: "Bear Market", meaning: "A market condition where prices are falling or expected to fall." },
    { word: "Blue Chip Stocks", meaning: "Shares in large, well-known companies with a solid history of financial performance." },
    { word: "Bond", meaning: "A fixed-income instrument representing a loan made by an investor to a borrower." },
    { word: "Budget", meaning: "An estimate of income and expenditure for a set period." },
    { word: "Bull Market", meaning: "A market condition where prices are rising or expected to rise." },
    { word: "Capital", meaning: "Financial assets or the financial value of assets, such as funds held in deposit accounts." },
    { word: "Capital Gain", meaning: "The profit from the sale of an asset or investment." },
    { word: "Cash Flow Statement", meaning: "A financial statement that shows how changes in balance sheet accounts and income affect cash and cash equivalents." },
    { word: "Credit", meaning: "An agreement where a borrower receives something of value now and agrees to repay the lender at a later date." },
    { word: "Credit Default Swap (CDS)", meaning: "A financial derivative that allows an investor to swap or offset their credit risk with that of another investor." },
    { word: "Credit Rating", meaning: "An assessment of the creditworthiness of a borrower in general terms or with respect to a particular debt or financial obligation." },
    { word: "Credit Score", meaning: "A numerical expression based on a level analysis of a person's credit files to represent the creditworthiness of an individual." },
    { word: "Custodian", meaning: "A financial institution that holds customers' securities for safekeeping to prevent them from being stolen or lost." },
    { word: "Debit", meaning: "An accounting entry that results in either an increase in assets or a decrease in liabilities on a company's balance sheet." },
    { word: "Deflation", meaning: "The reduction of the general level of prices in an economy." },
    { word: "Depreciation", meaning: "The reduction in the value of an asset over time, particularly in regards to tangible assets." },
    { word: "Derivatives", meaning: "Financial contracts whose value is derived from the value of an underlying asset." },
    { word: "Diversification", meaning: "The strategy of spreading investments across various financial instruments to reduce risk." },
    { word: "Dividend", meaning: "A portion of a company's earnings distributed to shareholders." },
    { word: "Emerging Markets", meaning: "Nations with social or business activities in the process of rapid growth and industrialization." },
    { word: "Endowment", meaning: "A financial asset, in the form of a donation made to a non-profit group or institution." },
    { word: "Equity", meaning: "The ownership interest in an asset or business, calculated as the difference between assets and liabilities." },
    { word: "Exchange-Traded Fund (ETF)", meaning: "A type of investment fund traded on stock exchanges, much like stocks." },
    { word: "Expense", meaning: "The economic costs a business incurs through its operations to earn revenue." },
    { word: "Futures", meaning: "Financial contracts obligating the buyer to purchase an asset or the seller to sell an asset at a predetermined future date and price." },
    { word: "Financial Engineering", meaning: "The use of mathematical techniques to solve financial problems or create financial products." },
    { word: "Financial Statement", meaning: "A formal record of the financial activities and position of a business, person, or entity." },
    { word: "Fiscal Policy", meaning: "Government policies regarding taxation and spending to influence the economy." },
    { word: "Gross Domestic Product (GDP)", meaning: "The total value of all goods and services produced in a country over a specific time period." },
    { word: "Hedge Fund", meaning: "An investment fund that employs various strategies to earn active returns for its investors." },
    { word: "Hedging", meaning: "Making an investment to reduce the risk of adverse price movements in an asset." },
    { word: "Income Statement", meaning: "A financial statement that reports a company's financial performance over a specific accounting period." },
    { word: "Inflation", meaning: "The rate at which the general level of prices for goods and services is rising." },
    { word: "Initial Public Offering (IPO)", meaning: "The process of offering shares of a private corporation to the public in a new stock issuance." },
    { word: "Interest Rate", meaning: "The cost of borrowing money expressed as a percentage of the amount borrowed." },
    { word: "Interest Rate Swap", meaning: "A financial derivative instrument in which two parties exchange their respective interest rate obligations." },
    { word: "Investment", meaning: "The allocation of resources, usually money, with the expectation of generating an income or profit." },
    { word: "Liability", meaning: "Financial obligations or debts owed by an individual or entity." },
    { word: "Leverage", meaning: "The use of borrowed capital (debt) to increase the potential return of an investment." },
    { word: "Liquidity", meaning: "The ease with which an asset can be converted into cash." },
    { word: "Loss", meaning: "When expenses exceed revenues, resulting in negative profit." },
    { word: "Margin", meaning: "The difference between the cost of a product and its selling price." },
    { word: "Monetary Policy", meaning: "The process by which the monetary authority of a country controls the supply of money." },
    { word: "Mutual Fund", meaning: "An investment vehicle made up of a pool of funds collected from many investors for the purpose of investing in securities." },
    { word: "Net Worth", meaning: "The total assets minus total outside liabilities of an individual or a company." },
    { word: "Options", meaning: "Contracts that give the holder the right, but not the obligation, to buy or sell an asset at a set price on or before a given date." },
    { word: "Pension", meaning: "A retirement plan that requires an employer to make contributions to a pool of funds set aside for a worker's future benefit." },
    { word: "Portfolio", meaning: "A range of investments held by a person or organization." },
    { word: "Principal", meaning: "The amount of money that is borrowed, excluding interest." },
    { word: "Profit", meaning: "The financial gain realized when the amount of revenue gained exceeds the expenses." },
    { word: "Quantitative Easing", meaning: "A monetary policy where a central bank buys securities to increase the money supply and encourage lending and investment." },
    { word: "Real Estate Investment Trust (REIT)", meaning: "A company that owns, operates, or finances income-producing real estate." },
    { word: "Revenue", meaning: "The total income generated by the sale of goods or services related to the company's primary operations." },
    { word: "Risk", meaning: "The potential for losing something of value or the uncertainty of returns." },
    { word: "Secondary Market", meaning: "The market where investors purchase securities or assets from other investors, rather than from issuing companies directly." },
    { word: "Securities", meaning: "Financial instruments that hold some type of monetary value, such as stocks, bonds, and options." },
    { word: "Sovereign Debt", meaning: "The amount of money that a country's government has borrowed." },
    { word: "Stock", meaning: "A type of security representing ownership in a corporation and a claim on part of the company’s assets and earnings." },
    { word: "Syndicate", meaning: "A group of banks or underwriters that work together to sell new issues of securities to the public." },
    { word: "Treasury", meaning: "Government bonds or other forms of government debt issued by the Treasury Department." },
    { word: "Underwriting", meaning: "The process by which investment bankers raise investment capital from investors on behalf of corporations and governments that are issuing securities." },
    { word: "Venture Capital", meaning: "Financing provided by investors to startup companies and small businesses with perceived long-term growth potential." },
    { word: "Yield", meaning: "The income return on an investment, such as the interest or dividends received." }
];

// Function to get today's date in YYYY-MM-DD format
// function getFormattedDate() {
//     const today = new Date();
//     const year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();

//     // Pad single digit months and days with a leading zero
//     if (month < 10) {
//         month = '0' + month;
//     }
//     if (day < 10) {
//         day = '0' + day;
//     }

//     return `${year}-${month}-${day}`;
// }

// // Function to select a word based on the current date
// function selectWordOfTheDay() {
//     const formattedDate = getFormattedDate();
//     // Use the date to determine the index of the word (you can modify this logic as needed)
//     const index = formattedDate.length % words.length;
//     return words[index];
// }

// const WordOfTheDay = () => {
//     const [wordOfTheDay, setWordOfTheDay] = useState(selectWordOfTheDay());
//     const [showMeaning, setShowMeaning] = useState(false);

//     useEffect(() => {
//         // Update the word of the day every 24 hours
//         const intervalId = setInterval(() => {
//             setWordOfTheDay(selectWordOfTheDay());
//         }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

//         return () => clearInterval(intervalId); // Clean up interval on component unmount
//     }, []);

//     const toggleContent = () => {
//         setShowMeaning(!showMeaning);
//         if (!showMeaning) {
//             setWordOfTheDay(selectWordOfTheDay());
//         }
//     };

function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Pad single digit months and days with a leading zero
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    return `${year}-${month}-${day}`;
}

// Function to select a word based on the current date
function selectWordOfTheDay() {
    const formattedDate = getFormattedDate();
    // Use the date to determine the index of the word
    const index = new Date().getDate() % words.length;
    return words[index];
}

const WordOfTheDay = () => {
    const [wordOfTheDay, setWordOfTheDay] = useState(selectWordOfTheDay());
    const [showMeaning, setShowMeaning] = useState(false);

    useEffect(() => {
        // Update the word of the day at midnight
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);

        const timeToMidnight = midnight.getTime() - now.getTime();

        const intervalId = setTimeout(() => {
            setWordOfTheDay(selectWordOfTheDay());
        }, timeToMidnight);

        return () => clearTimeout(intervalId); // Clean up timeout on component unmount
    }, [wordOfTheDay]);

    const toggleContent = () => {
        setShowMeaning(!showMeaning);
    };


    return (
        // <>
        // {WordOfTheDay}
        // </>
        <div className="switch-container">
            <button className="btn" id="toggleButton" onMouseOver={toggleContent}>
                <span className="btn-text-one">WOTD</span>
                <span className="btn-text-two"><h3 id="wordTitle">{wordOfTheDay.word}</h3></span>
            </button>
            {showMeaning && (
                <div className="switch-content" id="meaningContent">
                    {/* <h2 id="wordTitle">{wordOfTheDay.word}</h2> */}
                    <p id="wordMeaning">{wordOfTheDay.meaning}</p>
                </div>
            )}
        </div>
        //   {/* <div className="switch-container">
        //                 <button className="btn" id="toggleButton">
        //                     <span className="btn-text-one">WOTD</span>
        //                     <span className="btn-text-two"><h3 id="wordTitle">{WordOfTheDay.word}</h3></span>
        //                 </button>
        //                 <div className="switch-content" id="meaningContent">
        //                     <p id="wordMeaning"> {WordOfTheDay.meaning}</p>
        //                 </div>
        //             </div> */}
    );
};

export default WordOfTheDay;

const BASE_URL =
  "https://bankofgeorgia.ge/api/currencies/convert/USD/GEL";

export const convertGelToUsd = async (amountGel) => {
  try {
    const response = await fetch(
      `${BASE_URL}?amountFrom=${amountGel}`
    );

    if (!response.ok) {
      throw new Error("Currency conversion failed");
    }

    const data = await response.json();

    return data.amountTo;
  } catch (error) {
    console.error("Currency API error:", error);
    return null;
  }
};

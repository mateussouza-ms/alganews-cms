import { PricePreview, WordCounter, Wrapper } from "./styles";

interface WordPriceCounterProps {
  wordsCount: number;
  pricePerWord: number;
}

export function WordPriceCounter({
  wordsCount,
  pricePerWord,
}: WordPriceCounterProps) {
  if (wordsCount < 0) {
    throw Error("A quantidade de palavras não pode ser negativa");
  }

  return (
    <Wrapper>
      <WordCounter>
        {wordsCount} {wordsCount === 1 ? "palavra" : "palavras"}
      </WordCounter>
      <PricePreview>
        {(wordsCount * pricePerWord).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })}
      </PricePreview>
    </Wrapper>
  );
}

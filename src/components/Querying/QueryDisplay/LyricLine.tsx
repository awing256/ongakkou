import {useKuromoji} from "../../../hooks/useKuromoji.ts";


interface FuriganaTextProps {
    text: string;
    className?: string;
}

export const FuriganaText = ({ text, className }: FuriganaTextProps) => {
    const tokenizer = useKuromoji()

    if (!tokenizer) {
        return <span className={className}>{text}</span>; // Fallback while loading
    }

    const tokens = tokenizer.tokenize(text);

    return (
        <span className={className}>
      {tokens.map((token, i) => {
          // Skip furigana for non-kanji or punctuation
          if (!token.reading || token.reading === token.surface_form) {
              return token.surface_form;
          }

          return (
              <ruby key={i}>
                  {token.surface_form}
                  <rt>{token.reading}</rt>
              </ruby>
          );
      })}
    </span>
    );
};
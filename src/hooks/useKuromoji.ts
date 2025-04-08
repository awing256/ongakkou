import { useEffect, useState } from "react";
import {IpadicFeatures, Tokenizer} from "kuromoji";

(window as any).process = { env: {} };

export const useKuromoji = () => {
    const [tokenizer, setTokenizer] = useState<Tokenizer<IpadicFeatures>>();

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("kuromoji").then((kuromoji) => {
                kuromoji
                    .builder({ dicPath: "/dict" }) // Path to public/dict
                    .build((err, tokenizer) => {
                        if (err) {
                            console.error("Kuromoji error:", err);
                        } else {
                            setTokenizer(tokenizer);
                        }
                    });
            });
        }
    }, [])

    return tokenizer;
}
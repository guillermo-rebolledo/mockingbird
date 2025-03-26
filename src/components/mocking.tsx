import { useRef, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { Copy, Check } from "lucide-react";

export function Mocking() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showImg, setShowImg] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [mockedText, setMockedText] = useState("");
  const [copied, setCopied] = useState(false);

  const mock = () => {
    setMockedText(inputValue.replaceAll(/[aeiou]/gi, "i"));
    setShowImg(true);
  };

  const reset = () => {
    setMockedText("");
    setInputValue("");
    setShowImg(false);
    setCopied(false);
    textAreaRef.current?.focus();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mockedText);
      setCopied(true);
      toast.success("🦜 Mocked text copied to clipboard 🦜");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="mocking-input" className="text-sm text-foreground">
          Enter the text you want to mock
        </label>
        <Textarea
          ref={textAreaRef}
          id="mocking-input"
          placeholder="Enter your text here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={mock}
          disabled={!inputValue}
        >
          Mock
        </Button>
        {mockedText && (
          <div className="flex gap-2">
            <Button
              variant="destructive"
              className="w-full basis-2/3"
              onClick={reset}
            >
              Reset
            </Button>
            <Button
              variant={copied ? "success" : "outline"}
              className="w-full basis-1/3"
              onClick={copyToClipboard}
            >
              {copied ? <Check /> : <Copy />}
            </Button>
          </div>
        )}
      </div>

      {mockedText && (
        <p className="text-lg text-foreground italic text-center">{`"${mockedText}"`}</p>
      )}
      {showImg && (
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/mock.gif"
            alt="mocking"
            width={256}
            height={256}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}

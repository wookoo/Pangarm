import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
// interface PrecedentListSearchBarProps {
//   content: string;
// }

// export default function PrecedentListSearchBar({ content }: PrecedentListSearchBarProps) {

export default function PrecedentListSearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(""); // textarea의 내용을 관리하는 state

  return (
    <form
      className={`mt-4 flex w-full items-center justify-between rounded-md border border-lightgray bg-lightblue p-4 text-2xl text-navy transition-all duration-300 ease-in-out ${isFocused ? "h-48" : "h-16"}`}
      // Form의 높이를 조절할 클래스를 조건부로 적용
    >
      <textarea
        className="flex-1 resize-none items-center bg-transparent text-navy transition-all duration-300 ease-in-out"
        style={{
          margin: "1rem", // 직접 마진 적용
          height: isFocused && text ? "12rem" : "4rem", // 직접 높이 조절
          lineHeight: isFocused || text ? "normal" : "4rem", // line-height 조절
        }}
        placeholder="검색어를 입력해주세요..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setText(e.target.value)}
      />
      <IoSearchOutline />
    </form>
  );
}

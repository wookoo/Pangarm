import { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

import { SearchKeywordExampleList } from "@/constants";
import CategoryNewsList from "@/components/News/CategoryNewsList";
import CategoryButton from "@/components/News/CategoryButton";

export default function CategoryNews() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [keyword, setKeyword] = useState("");

  const filteredKeywordList = SearchKeywordExampleList.filter((element) =>
    element.includes(keyword),
  );

  return (
    <div>
      {/* Header */}
      <div className="font-TitleBold text-2xl">
        <span className="text-navy">카테고리</span>
        <span> 별 뉴스</span>
      </div>

      <hr className="my-3 border" />

      {/* Category */}
      <div className="relative pr-10">
        <div
          className={`relative flex gap-3 ${showMore ? "overflow-x-hidden" : "flex-wrap"}`}
        >
          {/* Category Search */}
          <div className="relative mr-4 flex-shrink-0">
            <input
              type="text"
              className="w-auto rounded-md border px-2 py-1 pr-8 focus:outline-none"
              placeholder="카테고리 검색"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <BiSearch
              size={20}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 transform"
            />
          </div>

          {/* Category ButtonList */}
          {filteredKeywordList.map((keyword, index) => (
            <CategoryButton
              key={index}
              keyword={keyword}
              isSelected={keyword === selectedCategory}
              onSelect={setSelectedCategory}
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-xl border-2 border-navy"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </button>
      </div>

      <CategoryNewsList category={selectedCategory} />
    </div>
  );
}

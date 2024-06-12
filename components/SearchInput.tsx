import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setFilter, setSearchItem } from "../redux/slices/products";

interface SearchInputProp {
  placeholder: string;
}

const SearchInput: FC<SearchInputProp> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim().length !== 0) {
      dispatch(setSearchItem(searchValue));
      dispatch(setFilter(searchValue));
      setSearchValue("");
      if (router.pathname !== "/products") {
        router.push("/products");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          className="inline-block h-8 text-[14px] leading-[32px] text-gray bg-light w-full pr-[10px] pl-10 rounded-[4px] lg:leading-[48px] lg:h-12 focus:outline-0"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <button>
          <BsSearch className="absolute top-1/2 translate-y-[-50%] left-2 fill-[#8c8c8c]" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

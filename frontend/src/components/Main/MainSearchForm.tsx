import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormReset,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";

import { GrRefresh } from "react-icons/gr";

import { useSituationStore } from "@/stores/situationStore";

type Input = {
  situation: string;
};

interface MainSearchFormProps {
  register: UseFormRegister<Input>;
  handleSubmit: UseFormHandleSubmit<Input>;
  reset: UseFormReset<Input>;
  setValue?: UseFormSetValue<Input>;
  watch: UseFormWatch<Input>;
  isValid: boolean;
  selectedSituation?: string;
}

export default function MainSearchForm({
  register,
  handleSubmit,
  reset,
  watch,
  setValue,
  isValid,
  selectedSituation,
}: MainSearchFormProps) {
  const watchSituation = watch("situation", "");
  const setSituation = useSituationStore((state) => state.setSituation);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Input> = (data) => {
    setSituation(data.situation);
    navigate("/precedent-search");
  };

  useEffect(() => {
    if (setValue && selectedSituation) {
      setValue("situation", selectedSituation);
    }
  }, [selectedSituation, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <textarea
          {...register("situation", { required: "내용을 입력해주세요." })}
          cols={100}
          rows={12}
          className="w-full resize-none rounded-lg border border-lightgray bg-lightblue p-12"
          placeholder="상황을 250자 이내로 입력해주세요."
          maxLength={250}
        />
        <div
          className="absolute right-3 top-3.5 flex cursor-pointer flex-col items-center text-gray hover:text-black"
          onClick={() => reset()}
        >
          <GrRefresh size={15} />
          <p className="text-[8px]">다시쓰기</p>
        </div>

        <div className="absolute bottom-3.5 right-3 text-lightgray">
          {watchSituation.length}/250
        </div>
      </div>
      <input
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-navy py-4 font-SubTitle text-xl font-bold text-white shadow-lg shadow-lightgray disabled:cursor-default disabled:opacity-50"
        value="판례 찾기"
        disabled={!isValid}
      />
    </form>
  );
}

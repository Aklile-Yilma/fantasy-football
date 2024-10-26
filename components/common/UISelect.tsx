import { customTheme } from "@/config/select-config"
import Select from "react-select"

interface UISelectProps {
    options: any[],
    handleSelectedOption: (type: string, value: any) => void,
    placeholder?: string,
    width: string,
    label?: string,
    type: string,
    value: any
}

const UISelect = ({options, handleSelectedOption, placeholder, width, label, type, value}: UISelectProps) => {

    const formattedOptions = options?.map((option: any) => ({
        label: option,
        value: option
    }));

    return <div className="flex gap-2 items-center">
        <label className="capitalize text-base">{label}</label>
        <Select 
            theme={customTheme}
            className={width}
            id="game-type"
            options={formattedOptions ? formattedOptions : []}
            onChange={(selectedOption: any) => handleSelectedOption(type, selectedOption?.value)}
            placeholder={placeholder}
            value={formattedOptions?.find((option) => option.value === (value)) || null}
    />
</div>
}


export default UISelect;
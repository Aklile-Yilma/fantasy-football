import { customTheme } from "@/config/select-config"
import Select from "react-select"

interface UISelectProps {
    options: any[],
    handleSelectedOption: (type: string, value: any) => void,
    placeholder?: string,
    width: string,
    label?: string,
    defaultValue: any,
    type: string,
    value: any
}

const UISelect = ({options, handleSelectedOption, placeholder, width, label, defaultValue, type, value}: UISelectProps) => {

    return <div className="flex gap-2 items-center">
        <label className="capitalize text-base">{label}</label>
        <Select 
            theme={customTheme}
            className={width}
            id="game-type"
            options={options ? options?.map((key: string) => ({label: key, value: key})) : []}
            onChange={(selectedOption: any) => handleSelectedOption(type, selectedOption?.value)}
            placeholder={placeholder}
            defaultValue={{label: defaultValue, value: defaultValue}}
            value={value}
    />
</div>
}


export default UISelect;
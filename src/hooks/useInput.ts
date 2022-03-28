import React, {ChangeEvent} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = React.useState('')
    const [isDirty, setIsDirty] = React.useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}
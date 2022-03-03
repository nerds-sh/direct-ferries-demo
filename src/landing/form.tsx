import React from "react";
import {Submit} from "landing/shared/submit";
import {Type} from "landing/shared/type";
import {ReturnTrip} from "landing/return-trip";
import {OneWay} from "./one-way";

let formType = 2

export const Form = () => <React.Fragment>
    <Type />
    {formType == 1 ? <ReturnTrip/> : <OneWay /> }
    <Submit />
</React.Fragment>
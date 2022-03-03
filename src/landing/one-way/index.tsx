import {Search} from "landing/shared/search";
import React from "react";
import {Details} from "landing/shared/details";
import {Currency} from "landing/shared/currency";
import {Dates} from "landing/one-way/dates";

export const OneWay = () => <React.Fragment>
    <Search />
    <Dates />
    <Details />
    <Currency />
</React.Fragment>
import {Search} from "landing/shared/search";
import React from "react";
import {Details} from "landing/shared/details";
import {DifferentReturn} from "landing/return-trip/different-return";
import {Currency} from "landing/shared/currency";
import {Dates} from "landing/return-trip/dates";

export const ReturnTrip = () => <React.Fragment>
    <Search />
    <Dates />
    <Details />
    <DifferentReturn />
    <Currency />
</React.Fragment>
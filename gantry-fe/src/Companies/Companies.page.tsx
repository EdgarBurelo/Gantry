import React from "react";
import { Page } from '../Components/Page/Page'
import { CompanyList } from "./CompanyList/CompanyList";
import {useCompanyState} from "./Hooks/useCompanyState";
import {Header} from "../Components/Header/Header";
import {SearchInput} from "../Components/SearchInput/SearchInput";
import {DropdownFilter} from "../Components/DropdownFilter/DropdownFilter";
import {RequestHandler} from "../Components/RequestHandler/RequestHandler";

export const Companies: React.FC = () => {
    const {
        filteredCompanies,
        specialities,
        setSearchFilter,
        addSpecialityFromFilter,
        removeSpecialityFromFilter,
        errors,
        loading
    } = useCompanyState();
    const searchOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const filterString: string = event.target.value.toString();
        setSearchFilter(filterString)
    };

    const checkBoxOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const isChecked: boolean = event.target.checked;
        const speciality: string = event.target.value

        if (isChecked) {
            addSpecialityFromFilter(speciality)
        } else {
            removeSpecialityFromFilter(speciality)
        }
    };

    return (
        <Page>
            <RequestHandler loading={loading} error={errors} >
                <Header>Companies</Header>
                <SearchInput
                    onChange={searchOnChange}
                    placeholder="Company Name..."
                    type="text"
                />
                <DropdownFilter
                    filterName="Speciality options"
                    options={specialities} checkboxOnChange={checkBoxOnChange}
                />
                <CompanyList companies={filteredCompanies} />
            </RequestHandler>
        </Page>
    );
};

import {useEffect, useState} from 'react';
import {useGetCompanies} from "./useGetCompanies";
import {Company} from "../Company.interface";
import {useGetSpecialities} from "./useGetSpecialities";

export const useCompanyState = () => {
    const {companies, companiesError, companiesLoading} = useGetCompanies();
    const {specialities, specialitiesError, specialitiesLoading} = useGetSpecialities();

    const initialFilteredSpecialities: string[] = [];
    const [filteredCompanies, setFilteredCompanies] = useState(companies);
    const [searchFilter, setSearchFilter] = useState('');
    const [filteredSpecialities, setFilteredSpecialities] = useState(initialFilteredSpecialities);


    useEffect(() => {
        if (!companiesLoading && !companiesError) {
            setFilteredCompanies(filterCompaniesByName(companies, searchFilter));
        }
    }, [companiesLoading, companiesError, companies, setFilteredCompanies, searchFilter]);

    useEffect(() => {
        const filteredCompaniesBySpeciality = filterCompaniesBySpeciality(companies, filteredSpecialities);
        setFilteredCompanies(filterCompaniesByName(filteredCompaniesBySpeciality, searchFilter));
    }, [searchFilter, filteredSpecialities, companies]);

    const removeSpecialityFromFilter = (speciality:string): void => {
        setFilteredSpecialities(filteredSpecialities.filter((filterSpeciality:string) => filterSpeciality !== speciality));
    };

    const addSpecialityFromFilter = (speciality: string): void => {
        setFilteredSpecialities([...filteredSpecialities, speciality]);
    }

    return {
        specialities,
        filteredCompanies: filteredCompanies,
        setSearchFilter,
        removeSpecialityFromFilter,
        addSpecialityFromFilter,
        errors: companiesError || specialitiesError,
        loading: companiesLoading || specialitiesLoading,
    }
}

function filterCompaniesByName(companies: Company[], filterString: string): Company[] {
    return filterString.length > 0
        ? companies.filter((company: Company) => {
            return company.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1;
        })
        : companies;
}

function filterCompaniesBySpeciality(companies: Company[], filteredSpecialities: string[]): Company[] {
    return filteredSpecialities.length > 0
        ? companies.filter((company: Company) => {
            return filteredSpecialities.includes(company.specialty);
        })
        : companies;
}
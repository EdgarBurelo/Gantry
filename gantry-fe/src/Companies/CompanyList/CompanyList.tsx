import React from "react";
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { Company } from "../Company.interface";
import './CompanyList.scss'

type CompanyListProps = {
    companies: Company[]
}

export const CompanyList: React.FC<CompanyListProps> = ({ companies }: CompanyListProps) => {
    return (
        <div className="companyList">
            {companies.map((company: Company) => (
                <CompanyItem key={company.id} company={company} />
            ))}
        </div>
    );
};
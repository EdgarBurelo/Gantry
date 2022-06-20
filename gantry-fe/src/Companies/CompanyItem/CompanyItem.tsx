import React from "react";
import { Company } from "../Company.interface";
import './CompanyItem.scss';

type CompanyItemProps = {
    company: Company
}

export const CompanyItem: React.FC<CompanyItemProps> = ({ company }: CompanyItemProps) => {
  return (
      <div className="companyItem">
          <div>
            <img alt="Logo" src={company.logo} />
          </div>
          <div className="companyRow">
            <div>
                <h3>{company.name}</h3>
                <p>City: {company.city}</p>
            </div>
            <p>Speciality: {company.specialty}</p>
          </div>
      </div>
  );
};
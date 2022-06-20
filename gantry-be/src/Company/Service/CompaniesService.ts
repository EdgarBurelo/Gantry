import { Service } from "typedi";
import { CompanyRepository } from "../Repository/CompanyRepository";
import { CompanyType } from "../Type/CompanyType";
import {SpecialityType} from "../Type/SpecialityType";

@Service()
export class CompaniesService {
    constructor(
        private readonly companyRepository: CompanyRepository
    ) {}

    async getAll(): Promise<CompanyType[]>
    {
        return this.companyRepository.getAll();
    }

    async getSpecialities(): Promise<SpecialityType[]>
    {
        const companies: CompanyType[] = await this.companyRepository.getAll();

        return this.filterCompaniesSpecialities(companies);
    }

    private filterCompaniesSpecialities(companies: CompanyType[]): SpecialityType[] {
        const specialities = companies.map((company: CompanyType) => {
            return company.specialty;
        });

        const filterSpecialityNames = specialities.filter((specialityName: string, index: number, self: string[]) => {
           return self.indexOf(specialityName) === index
        });

        return filterSpecialityNames.map((specialityName: string) => {
            return { name: specialityName };
        });
    }
}

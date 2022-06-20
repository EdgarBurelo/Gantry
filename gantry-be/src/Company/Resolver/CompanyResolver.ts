import {Service} from "typedi";
import { Resolver, Query } from 'type-graphql';

import { CompanyType } from '../Type/CompanyType'
import { CompaniesService } from '../Service/CompaniesService';
import {SpecialityType} from "../Type/SpecialityType";

@Service()
@Resolver(of => CompanyType)
export class CompanyResolver {
    constructor(
        private readonly companiesService: CompaniesService
    ) {}

    @Query(returns => [CompanyType])
    async companies(): Promise<CompanyType[]> {
        return this.companiesService.getAll();
    }

    @Query(returns => [SpecialityType])
    async specialities(): Promise<SpecialityType[]> {
        return this.companiesService.getSpecialities();
    }
}
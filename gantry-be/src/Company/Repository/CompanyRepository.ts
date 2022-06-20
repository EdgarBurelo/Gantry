import {Service, Inject} from "typedi";

@Service()
export class CompanyRepository {
    @Inject("CompanyTable")
    private readonly CompanyEntity: any

    async getAll(): Promise<any[]> {
        return this.CompanyEntity.findAll();
    }
}
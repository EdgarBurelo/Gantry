import { Database, Entity } from "fakebase";
import { Company as CompanyEntity } from '../Company/Entity/CompanyEntity'

const db = new Database('./src/Database/data/');

export const Company = db.table<CompanyEntity>('companies');
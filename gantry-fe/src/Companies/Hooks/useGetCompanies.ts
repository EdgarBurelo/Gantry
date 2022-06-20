import {ApolloError, gql, useQuery} from "@apollo/client";
import {Company} from "../Company.interface";


const GET_COMPANIES = gql`
    query {
        companies {
            id
            name
            city
            description
            logo
            specialty
        }
    }
`;

type APICompanyRequest = {
    companies: Company[];
    companiesError: ApolloError | undefined;
    companiesLoading: boolean;
}

export const useGetCompanies = (): APICompanyRequest => {
    const { data, error, loading } = useQuery(GET_COMPANIES);

    return {
        companies: !loading ? data?.companies : [],
        companiesError: error,
        companiesLoading: loading,
    };
};

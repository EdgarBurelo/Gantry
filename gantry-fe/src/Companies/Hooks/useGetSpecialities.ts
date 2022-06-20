import {ApolloError, gql, useQuery} from "@apollo/client";
import {Speciality} from "../Speciality.interface";

const GET_SPECIALITIES = gql`
    query {
        specialities {
            name
        }
    }
`;

type APISpecialityRequest = {
    specialities: Speciality[];
    specialitiesError: ApolloError | undefined;
    specialitiesLoading: boolean;
}

export const useGetSpecialities = (): APISpecialityRequest => {
    const { data, error, loading } = useQuery(GET_SPECIALITIES);

    return {
        specialities: !loading ? data?.specialities : [],
        specialitiesError: error,
        specialitiesLoading: loading,
    };
};

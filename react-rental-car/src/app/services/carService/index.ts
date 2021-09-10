import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "../../queries";
import { GetCars } from "../__generated__/GetCars";

class CarService {
  public async getCars(): Promise<GetCars[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });
    if (response && response.data && response.data.cars)
      return response.data.cars as GetCars[];
    return [];
  }
}

export default new CarService();

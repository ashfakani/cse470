import { render } from "@testing-library/react";
import Services from "./Services";

describe("All Services", () => {
    it("should render all services", () => {
        const { getByTestId } = render(<Services />);
        const services = getByTestId("services");
        expect(services).toBeTruthy();
    });
});
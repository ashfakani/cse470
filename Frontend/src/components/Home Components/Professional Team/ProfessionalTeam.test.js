import { render } from "@testing-library/react";
import ProfessionalTeam from "./ProfessionalTeam";

describe("Professional Team", () => {
    it("should render all team members", () => {
        const { getByTestId } = render(<ProfessionalTeam />);
        const team = getByTestId("team");
        expect(team).toBeTruthy();
    });
});
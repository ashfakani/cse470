import { render } from "@testing-library/react";
import ExploreGallery from "./ExploreGallery";

describe("Image Gallery", () => {
    it("should render all images", () => {
        const { getByTestId } = render(<ExploreGallery />);
        const images = getByTestId("images");
        expect(images).toBeTruthy();
    });
});
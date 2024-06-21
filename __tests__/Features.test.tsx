import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Features from '@/components/features/Features'
import { featuresProps } from '@/constatnts'

describe("Feature Component renders correctly", () => {
    it("All features present or not", () => {
        render(<Features />);

        const featureElements = screen.getAllByTestId("feature-elementre")
        expect(featureElements.length).toBe(featuresProps.length)
    })
})
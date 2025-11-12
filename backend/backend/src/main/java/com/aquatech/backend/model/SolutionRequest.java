package com.aquatech.backend.model;

public class SolutionRequest {
    private String solution;

    public SolutionRequest(String solution) {
        this.solution = solution;
    }

    // Getter and setter
    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }
}

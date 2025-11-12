package com.aquatech.backend.controller;

import com.aquatech.backend.service.SolutionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/solution")
@CrossOrigin(origins = "http://localhost:4200")
public class SolutionController {

    private final SolutionService solutionService;

    public SolutionController(SolutionService solutionService) {
        this.solutionService = solutionService;
    }

    @GetMapping
    public String getSolution(@RequestParam String missionId, @RequestParam String parameters) {
        return solutionService.solve(missionId, parameters);
    }
}

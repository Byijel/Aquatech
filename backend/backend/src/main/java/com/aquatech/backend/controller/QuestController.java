package com.aquatech.backend.controller;

import com.aquatech.backend.model.QuestResponse;
import com.aquatech.backend.service.QuestService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/quests")
public class QuestController {

    private final QuestService questService;

    public QuestController(QuestService questService) {
        this.questService = questService;
    }

    @GetMapping
    public Mono<QuestResponse> getQuests() {
        return questService.getQuests();
    }

    @PostMapping("/missions/{missionId}/solve")
    public Mono<String> solveMission(@PathVariable String missionId, @RequestBody String solution) {
        return questService.solveMission(missionId, solution);
    }
}

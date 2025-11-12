package com.aquatech.backend.service;

import com.aquatech.backend.model.QuestResponse;
import com.aquatech.backend.model.SolutionRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class QuestService {

    private final WebClient webClient;
    private final String teamId = "dad1df0b-4e71-4c85-9da1-76784effeb5b";

    public QuestService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://htf.collide.be/api").build();
    }

    public Mono<QuestResponse> getQuests() {
        return this.webClient.get()
                .uri("/teams/{teamId}/quest", teamId)
                .retrieve()
                .bodyToMono(QuestResponse.class);
    }

    public Mono<String> solveMission(String missionId, String solution) {
        SolutionRequest solutionRequest = new SolutionRequest(solution);
        return this.webClient.post()
                .uri("/missions/{missionId}/solution", missionId)
                .body(Mono.just(solutionRequest), SolutionRequest.class)
                .retrieve()
                .bodyToMono(String.class);
    }
}

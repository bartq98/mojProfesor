package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.entity.OpinionEntity;
import com.mojprofesor.backend.payload.AddOpinionRequest;
import com.mojprofesor.backend.payload.OpinionResponse;
import com.mojprofesor.backend.service.OpinionService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping( "/opinions")
public class OpinionController {

    private final OpinionService opinionService;

    @Autowired
    public OpinionController(OpinionService opinionService) {
        this.opinionService = opinionService;
    }

    @GetMapping("/{opinionID}")
    public OpinionResponse getOpinion(@PathVariable Long opinionID) {
        try {
            return opinionService.getOpinionByID(opinionID);
        }catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/{professorID}")
    public Page<OpinionResponse> getProfessorOpinions(@PathVariable Long professorID,
                                                     @RequestParam(defaultValue = "0") Integer page,
                                                     @RequestParam(defaultValue = "20") Integer size) {
            return opinionService.getOpinionByProfessorID(professorID, page, size);
    }

    @PostMapping
    public void addOpinion(@RequestBody @Valid AddOpinionRequest request) {
        opinionService.addOpinion(request);
    }
}

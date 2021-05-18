package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.payload.AddOpinionRequest;
import com.mojprofesor.backend.payload.OpinionResponse;
import com.mojprofesor.backend.service.OpinionService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.security.Principal;

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

    @GetMapping("/professor/{professorID}")
    public Page<OpinionResponse> getProfessorOpinions(@PathVariable Long professorID,
                                                     @RequestParam(defaultValue = "0") Integer page,
                                                     @RequestParam(defaultValue = "20") Integer size) {
        try {
            return opinionService.getOpinionByProfessorID(professorID, page, size);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping
    public void addOpinion(@RequestBody @Valid AddOpinionRequest request, Principal principal) {
        try {
            opinionService.addOpinion(request, principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{opinionID}")
    public void deleteOpinion(@PathVariable Long opinionID, Principal principal) {
        try {
            opinionService.deleteOpinion(opinionID, principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        } catch (AccessDeniedException e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, e.getMessage());
        }
    }

}

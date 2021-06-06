package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.payload.AddProfessorRequest;
import com.mojprofesor.backend.payload.ProfessorResponse;
import com.mojprofesor.backend.service.ProfessorService;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("/professor")
public class ProfessorController {

    private final ProfessorService professorService;

    @GetMapping
    public Page<ProfessorResponse> getAllProfessors(@RequestParam(defaultValue = "0") Integer page,
                                                    @RequestParam(defaultValue = "20") Integer size) {

        return professorService.getAllProfessors(page, size);
    }

    @GetMapping("/{professorId}")
    public ProfessorResponse getProfessorById(@PathVariable Long professorId) {
        try {
            return professorService.getProfessorById(professorId);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/{firstName}/{lastName}")
    public Page<ProfessorResponse> getProfessorsByData(@PathVariable String firstName,
                                                       @PathVariable String lastName,
                                                       @RequestParam(defaultValue = "0") Integer page,
                                                       @RequestParam(defaultValue = "20") Integer size) {

        return professorService.getProfessorsByFirstNameAndLastName(firstName, lastName, page, size);
    }

    @PostMapping
    public void addProfessor(@RequestBody @Valid AddProfessorRequest request, Principal principal) {
        try {
            professorService.addProfessor(request, principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PutMapping("/{professorId}")
    public void replaceProfessor(@RequestBody @Valid AddProfessorRequest request, @PathVariable Long professorId,
                                 Principal principal) {
        try {
            professorService.replaceProfessor(request, professorId, principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        } catch (AccessDeniedException e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, e.getMessage());
        }
    }

    @DeleteMapping("/{professorId}")
    public void deleteProfessor(@PathVariable Long professorId, Principal principal) {
        try {
            professorService.deleteProfessor(professorId, principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        } catch (AccessDeniedException e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, e.getMessage());
        }
    }
}

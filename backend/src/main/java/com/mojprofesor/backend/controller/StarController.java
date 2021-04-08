package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.exception.StarAlreadyExistsException;
import com.mojprofesor.backend.payload.AddStarRequest;
import com.mojprofesor.backend.service.StarService;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

/**
 * @author Patryk Borchowiec
 */
@RestController
@RequestMapping("/star")
public class StarController {
    private final StarService starService;

    public StarController(StarService starService) {
        this.starService = starService;
    }

    @PostMapping
    public void addStar(@RequestBody @Valid AddStarRequest request) {
        try {
            starService.addStar(request);
        } catch (StarAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

    @DeleteMapping("/{starId}")
    public void deleteStar(@PathVariable long starId) {
        try {
            starService.deleteStar(starId);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}

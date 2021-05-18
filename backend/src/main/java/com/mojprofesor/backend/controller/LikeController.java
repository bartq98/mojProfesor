package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.exception.LikeAlreadyExistsException;
import com.mojprofesor.backend.payload.AddLikeRequest;
import com.mojprofesor.backend.payload.LikesAmountResponse;
import com.mojprofesor.backend.service.LikeService;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.security.Principal;

/**
 * @author Patryk Borchowiec
 */
@RestController
@RequestMapping("/like")
public class LikeController {
    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping
    public void addLike(@RequestBody @Valid AddLikeRequest request, Principal principal) {
        try {
            likeService.addLike(request, principal);
        } catch (LikeAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{likeId}")
    public void deleteLike(@PathVariable long likeId, Principal principal) {
        try {
            likeService.deleteLike(likeId, principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        } catch (AccessDeniedException e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, e.getMessage());
        }
    }

    /**
     * @param opinionId Id of opinion.
     * @return Amount of likes up and down for given opinion.
     */
    @GetMapping("/{opinionId}/amount")
    public LikesAmountResponse getAmountOfLikes(@PathVariable Long opinionId) {
        try {
            return likeService.getAmountOfStars(opinionId);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}

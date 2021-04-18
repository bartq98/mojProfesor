package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.exception.LikeAlreadyExistsException;
import com.mojprofesor.backend.payload.AddLikeRequest;
import com.mojprofesor.backend.payload.LikesAmountResponse;
import com.mojprofesor.backend.service.LikeService;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

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
    public void addLike(@RequestBody @Valid AddLikeRequest request) {
        try {
            likeService.addLike(request);
        } catch (LikeAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

    @DeleteMapping("/{likeId}")
    public void deleteLike(@PathVariable long likeId) {
        try {
            likeService.deleteLike(likeId);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    /**
     * @param opinionId Id of opinion.
     * @return Amount of likes up and down for given opinion.
     */
    @GetMapping("/{opinionId}/amount") /*TODO should be moved to opinion controller*/
    public LikesAmountResponse getAmountOfLikes(@PathVariable Long opinionId) {
        return likeService.getAmountOfStars(opinionId);
    }
}
